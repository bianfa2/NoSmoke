import {Request, Response, response} from 'express';
import db from '../database';
import { text } from 'body-parser';

class DataController{
    
  public data(req: Request,res:Response) {        
        console.log(req.body);
        console.log('funcionamiento')
        res.json({text:'hola'})     
    }

    public create(req: Request, res: Response){
      
        db.collection('encendedores').doc(req.params.id)        
          .get().then((doc:any) => {
            var data = doc.data()
            var ultimo = data.ultimo
                  
              if(data.ultimo==-1){
                
                db.collection('encendedores').doc(req.params.id).update({[ultimo+1]:[currentDate(),1],ultimo:ultimo+1})
                
              }else{
                  if(isToday(new Date(data[data.ultimo][0].split(' ')[0]), new Date())){
                    var fumados = data[data.ultimo][1]
                    db.collection('encendedores').doc(req.params.id).update({[ultimo]:[currentDate(),fumados+1]})
                  }else{
                    db.collection('encendedores').doc(req.params.id).update({[ultimo+1]:[currentDate(),1],ultimo:ultimo+1})
                  }
              }
              })
                  .catch((err:any) => {
                  res.json(false)
                  console.log('Error getting document', err);                
              });
              res.json(true)      
    }

}

function currentDate(){
  var a = new Date()
  return (a.getMonth()+1)+'/'+a.getDate()+'/'+a.getFullYear()+' '+a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();
}

function isToday(date1:any, date2:any) {
  var one_day = 1000 * 60 * 60 * 24;
  var difference_ms = date2.getTime() - date1.getTime();
  return Math.floor(difference_ms / one_day) == 0;
}

export const dataController = new DataController();