import {Router} from 'express';
import {achievementController} from '../controllers/achievementController';

class AchievementRoutes{
    
    public router: Router = Router();

    constructor(){
        this.config(); 
    }

    config(): void{
        this.router.get('/id=:id',achievementController.data);       
    }
}

const achievementRoutes = new AchievementRoutes();
export default achievementRoutes.router;