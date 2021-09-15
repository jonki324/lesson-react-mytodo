import { user } from '../../types/user';
import api from '../core/httpClient';

const apiPath = '/users';
const apiAuth = '/login';

export const fetchUserById = async (id: number) => {
  return await api.get<user>(`${apiPath}/${id}`);
};

export const fetchUserList = async () => {
  return await api.get<user[]>(apiPath);
};

export const isAuthenticated = async (user: Partial<user>) => {
  return await api.post<user>(apiAuth, user);
};
