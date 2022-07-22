import axios from 'axios';


const request = axios.create({
  baseURL: 'https://api.sfirew.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Credentials': true,
  },
  timeout: 10000,
  withCredentials: true,
});



export default request;