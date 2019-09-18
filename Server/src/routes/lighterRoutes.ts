import {Router} from 'express';
import {lighterController} from '../controllers/lighterController';

class LighterRoutes{
    
    public router: Router = Router();

    constructor(){
        this.config(); 
    }

    config(): void{
        this.router.get('/',lighterController.data);
        this.router.post('/',lighterController.create);
    }
}

const lighterRoutes = new LighterRoutes();
export default lighterRoutes.router;