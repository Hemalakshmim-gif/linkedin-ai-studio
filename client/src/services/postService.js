import api from "../api/api";

export const generateLinkedInPost = async (data) => {
  const response = await api.post("/posts/generate", data);
  return response.data;
};