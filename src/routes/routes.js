const express = require('express');
const routes = express.Router();

const PublishController = require('../controllers/PublishController.js');

routes.get('/publish', PublishController.index);
routes.get('/publish/:status', PublishController.show);
routes.post('/publish', PublishController.store)
routes.put('/publish/:id', PublishController.update);


module.exports = routes;