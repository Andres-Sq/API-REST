import clientModel from '../models/clientModel.js';

class clientController {
    constructor(clientService) {
        this.clientService = clientService;
    }
//CRUD
    // Create
    async create(req, res) {
        try {
            const client = clientModel.create(req.body);
            res.status(201).json(client);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
    // Read
    async read(req, res) {
        try {
            const client = await this.clientService.read();
            res.json(client);
        } catch (e) {
            res.status(500).send(error.message);
        }
    }
    // Update
    async update(req, res) {
        try {
            const client = await this.clientService.update();
            res.json(client);
        } catch (e) {
            res.status(500).send(error.message);
        }
    }
    // Delete
    async delete(req, res) {
        try {
            const client = await this.clientService.delete();
            res.json(client);
        } catch (e) {
            res.status(500).send(error.message);
        }
    }

    // Read by ID
    async getAll(req, res) {
        try {
            const client = await this.clientService.getAll();
            res.json(client);
        } catch (e) {
            res.status(500).send(error.message);
        }
    }    
    // Read All
    async getOne(req, res) {
        try {
            const client = await this.clientService.getOne();
            res.json(client);
        } catch (e) {
            res.status(500).send(error.message);
        }
    }
}

export default new clientController();