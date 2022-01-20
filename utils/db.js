import { MongoClient } from 'mongodb';

const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = process.env.DB_PORT || 27017;
const DATABASE = process.env.DB_DATABASE || 'files_manager';

const URL = `mongodb://${DB_HOST}:${DB_PORT}`;

class DBClient {
  constructor() {
    MongoClient.connect(URL, { useUnifiedTopology: true }, (err, client) => {
      if (!err) {
        this.db = client.db(DATABASE);
      } else {
        console.log(err.message);
      }
    });
  }

  isAlive() {
    return !!this.db;
  }

  async nbUsers() {
    const users = await this.db.collection('users');
    return users.countDocuments();
  }

  async nbFiles() {
    const files = await this.db.collection('files');
    return files.countDocuments();
  }
}

const dbClient = new DBClient();

export default dbClient;
