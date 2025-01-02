import { MongoClient } from 'mongodb';

class dbCLient{
    constructor(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=Gym`;
        this.client = new MongoClient(queryString);
        this.connect();
    }
    async connect(){
        await this.client.connect();
        console.log('Connected to MongoDB');
    }
    get(){
        return this.client.db('Gym');
    }
    close(){
        this.client.close();
    }
}

export default new dbCLient;