import axios, { AxiosResponse } from 'axios';

const handleSuccessResponse = (response: AxiosResponse<any>) => response;

const handleErrorResponse = (error: any) => {
  console.error(error);
  return Promise.reject(error);
};

const api = axios.create();
api.defaults.baseURL = 'http://localhost:4000/api';
api.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json',
};
api.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

export default api;
