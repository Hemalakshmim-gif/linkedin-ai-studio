import pool from "../config/db.js";

// ===============================
// Find User By Email
// ===============================
export const findUserByEmail = async (email) => {
  const [rows] = await pool.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  return rows[0];
};

// ===============================
// Create New User
// ===============================
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

// ===============================
// Find User By ID
// ===============================
export const findUserById = async (id) => {
  const [rows] = await pool.execute(
    `SELECT
      id,
      fullName,
      email,
      github,
      linkedin,
      college,
      createdAt
     FROM users
     WHERE id = ?`,
    [id]
  );

  return rows[0];
};

// ===============================
// Update User Profile
// ===============================
export const updateUserProfile = async (
  id,
  fullName,
  college,
  github,
  linkedin
) => {
  await pool.execute(
    `UPDATE users
     SET
       fullName = ?,
       college = ?,
       github = ?,
       linkedin = ?
     WHERE id = ?`,
    [
      fullName,
      college,
      github,
      linkedin,
      id,
    ]
  );

  return await findUserById(id);
};