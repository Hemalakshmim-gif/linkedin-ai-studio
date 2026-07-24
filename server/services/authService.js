import pool from "../config/db.js";

// Find user by email
export const findUserByEmail = async (email) => {
  const [rows] = await pool.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  return rows[0];
};

// Create new user
export const createUser = async (
  fullName,
  email,
  password
) => {
  const query = `
    INSERT INTO users
    (fullName, email, password)
    VALUES (?, ?, ?)
  `;

  const [result] = await pool.execute(query, [
    fullName,
    email,
    password,
  ]);

  return result.insertId;
};

// Find user by ID
export const findUserById = async (id) => {
  const [rows] = await pool.execute(
    "SELECT id, fullName, email, github, linkedin, college FROM users WHERE id = ?",
    [id]
  );

  return rows[0];
};