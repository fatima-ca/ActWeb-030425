import express from 'express';
import studentRoutes from './src/routes/student';

const app = express();
app.use(express.json());


app.use('/alumnos', studentRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server running'))