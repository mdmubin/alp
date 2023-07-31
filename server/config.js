import 'dotenv/config';

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/alpTest';
export const NODE_ENV = process.env.NODE_ENV || 'development';
