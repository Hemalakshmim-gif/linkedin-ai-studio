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
      college,
      degree,
      graduationYear,
      cgpa,
      skills,
      github,
      linkedin,
      bio,
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
  degree,
  graduationYear,
  cgpa,
  skills,
  github,
  linkedin,
  bio
) => {

  await pool.execute(
    `UPDATE users
     SET
       fullName = ?,
       college = ?,
       degree = ?,
       graduationYear = ?,
       cgpa = ?,
       skills = ?,
       github = ?,
       linkedin = ?,
       bio = ?
     WHERE id = ?`,
    [
      fullName,
      college,
      degree,
      graduationYear,
      cgpa,
      skills,
      github,
      linkedin,
      bio,
      id,
    ]
  );

  return await findUserById(id);
};