import "../styles/Profile.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../services/api";
import useAuth from "../hooks/useAuth";

import {
  Mail,
  GraduationCap,
  Github,
  Linkedin,
  User,
  LogOut,
  Save,
  Pencil,
} from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout, updateUser } = useAuth();

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const emptyForm = {
  fullName: "",
  email: "",
  college: "",
  github: "",
  linkedin: "",
};

const [formData, setFormData] = useState(() =>
  user
    ? {
        fullName: user.fullName || "",
        email: user.email || "",
        college: user.college || "",
        github: user.github || "",
        linkedin: user.linkedin || "",
      }
    : emptyForm
);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const { data } = await api.put("/auth/profile", {
        fullName: formData.fullName,
        college: formData.college,
        github: formData.github,
        linkedin: formData.linkedin,
      });

      if (data?.user) {
        updateUser(data.user);

        setFormData({
          fullName: data.user.fullName || "",
          email: data.user.email || "",
          college: data.user.college || "",
          github: data.user.github || "",
          linkedin: data.user.linkedin || "",
        });
      }

      toast.success(data?.message || "Profile updated successfully");
      setEditing(false);
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to update profile"
      );
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      fullName: user?.fullName || "",
      email: user?.email || "",
      college: user?.college || "",
      github: user?.github || "",
      linkedin: user?.linkedin || "",
    });

    setEditing(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <User size={48} />
          </div>

          <div className="profile-title">
            <h2>{formData.fullName || "User"}</h2>
            <p>{formData.email}</p>
          </div>

          {!editing ? (
            <button
              className="edit-btn"
              onClick={() => setEditing(true)}
            >
              <Pencil size={18} />
              Edit Profile
            </button>
          ) : (
            <div className="profile-actions">
              <button
                className="save-btn"
                onClick={handleSave}
                disabled={saving}
              >
                <Save size={18} />
                {saving ? "Saving..." : "Save"}
              </button>

              <button
                className="cancel-btn"
                onClick={handleCancel}
                disabled={saving}
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="profile-body">
          <div className="profile-field">
            <label>
              <User size={18} />
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="profile-field">
            <label>
              <Mail size={18} />
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              disabled
            />
          </div>

          <div className="profile-field">
            <label>
              <GraduationCap size={18} />
              College
            </label>

            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="profile-field">
            <label>
              <Github size={18} />
              GitHub
            </label>

            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              disabled={!editing}
              placeholder="https://github.com/username"
            />
          </div>

          <div className="profile-field">
            <label>
              <Linkedin size={18} />
              LinkedIn
            </label>

            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              disabled={!editing}
              placeholder="https://linkedin.com/in/username"
            />
          </div>
        </div>

        <div className="profile-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}