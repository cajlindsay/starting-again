import axios from 'axios';
import { getBearerToken } from './auth.js';

const { VITE_API_URL } = import.meta.env;

const api = axios.create({
  baseURL: VITE_API_URL,
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest' // This must be set...see CSRF attack
  }
});

setTimeout(() => {}, 1000);

api.defaults.headers.Accept = 'application/json';
api.defaults.headers['Content-Type'] = 'application/json';

api.interceptors.request.use(
  async (config) => {
    const bearerToken = await getBearerToken();
    config.headers['Authorization'] = `Bearer ${bearerToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;

/* 
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === status) {
      callback(error);
    }
    return Promise.reject(error);
  }
); */
