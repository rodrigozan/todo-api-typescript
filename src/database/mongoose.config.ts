import mongoose, { ConnectOptions } from 'mongoose';

const mongooseOptions: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  // Add other options as needed.
};

const dbUri = 'mongodb+srv://rodzantodo:Seilad12@cluster0.rlc2e8r.mongodb.net/'; // Replace with your MongoDB URI.

mongoose.connect(dbUri, mongooseOptions);

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Mongoose connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default mongoose;
