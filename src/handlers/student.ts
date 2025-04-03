import {  Request, Response, NextFunction } from 'express';
import StudentController from '../controllers/student';

const studentController = new StudentController();

class StudentHttpHandler {
    

    async getAllStudents(request: Request, response: Response, next: NextFunction) {
        try {
            const students = await studentController.AllStudents();
            response.json(students)
        } catch (error) {
            next(error)
        }
    }

    async getAllStudentsFilter(request: Request, response: Response, next: NextFunction) {
        try {
            const students = await studentController.AllStudentsFilter();
            response.json(students)
        } catch (error) {
            next(error)
        }
    }
 

}

export default StudentHttpHandler;