import axios from "axios";

const api = axios.create({
  baseURL: "https://events-calendar-server.onrender.com",
  timeout: 10000,
});

export default api;
