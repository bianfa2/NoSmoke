import {Request, Response} from 'express';
import db from '../database';
import { text } from 'body-parser';

class DataController{
    public data(req: Request,res:Response) {        
        res.send('Data');
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