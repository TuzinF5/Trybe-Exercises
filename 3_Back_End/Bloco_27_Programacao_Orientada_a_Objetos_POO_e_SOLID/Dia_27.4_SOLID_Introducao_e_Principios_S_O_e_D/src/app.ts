import express from 'express';
import plantsRoutes from './routes/plantsRoutes';

const app = express();

app.use('/plants', plantsRoutes);

app.use('/plant', plantsRoutes);

export default app;
