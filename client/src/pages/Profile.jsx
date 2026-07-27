import "../styles/Profile.css";

import {  useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from "../services/api";
import useAuth from "../hooks/useAuth";

import {
  User,
  Mail,
  GraduationCap,
  School,
  Calendar,
  Award,
  Code2,
  FolderGit2,
  Link,
  FileText,
  Pencil,
  Save,
  X,
  LogOut,
} from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  const { user, logout, updateUser } = useAuth();

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const createFormData = (user) => ({
  fullName: user?.fullName || "",
  email: user?.email || "",
  college: user?.college || "",
  degree: user?.degree || "",
  graduationYear: user?.graduationYear || "",
  cgpa: user?.cgpa || "",
  skills: user?.skills || "",
  github: user?.github || "",
  linkedin: user?.linkedin || "",
  bio: user?.bio || "",
});

const [formData, setFormData] = useState(() => createFormData(user));

  const initials = useMemo(() => {
    if (!formData.fullName) return "U";

    return formData.fullName
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
  }, [formData.fullName]);

  const skillList = useMemo(() => {
    return formData.skills
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }, [formData.skills]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    if (!user) return;

    setFormData({
      fullName: user.fullName || "",
      email: user.email || "",
      college: user.college || "",
      degree: user.degree || "",
      graduationYear: user.graduationYear || "",
      cgpa: user.cgpa || "",
      skills: user.skills || "",
      github: user.github || "",
      linkedin: user.linkedin || "",
      bio: user.bio || "",
    });

    setEditing(false);
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const payload = {
        fullName: formData.fullName.trim(),
        college: formData.college.trim(),
        degree: formData.degree.trim(),
        graduationYear: formData.graduationYear.trim(),
        cgpa: formData.cgpa.trim(),
        skills: formData.skills.trim(),
        github: formData.github.trim(),
        linkedin: formData.linkedin.trim(),
        bio: formData.bio.trim(),
      };

      const { data } = await api.put("/auth/profile", payload);

      if (data?.user) {
        updateUser(data.user);

        setFormData({
          fullName: data.user.fullName || "",
          email: data.user.email || "",
          college: data.user.college || "",
          degree: data.user.degree || "",
          graduationYear: data.user.graduationYear || "",
          cgpa: data.user.cgpa || "",
          skills: data.user.skills || "",
          github: data.user.github || "",
          linkedin: data.user.linkedin || "",
          bio: data.user.bio || "",
        });
      }

      toast.success(
        data?.message || "Profile updated successfully."
      );

      setEditing(false);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to update profile."
      );
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
    return (
    <div className="profile-page">

      {/* ================= HERO ================= */}

      <section className="profile-hero">

        <div className="profile-avatar-wrapper">

          <div className="profile-avatar">
            {initials}
            <span className="status-dot"></span>
          </div>

        </div>

        <div className="profile-hero-content">

          <h1>{formData.fullName || "Welcome"}</h1>

          <p>{formData.email}</p>

          <div className="availability">
            <span className="green-dot"></span>
            Available for Opportunities
          </div>

        </div>

        <div className="hero-actions">

          {!editing ? (

            <button
              className="edit-btn"
              onClick={() => setEditing(true)}
            >
              <Pencil size={18} />
              Edit Profile
            </button>

          ) : (

            <>
              <button
                className="save-btn"
                onClick={handleSave}
                disabled={saving}
              >
                <Save size={18} />
                {saving ? "Saving..." : "Save Changes"}
              </button>

              <button
                className="cancel-btn"
                onClick={handleCancel}
                disabled={saving}
              >
                <X size={18} />
                Cancel
              </button>
            </>

          )}

        </div>

      </section>

      {/* ================= PERSONAL ================= */}

      <section className="profile-section">

        <h2>

          <User size={22} />

          Personal Information

        </h2>

        <div className="form-grid">

          <div className="profile-field">

            <label>

              <User size={16} />

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

              <Mail size={16} />

              Email Address

            </label>

            <input
              type="email"
              value={formData.email}
              disabled
            />

          </div>

        </div>

      </section>

      {/* ================= ACADEMIC ================= */}

      <section className="profile-section">

        <h2>

          <GraduationCap size={22} />

          Academic Information

        </h2>

        <div className="form-grid">

          <div className="profile-field">

            <label>

              <School size={16} />

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

              <GraduationCap size={16} />

              Degree

            </label>

            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              disabled={!editing}
            />

          </div>

          <div className="profile-field">

            <label>

              <Calendar size={16} />

              Graduation Year

            </label>

            <input
              type="text"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              disabled={!editing}
            />

          </div>

          <div className="profile-field">

            <label>

              <Award size={16} />

              CGPA

            </label>

            <input
              type="text"
              name="cgpa"
              value={formData.cgpa}
              onChange={handleChange}
              disabled={!editing}
            />

          </div>

        </div>

      </section>
            {/* ================= PROFESSIONAL ================= */}

      <section className="profile-section">

        <h2>
          <Code2 size={22} />
          Professional Information
        </h2>

        <div className="form-grid">

          <div className="profile-field">

            <label>
              <Code2 size={16} />
              Skills
            </label>

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              disabled={!editing}
              placeholder="React, Node.js, Express..."
            />

            {!editing && skillList.length > 0 && (
              <div className="skills-grid">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

          </div>

          <div className="profile-field">

            <label>
              <FolderGit2 size={16} />
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
              <Link size={16} />
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

      </section>

      {/* ================= ABOUT ================= */}

      <section className="profile-section">

        <h2>
          <FileText size={22} />
          About Me
        </h2>

        <div className="profile-field">

          <textarea
            name="bio"
            rows="6"
            value={formData.bio}
            onChange={handleChange}
            disabled={!editing}
            placeholder="Tell us about yourself..."
          />

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <section className="profile-footer">

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          Logout
        </button>

      </section>

    </div>
  );
}