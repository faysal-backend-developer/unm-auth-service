import express, { Application } from 'express';
import cors from 'cors';
import routers from './app/modules/Routers';
import { generateUserId } from './app/modules/user/User.utils';
import morgan from 'morgan';
import globalErrorHandler from './middleware/globalErrorHandler/globalErrorHandler';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
// Main Route: 
app.use("/api/v2", routers)

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});


// For Testing purposes
// app.get('/api/v2', async (req, res) => {
//     const newid = await generateUserId();
//     res.send(newid);
// });






app.use(globalErrorHandler)

export default app;
