import app from './app';
import { Server } from 'http';
import config from './config';
import connectDB from './db';




let server: Server;

process.on('uncaughtException', (error) => {
    console.error('uncaughtException', error);
    process.exit(1);
})

const run = async () => {
    try {
        // DB connection
        await connectDB(config.DB_URL as string);
        server = app.listen(config.PORT, () => {
            console.log(`Server is running on port ${config.PORT}`);
        });


    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1);
    }
};


process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    if (server) {
        server.close(() => {
            console.log('Server closed due to unhandled promise rejection');
            process.exit(1);
        });
    }
    else {
        console.error('Server is not running');
        process.exit(1);
    }
})


run();


process.on("SIGTERM", () => {
    console.log("Server is shutting down");
    if (server) {
        server.close(() => {
            console.log("Server closed");
            process.exit(0);
        });
    } else {
        console.error("Server is not running");
        process.exit(0);
    }
})
