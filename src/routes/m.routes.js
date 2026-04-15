const { Router } = require('express');
const MovieController = require('../controllers/m.controller');

const movieRoutes = Router();

movieRoutes.post('/movies', MovieController.create);      

movieRoutes.get('/movies', MovieController.list);       

movieRoutes.put('/movies/:id', MovieController.update);   

movieRoutes.delete('/movies/:id', MovieController.delete); 

module.exports = movieRoutes;