import { todo } from '../../types/todo';
import api from '../core/httpClient';

const apiPath = '/todos';

export const fetchTodoList = async () => {
  return await api.get<todo[]>(apiPath);
};

export const createTodo = async (todo: Partial<todo>) => {
  return await api.post<todo>(apiPath, todo);
};

export const deleteTodo = async (todo: todo) => {
  return await api.delete<any>(`${apiPath}/${todo.id}`, { data: todo });
};

export const updateTodo = async (todo: todo) => {
  return await api.put<todo>(`${apiPath}/${todo.id}`, todo);
};

export const deleteAllTodo = async (todoList: { todoList: todo[] }) => {
  return await api.delete<any>(apiPath, { data: todoList });
};

export const updateAllTodo = async (todoList: { todoList: todo[] }) => {
  return await api.put<any>(apiPath, todoList);
};
