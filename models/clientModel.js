import dbClient from "../config/dbClient.js";


class clientModel {

    async create(client){
        const colClient = dbClient.db.collection('client');
        await colClient.insertOne(client);
    }
}

export default new clientModel();