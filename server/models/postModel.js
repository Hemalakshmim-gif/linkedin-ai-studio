import pool from "../config/db.js";

// ==============================
// Save Generated Post
// ==============================

export const savePost = async (postData) => {

  const {
    userId,
    title,
    description,
    techStack,
    features,
    achievements,
    tone,
    audience,
    length,
    generatedPost,
  } = postData;

  const query = `
    INSERT INTO posts (
      userId,
      title,
      description,
      techStack,
      features,
      achievements,
      tone,
      audience,
      length,
      generatedPost
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const [result] = await pool.execute(query, [

    userId,

    title,
    description,
    techStack,
    features,
    achievements,
    tone,
    audience,
    length,
    generatedPost,

  ]);

  return result.insertId;

};

// ==============================
// Get Posts of Logged-in User
// ==============================

export const getAllPosts = async (userId) => {

  const query = `
    SELECT
      id,
      title,
      description,
      techStack,
      features,
      achievements,
      tone,
      audience,
      length,
      generatedPost,
      createdAt
    FROM posts
    WHERE userId = ?
    ORDER BY createdAt DESC
  `;

  const [rows] = await pool.execute(query, [userId]);

  return rows;

};

// ==============================
// Delete Post
// ==============================

export const deletePost = async (
  id,
  userId
) => {

  const query = `
    DELETE
    FROM posts
    WHERE id = ?
    AND userId = ?
  `;

  const [result] = await pool.execute(
    query,
    [id, userId]
  );

  return result;

};