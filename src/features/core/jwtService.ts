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
