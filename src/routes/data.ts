import express from 'express';
import DataHttpHandler from '../handlers/data';

const router = express.Router();

const dataHttpHandler = new DataHttpHandler();

router.get('/Info', dataHttpHandler.getInfoSolicitada); //Tarea
router.get('/AllData', dataHttpHandler.getData);
router.get('/Max', dataHttpHandler.getMax);
router.get('/Min', dataHttpHandler.getMin);
router.get('/Mediana', dataHttpHandler.getMediana);
router.get('/q1', dataHttpHandler.PrimerCuartil);
router.get('/q3', dataHttpHandler.TercerCuartil);


export default router;