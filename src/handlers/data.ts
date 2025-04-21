//En handler no se impelemnta lógica
import {  Request, Response, NextFunction } from 'express';
import  DataController  from '../controllers/data'

const dataController = new DataController();

class DataHTTPHandler {
    
    async getData(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await dataController.getData();
            response.json(data);
        } catch (error) {
            next(error)
        }
    }

    async getMax(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await dataController.getMax();
            response.json(data);
        } catch (error) {
            next(error)
        }
    }

    async getMin(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await dataController.getMin();
            response.json(data);
        } catch (error) {
            next(error)
        }
    }

    async getInfoSolicitada(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await dataController.getInfoSolicitada();
            response.json(data);
        } catch (error) {
            next(error)
        }
    }

    async getMediana(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await dataController.getMediana();
            response.json(data);
        } catch (error) {
            next(error)
        }
    }

    async PrimerCuartil(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await dataController.PrimerCuartil();
            response.json(data);
        } catch (error) {
            next(error)
        }
    }

    async TercerCuartil(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await dataController.TercerCuartil();
            response.json(data);
        } catch (error) {
            next(error)
        }
    }



   
}

export default DataHTTPHandler;