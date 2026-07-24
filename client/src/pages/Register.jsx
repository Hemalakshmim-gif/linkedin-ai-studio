import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import {
  User,
  Mail,
  Lock,
  UserPlus,
} from "lucide-react";

import { registerUser } from "../services/authService";

import "../styles/Auth.css";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.password
    ) {
      toast.warning("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await registerUser(formData);

      toast.success("Account created successfully!");

      navigate("/login");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Registration failed."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>LinkedIn AI Studio</h1>

        <p>Create Your Account 🚀</p>

        <form onSubmit={handleSubmit}>

          <div className="auth-input">
            <User size={18} />
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="auth-input">
            <Mail size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="auth-input">
            <Lock size={18} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            className="auth-btn"
            disabled={loading}
          >
            <UserPlus size={18} />

            {loading
              ? "Creating..."
              : "Create Account"}
          </button>

        </form>

        <p className="auth-footer">

          Already have an account?

          <Link to="/login">
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;