import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routers from './app/modules/Routers';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api', (req, res) => {
    res.json({ message: 'API is working' });
});

app.use("/api/v2", routers)

export default app;
