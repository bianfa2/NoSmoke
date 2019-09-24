import {Request, Response, response} from 'express';
import db from '../database';

class LigtherController{
    public data(req: Request,res:Response){        
        console.log(req.body);
        
    db.collection('encendedores').doc(req.body.id).get()
    .then((doc:any) => {
      if (!doc.exists) {
       res.json({exists:false})
      } else {
        res.json({exists:true})
      }
    })
      .catch((err: any) => {
      console.log('Error getting document', err);
      });
    }

    create(req: Request, res: Response){
        // console.log(req.body);
        // db.collection("referenciaEncendedor").doc().set(req.body)
        // .then(function(){      
        //     console.log("Documento esctrito")            
        //   })
        //   .catch(function(error: Error){
        //     console.error("Error escribiendo el documento: ",error)
        //   });

        // res.json({text:'creating smoking data'});
    }
}

export const lighterController = new LigtherController();