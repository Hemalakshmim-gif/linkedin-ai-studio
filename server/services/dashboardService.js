import axios from "axios";

const API = "https://linkedin-ai-studio-db.onrender.com/api/dashboard";

export const getDashboardStats = () => {
  return axios.get(API);
};