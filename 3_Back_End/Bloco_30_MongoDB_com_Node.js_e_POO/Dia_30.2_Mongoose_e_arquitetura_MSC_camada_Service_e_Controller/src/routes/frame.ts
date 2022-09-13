import { Router } from 'express';
import FrameController from '../controllers/Frame';
import FrameModel from '../models/Frame';
import FrameService from '../services/Frame';

const route = Router();

const frameModel = new FrameModel();
const frameService = new FrameService(frameModel);
const frameController = new FrameController(frameService);

route.post('/frame', (req, res) => frameController.create(req, res));

route.get('/frame/:id', (req, res) => frameController.readOne(req, res));

route.get('/frames', (req, res) => frameController.getAll(req, res));

export default route;