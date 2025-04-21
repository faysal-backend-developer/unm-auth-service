import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(process.cwd(), '.env'),
});

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5500,
  DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/myapp',
  USER_DEFAULT_PASSWORD: process.env.USER_DEFAULT_PASSWORD
};
