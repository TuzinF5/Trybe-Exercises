import fs from 'fs/promises';
import IPlant from '../interfaces/IPlants';

class Plants {
  private static readonly plantsFile = 'plantsData.json';

  public static async getPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(Plants.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }

  public static async getById(id: string): Promise<IPlant | null> {
    const plantsRaw = await fs.readFile(Plants.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);

    const plantById = plants.find((plant) => plant.id === id);
    if (!plantById) return null;
    return plantById;
  }
}

export default Plants;
