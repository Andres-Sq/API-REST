import express from 'express';
import clientController from '../controllers/clientController.js';

const route =  express.Router();

route.post('/', clientController.create);
route.get('/', clientController.read);
route.get('/id');
route.put('/:id', clientController.update);
route.delete('/:id', clientController.delete);

export default route;