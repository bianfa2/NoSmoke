import {Request, Response, response} from 'express';
import db from '../database';

class LigtherController{
    public data(req: Request,res:Response) {        
        console.log(req.body);
        console.log('funcionamiento lighter controller')

        
  res.json({text:'funcionamiento del get'})
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
        db.collection("referenciaEncendedor").doc().set(req.body)
        .then(function(){      
            console.log("Documento esctrito")            
          })
          .catch(function(error: Error){
            console.error("Error escribiendo el documento: ",error)
          });

        res.json({text:'creating smoking data'});
    }
}

export const dataController = new LigtherController();