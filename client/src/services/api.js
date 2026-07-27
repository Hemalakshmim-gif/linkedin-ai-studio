import axios from "axios";

const api = axios.create({
  baseURL: "https://linkedin-ai-studio-db.onrender.com/api",
});

export default api;