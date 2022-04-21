import axios from 'axios';  

const api = axios.create({
  baseURL: import.meta.env.VITE_TIMELINE,
});

export default api;
