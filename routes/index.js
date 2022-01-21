const express = require('express');

import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';

const Routers = (app) => {
  const router = express.Router();
  app.use(express.json());
  app.use('/', router);

  router.get('/status', (_, res) => {
    AppController.getStatus(res);
  });

  router.get('/stats', (_, res) => {
    AppController.getStats(res);
  });

  router.post('/users', (req, res) => {
    UsersController.postNew(req, res);
  });

  router.get('/connect', (req, res) => {
    AuthController.getConnect(req, res);
  });

  router.get('/disconnect', (req, res) => {
    AuthController.getDisconnect(req, res);
  });

  router.get('/users/me', (req, res) => {
    UsersController.getMe(req, res);
  });
};
export default Routers;
