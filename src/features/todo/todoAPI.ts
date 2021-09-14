import { todo } from '../../types/todo';
import api from '../core/httpClient';

const apiPath = '/todos';

export const fetchTodoList = async () => {
  return await api.get<todo[]>(apiPath);
};
