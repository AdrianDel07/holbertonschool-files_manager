import sha1 from 'sha1';
import Queue from 'bull';
import dbClient from '../utils/db';

const userQueue = new Queue('userQ');

class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).send({ error: 'Missing email' });
    }
    if (!password) {
      return res.status(400).send({ error: 'Missing password' });
    }

    const isEmailExists = await dbClient.users.findOne({ email });

    if (isEmailExists) {
      return res.status(400).send({ error: 'Already exist' });
    }

    const encPassword = sha1(password);

    const insertUser = await dbClient.users.insertOne({
      email,
      password: encPassword,
    });

    await userQueue.add({
      userId: insertStat.insertedId.toString(),
    });

    return res.status(201).send({ email, id: insertUser.insertedId });
  }
}

export default UsersController;
