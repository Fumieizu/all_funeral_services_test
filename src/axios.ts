import axios from 'axios';

const BASE_URL = 'http://135.181.35.61:2112';

const instance = axios.create({
  baseURL: BASE_URL,
});

const token = window.localStorage.getItem('token');

instance.interceptors.request.use((config) => {
  if (token && config.headers) {
    config.headers.Authorization = token;
  }

  return config;
});

export default instance;
