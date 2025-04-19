import express from 'express';
import studentRoutes from './src/routes/student';
import dataRoutes from './src/routes/data'
const app = express();
app.use(express.json());


app.use('/alumnos', studentRoutes);
app.use('/data', dataRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log('Server running'))