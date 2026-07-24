import axios from "axios";

const API = "http://localhost:5000/api/auth";

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