import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  getStatus() {
    return {
      redis: redisClient.isAlive(),
      db: dbClient.isAlive(),
    };
  }

  async getStats() {
    const stats = {
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    };
    return stats;
  }
}

export default AppController;
