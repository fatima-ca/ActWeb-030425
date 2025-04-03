import express from 'express';
import StudentHttpHandler from '../handlers/student';

const router  = express.Router();

const studentHttpHandler= new StudentHttpHandler();

router.get('/', studentHttpHandler.getAllStudents);
router.get('/filter', studentHttpHandler.getAllStudentsFilter);


export default router;