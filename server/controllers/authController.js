import bcrypt from "bcryptjs";

import generateToken from "../utils/generateToken.js";

import {
  findUserByEmail,
  createUser,
} from "../services/authService.js";

// ===============================
// Register User
// ===============================

export const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userId = await createUser(
      fullName,
      email,
      hashedPassword
    );

    res.status(201).json({
      success: true,
      message: "Account created successfully.",
      token: generateToken(userId),
      user: {
        id: userId,
        fullName,
        email,
      },
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};

// ===============================
// Login User
// ===============================

export const loginUser = async (req, res) => {
  try {

    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    res.json({
      success: true,
      token: generateToken(user.id),
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        github: user.github,
        linkedin: user.linkedin,
        college: user.college,
      },
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });

  }
};