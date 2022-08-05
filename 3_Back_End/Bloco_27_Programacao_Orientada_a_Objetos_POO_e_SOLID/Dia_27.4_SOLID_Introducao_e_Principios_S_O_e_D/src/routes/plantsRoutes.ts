import { Router } from 'express';
import PlantsController from '../controllers/PlantsController';

const router = Router();

router.get('/', PlantsController.getAll);

router.get('/:id', PlantsController.getById);

export default router;
