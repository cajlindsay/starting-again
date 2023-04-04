import axios from 'axios';
import { getBearerToken, logOut } from './auth.js';

const { VITE_API_URL } = window.env;

const api = axios.create({
  baseURL: VITE_API_URL,
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest' // This must be set...see CSRF attack
  }
});

api.defaults.headers.Accept = 'application/json';
api.defaults.headers['Content-Type'] = 'application/json';

api.interceptors.request.use(
  async (config) => {
    // get bearer token from storage and attach to authorization header
    const bearerToken = await getBearerToken();
    config.headers['Authorization'] = `Bearer ${bearerToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // successful response....reset 401 count
    set401Count(0);
    return response;
  },
  async (error) => {
    // reject non-401 errors
    if (error.response?.status !== 401) {
      set401Count(0);
      return Promise.reject(error);
    }

    // prevent infinite loop if auth server is failing
    const count401 = get401Count();

    if (count401 > 2) {
      return Promise.reject(error);
    }

    // increment 401 count and log out
    set401Count(count401 + 1);
    await logOut();
    return Promise.reject(error);
  }
);

function set401Count(c) {
  localStorage.setItem('COUNT_401', c);
}

function get401Count() {
  return parseInt(localStorage.getItem('COUNT_401') || 0);
}

export default api;
