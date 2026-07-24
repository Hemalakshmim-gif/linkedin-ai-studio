import api from "../api/api";

// =============================
// Get Logged-in User Posts
// =============================

export const getAllPosts = () => {
  return api.get("/posts");
};

// =============================
// Delete Post
// =============================

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};