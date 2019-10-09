import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import dataRoutes from './routes/dataRoutes';
import lighterRoutes from './routes/lighterRoutes';
import statisticRoutes from './routes/statisticRoutes'

import db from './database';

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config() : void {
        this.app.set('port',process.env.PORT || 3000); 
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes() : void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/data',dataRoutes);
        this.app.use('/api/lighter',lighterRoutes);
        this.app.use('/api/lighter',statisticRoutes);
    }
    start() : any{
        return this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port',this.app.get('port'));            
        });
    }
}

const server = new Server();
var serv = server.start();
const SocketIO = require("socket.io");
const io = SocketIO(serv);
// io.set('transports', ['websocket']);
// io.set('origins', '*:*');

io.on('connection', (socket:any) => {
    console.log("new connection");
    socket.on('lighter', (lighter: any)=>{
        let query = db.collection('encendedores').doc(lighter);
        let observer = query.onSnapshot((doc:any) => {
            var userData = {
                last:null,
                current: 0,
                total: 0
            };
            var data = doc.data();
            for (var i = 0; i <= data.ultimo; i++) {
                userData.total += data[i][1];
                console.log(data[i][0]);
                console.log(userData.total);
                
            }
            if (isToday(new Date(data[data.ultimo][0].split(' ')[0]), new Date())) {
                userData.current = data[data.ultimo][1];
            }
            userData.last=data[data.ultimo][0]
            console.log(lighter)
            io.sockets.emit(lighter, userData);
        }, (err:any) => {
            console.log(`Encountered error: ${err}`);
        });
    })
});
function isToday(date1:Date, date2:Date) {
    // date2.setTime(date1.getTime());
    var one_day = 1000 * 60 * 60 * 24;
    var difference_ms = date2.getTime() - date1.getTime();
    console.log((difference_ms / one_day))
    return Math.floor(difference_ms / one_day) == 0;
}