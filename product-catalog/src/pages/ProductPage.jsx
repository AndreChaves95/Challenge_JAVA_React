import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const setAuth = (username, password) => {
  const token = btoa(`${username}:${password}`);
  API.defaults.headers.common['Authorization'] = `Basic ${token}`;
};

export default API;