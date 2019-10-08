import {Router} from 'express';
import {statisticController} from '../controllers/statisticController';

class StatisticRoutes{
    
    public router: Router = Router();

    constructor(){
        this.config(); 
    }

    config(): void{
        this.router.get('/');
        this.router.post('/');
    }
}

const statisticRoutes = new StatisticRoutes();
export default statisticRoutes.router;