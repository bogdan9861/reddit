import axios from "axios";

const api = axios.create({
  baseURL: `https://forum-server-tpee.onrender.com/api`,
  // baseURL: `http://localhost:8080/api`,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("hub-talk-token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
