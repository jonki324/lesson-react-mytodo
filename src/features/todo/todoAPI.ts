import { TodoModel } from '../../types/todo';
import api from '../core/httpClient';

const apiPath = '/todos';

export const fetchTodoList = async () => {
  return await api.get<TodoModel[]>(apiPath);
};

export const createTodo = async (todo: Partial<TodoModel>) => {
  return await api.post<TodoModel>(apiPath, todo);
};

export const deleteTodo = async (todo: TodoModel) => {
  return await api.delete<any>(`${apiPath}/${todo.id}`, { data: todo });
};

export const updateTodo = async (todo: TodoModel) => {
  return await api.put<TodoModel>(`${apiPath}/${todo.id}`, todo);
};

export const deleteAllTodo = async (todoList: { todoList: TodoModel[] }) => {
  return await api.delete<any>(apiPath, { data: todoList });
};

export const updateAllTodo = async (todoList: { todoList: TodoModel[] }) => {
  return await api.put<any>(apiPath, todoList);
};
