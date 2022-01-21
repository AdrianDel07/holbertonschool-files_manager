const express = require('express');
const router = express.Router();

import AppController from '../controllers/AppController';

const appController = new AppController();

router.get('/status', (_, res) => {  
  res.status(200).send(appController.getStatus());
});

router.get('/stats', async (_, res) => {  
    res.status(200).send(await appController.getStats());
  });

export default router;
