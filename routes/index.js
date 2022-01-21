const express = require('express');
const router = express.Router();

import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

router.get('/status', (_, res) => {
  AppController.getStatus(res);
});

router.get('/stats', (_, res) => {
  AppController.getStats(res);
});

router.post('/users', (req, res) => {
  UsersController.postNew(req, res);
});

export default router;
