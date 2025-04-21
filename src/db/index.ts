import mongoose from 'mongoose';

const connectDB = async (dbURL: string) => {
  try {
    await mongoose.connect(dbURL);
    console.log('DB connected', dbURL);
  } catch (error) {
    console.log('DB connection error:', error);
  }
};

export default connectDB;
