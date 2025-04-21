import express from 'express';
//import NumHttpHandler from '../handlers/data';
import NumHttpHandler from '../handlers/num';

const router = express.Router();

const numhttpHandler = new NumHttpHandler();

router.get('/AreaCuadrado', numhttpHandler.getAreaCuadrado); 
router.get('/AreaCirculo', numhttpHandler.getAreaCirculo); 
router.get('/AreaTriangulo', numhttpHandler.getAreaTria); 

export default router;