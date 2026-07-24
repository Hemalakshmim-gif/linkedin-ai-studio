import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import { Mail, Lock, LogIn } from "lucide-react";

import { loginUser } from "../services/authService";
import useAuth from "../hooks/useAuth";

import "../styles/Auth.css";

function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.warning("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser(formData);

      login(
        response.data.user,
        response.data.token
      );

      toast.success("Welcome back!");

      navigate("/home");

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
        "Login failed."
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>LinkedIn AI Studio</h1>

        <p>Welcome Back 👋</p>

        <form onSubmit={handleSubmit}>

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

            <LogIn size={18} />

            {loading ? "Logging in..." : "Login"}

          </button>

        </form>

        <p className="auth-footer">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;