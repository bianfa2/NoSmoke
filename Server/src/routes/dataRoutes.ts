import {Router} from 'express';
class DataRoutes{
    
    public router: Router = Router();

    constructor(){
        this.config(); 
    }

    config(): void{
        this.router.get('/',);
    }
}

const dataRoutes = new DataRoutes();
export default dataRoutes.router;