import express,{Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import dataRoutes from './routes/dataRoutes';

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
const io= SocketIO(serv);

io.on('connection', ()=>{
    console.log("new connection")
})