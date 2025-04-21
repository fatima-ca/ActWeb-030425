import {  Request, Response, NextFunction } from 'express';
import NumController from '../controllers/num';

const numController = new NumController();

class NumHTTPHandler {
    
    async getAreaCuadrado(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await numController.getAreaCuadrado();
            response.json(data);
        } catch (error) {
            next(error)
        }
    }

    async getAreaCirculo(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await numController.getAreaCirculo();
            response.json(data);
        } catch (error) {
            next(error)
        }
    }

    async getAreaTria(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await numController.getAreaTriangulo();
            response.json(data);
        } catch (error) {
            next(error)
        }
    }

   
}

export default NumHTTPHandler;