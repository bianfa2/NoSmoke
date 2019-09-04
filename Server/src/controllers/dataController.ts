import {Request, Response, response} from 'express';
import db from '../database';
import { text } from 'body-parser';

class DataController{
    
  public data(req: Request,res:Response) {        
        console.log(req.body);
        console.log('funcionamiento')

        
  res.json({text:'hola'})
      //  res.json(db.collection('datosEncendedor').doc('81Y3vsbFVHhiiycMAVrS'));

      //   let observer = doc.onSnapshot((docSnapshot: any) => {          
      //     console.log(`Received doc snapshot: ${docSnapshot}`+docSnapshot.data().encendida);
      //       res.json({datas:observer});
      //   }, (err:any) => {
      //     console.log(`Encountered error: ${err}`);
      //   });
    }

    create(req: Request, res: Response){
        console.log(req.body);
        db.collection("datosEncendedor").doc().set(req.body)
        .then(function(){      
            console.log("Documento esctrito")            
          })
          .catch(function(error: Error){
            console.error("Error escribiendo el documento: ",error)
          });

        res.json({text:'creating smoking data'});
    }
}

export const dataController = new DataController();