import express from 'express';
import plantsRoutes from './routes/plantsRoutes';

const app = express();

app.use('/plants', plantsRoutes);

export default app;
