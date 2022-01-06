import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.200.56:8000/api/answer',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export default instance;
