import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from './jwtService';

const defaultHeaders = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json',
};

const handoleSuccessRequest = (config: AxiosRequestConfig) => {
  const token = getToken();
  if (token) {
    config.headers = { ...config.headers, Authorization: `Bearer ${token}` };
  }
  return config;
};

const handleErrorRequest = (error: any) => {
  console.error(error);
  return Promise.reject(error);
};

const handleSuccessResponse = (response: AxiosResponse<any>) => response;

const handleErrorResponse = (error: any) => {
  console.error(error);
  return Promise.reject(error);
};

const api = axios.create();
api.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
api.defaults.headers = defaultHeaders;
api.interceptors.request.use(handoleSuccessRequest, handleErrorRequest);
api.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

export default api;
