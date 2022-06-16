import { Router} from "express";

const autorRoutes = Router();

autorRoutes.get('/', (req,res) => {
    return res.send('Index autores');
})

export default autorRoutes;