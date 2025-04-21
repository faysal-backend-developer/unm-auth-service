import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;
