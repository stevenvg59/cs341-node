const routes = require('express').Router();
const lesson1Controller = require('../controllers/controller1');


routes.get('/', lesson1Controller.sarahRoute);
routes.get('/steven', lesson1Controller.stevenRoute);

module.exports  = routes;