import axios from 'axios';

const api = axios.create({
  baseURL: 'https://omnistack-backend-levy.herokuapp.com',
});

export default api;
