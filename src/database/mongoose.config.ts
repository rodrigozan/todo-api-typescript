import mongoose, { ConnectOptions } from 'mongoose';

const dbUri = process.env.DB_URI; // Replace with your MongoDB URI.

mongoose.connect(dbUri);

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Mongoose connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default db;
