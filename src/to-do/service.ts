import Todo, { ITodo } from './model';

// Create a new Todo
export async function createTodo(title: string, completed: boolean): Promise<ITodo> {
  const newTodo: ITodo = new Todo({ title, completed });
  return await newTodo.save();
}

// Retrieve all Todos
export async function getAllTodos(): Promise<ITodo[]> {
  return await Todo.find();
}

// Retrieve a Todo by ID
export async function getTodoById(id: string): Promise<ITodo | null> {
  return await Todo.findById(id);
}

// Update a Todo by ID
export async function updateTodo(id: string, updatedFields: Partial<ITodo>): Promise<ITodo | null> {
  return await Todo.findByIdAndUpdate(id, updatedFields, { new: true });
}

// Delete a Todo by ID
export async function deleteTodo(id: string): Promise<boolean> {
  const result = await Todo.findByIdAndDelete(id);
  return result !== null;
}
