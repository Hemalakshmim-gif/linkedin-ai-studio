import axios from "axios";

const API = "https://linkedin-ai-studio-db.onrender.com/api/dashboard";

// ======================
// Register
// ======================

export const registerUser = (userData) => {
  return axios.post(`${API}/register`, userData);
};

// ======================
// Login
// ======================

export const loginUser = (userData) => {
  return axios.post(`${API}/login`, userData);
};