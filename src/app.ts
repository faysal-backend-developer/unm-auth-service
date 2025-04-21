import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routers from './app/modules/Routers';
import { generateUserId } from './app/modules/user/User.utils';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/v2', async (req, res) => {
    const newid = await generateUserId();
    // console.log(user)
    res.send(newid);
});

app.use("/api/v2", routers)

export default app;
