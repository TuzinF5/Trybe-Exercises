import { Request, Response, Router } from 'express';
import PlantServices from '../services/PlantServices';

class PlantsControllers {
  public static async getAll(_req: Request, res: Response) {
    const plants = await PlantServices.getPlants();
    return res.status(200).json(plants);
  }

  public static async getById(req: Request, res: Response) {
    const { id } = req.params
    const plants = await PlantServices.getById(id);
    return res.status(200).json(plants);
  }
}

export default PlantsControllers;
