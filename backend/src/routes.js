const {Router} = require('express');
const ongCrontroller = require('./controllers/ongCrontroller');
const incidentsController = require('./controllers/incidentController');
const  profileController= require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');


const routes  = Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongCrontroller.list);
routes.post('/ongs', ongCrontroller.create);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);

routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);

module.exports = routes;