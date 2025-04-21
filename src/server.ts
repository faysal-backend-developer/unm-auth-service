import app from './app';
import { Server } from 'http';
import config from './config';
import connectDB from './db';

let server: Server;
const run = async () => {
  try {
    // DB connection
    await connectDB(config.DB_URL as string);
    server = app.listen(config.PORT, () => {
      console.log(`Server is running on port ${config.PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

// এখানে আমরা সার্ভার শুরু করার জন্য একটি ফাংশন তৈরি করেছি যা সার্ভার শুরু করতে ব্যবহৃত হবে। এখানে সার্ভার দিয়ে আর কি কি কাজ করা যায় তা জানতে হবে ।

run();
