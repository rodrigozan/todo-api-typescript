import mongoose, { Schema, Document, Model } from 'mongoose';
import db from '../database/mongoose.config'; // Adjust the path as needed.

export interface ITodo extends Document {
  title: string;
  completed: boolean;
}

const todoSchema: Schema = new Schema<ITodo>({
  title: String,
  completed: Boolean,
});

const Todo: Model<ITodo> = mongoose.model<ITodo>('Todo', todoSchema);

export default Todo;
