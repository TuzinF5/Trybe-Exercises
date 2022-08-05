import fs from 'fs/promises';
import IPlant from '../interfaces/IPlants';

class Plants {
  private static readonly plantsFile = 'plantsData.json';

  public static async getPlants(): Promise<IPlant[]> {
    const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
    const plants: IPlant[] = JSON.parse(plantsRaw);
    return plants;
  }
}

export default Plants;