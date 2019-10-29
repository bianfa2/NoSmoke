import {Request, Response, response} from 'express';
import db from '../database';
import { text } from 'body-parser';

class AchievementController{
    
  public data(req: Request,res:Response) {  
      
    db.collection('encendedores').doc(req.params.id)
        .get().then((doc : any) => {
            var data = doc.data()
            var difference = daysDiff(new Date(data[data.ultimo][0].split(' ')[0]), new Date(currentDate()))
                if(difference<=0) res.json({})
                
                else{

                    db.collection('logros').where('logro','<=',difference)
                    .get()
                    .then(function(querySnapshot:any){
                        var achievementArray: any = [];
                        querySnapshot.forEach(function(doc2:any) {                               
                            achievementArray.push(doc2.data())                            
                })
                        res.json(achievementArray)
                    })
                    
                }
                
            

        }).catch((err:any) => {
            res.json({})
            console.log('Error getting document', err);                
        });
    
    }

}

function currentDate(){
  var a = new Date()
  return (a.getMonth()+1)+'/'+a.getDate()+'/'+a.getFullYear();
}

function daysDiff(date1:any, date2:any) {
  var one_day = 1000 * 60 * 60 * 24;
  var difference_ms = date2.getTime() - date1.getTime();
  return Math.floor(difference_ms / one_day);
}

export const achievementController = new AchievementController();