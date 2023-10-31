import express, { Application, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
//import todoRoutes from './routes/todos';

dotenv.config()

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// mongoose.connect('mongodb://localhost/your-database-name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

app.get('/', (req: Request, res: Response) => {
  res.send(`Hello, it's a API and I'm running!`);
});

//app.use('/todos', todoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
