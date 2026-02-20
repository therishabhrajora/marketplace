
import axios from "axios";

const API = axios.create({
  // baseURL: "http://10.190.246.100:5000",
  baseURL: "https://marketplace-ysbx.onrender.com",
  
});

// attach token automatically
API.interceptors.request.use((req) => {
  if (global.token) {
    req.headers.Authorization = `Bearer ${global.token}`;
  }
  return req;
});

export default API;

