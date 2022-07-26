import axios from 'axios';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

export const authRequest = axios.create({
  baseURL: 'http://localhost:3003/api',
  withCredentials: true,
  headers: { 'Access-Control-Allow-Credentials': true },
});

export const request = axios.create({
  baseURL: 'http://localhost:3003/api',
  headers: {
    Authorization: `Beaer ${token}`,
  },
});

axios.defaults.baseURL = 'http://localhost:3003/api'
