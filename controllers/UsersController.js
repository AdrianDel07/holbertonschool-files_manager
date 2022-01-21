import sha1 from 'sha1';
import dbClient from '../utils/db';

class UsersController {
  static async postNew(req, res) {
    const { email, password } = req.body;
    if (!email) {
      res.status(400).send({ error: 'Missing email' });
    }
    if (!password) {
      res.status(400).send({ error: 'Missing password' });
    }

    const isEmailExists = await dbClient.users.findOne({ email });

    if (isEmailExists) {
      res.status(400).send({ error: 'Already exist' });
    }

    const encPassword = sha1(password);

    const insertUser = await dbClient.users.insertOne({
      email,
      password: encPassword,
    });

    return res.status(200).send({ email, password: insertUser.insertedId });
  }
}

export default UsersController;
