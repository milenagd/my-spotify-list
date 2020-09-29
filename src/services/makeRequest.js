import axios from 'axios';
import { BASE_SERVICE_URL } from './servicesUrl';

export const instance = axios.create({
  baseURL: BASE_SERVICE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

export const makeRequest = (url, method = 'GET', options = {}) => {
  const config = {
    method,
    url,
    ...options,
  };
  return instance(config).then((response) => response);
};
