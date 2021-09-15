import { UserModel } from '../../types/user';
import api from '../core/httpClient';

const apiPath = '/users';
const apiAuth = '/login';

export const fetchUserById = async (id: number) => {
  return await api.get<UserModel>(`${apiPath}/${id}`);
};

export const fetchUserList = async () => {
  return await api.get<UserModel[]>(apiPath);
};

export const isAuthenticated = async (user: Partial<UserModel>) => {
  return await api.post<UserModel>(apiAuth, user);
};
