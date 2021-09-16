import { UserModel } from '../../types/user';

const JWT_KEY = 'jwt';

export const getToken = () => {
  return localStorage.getItem(JWT_KEY);
};

export const saveToken = (jwt: string) => {
  localStorage.setItem(JWT_KEY, jwt);
};

export const destoryToken = () => {
  localStorage.removeItem(JWT_KEY);
};

export const existToken = () => {
  return getToken() !== null && getToken() !== '';
};

export const getLoginUserInfo = () => {
  const token = getToken() || '';
  const tokenJson = JSON.parse(window.atob(token.split('.')[1]));
  const user: Partial<UserModel> = {
    id: tokenJson.id,
    name: tokenJson.name,
    role: tokenJson.groups,
  };
  return user;
};
