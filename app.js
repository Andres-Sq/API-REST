import 'dotenv/config';
import express from 'express';
import routeClient from './routes/client.js';

const app = express(); //Run app

app.use('/client', routeClient);

try {
    const PORT = process.env.PORT || 3000; //Define port or use 3000
    app.listen(PORT, ()=> console.log('Service Running Port ' + PORT));
} catch (e) {
    console.log(e)
}