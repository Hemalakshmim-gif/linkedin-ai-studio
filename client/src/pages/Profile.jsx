import "../styles/Profile.css";

import {
  Mail,
  GraduationCap,
  Award,
  Code2,
  FolderGit2,
  Sparkles,
  ExternalLink,
  MapPin,
  Briefcase,
  LogOut,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import useAuth from "../hooks/useAuth";

function Profile() {

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {

    logout();

    toast.success("Logged out successfully!");

    navigate("/login");

  };

  const skills = [
    "React",
    "Express.js",
    "Node.js",
    "MySQL",
    "JavaScript",
    "Gemini AI",
    "HTML",
    "CSS",
    "Git",
    "REST API",
  ];

  const achievements = [
    "🥇 First Place - Code Cracking Symposium",
    "🤖 Built LinkedIn AI Studio",
    "📚 Learning Microsoft AI for Beginners",
    "💻 Passionate Full Stack Developer",
  ];

  return (

    <div className="profile-page">

      {/* ===========================
            PROFILE HEADER
      =========================== */}

      <div className="profile-card">

        <div className="profile-left">

          <div className="profile-avatar">

            {user?.fullName
              ? user.fullName.substring(0,2).toUpperCase()
              : "HM"}

            <span className="status-dot"></span>

          </div>

        </div>

        <div className="profile-info">

          <h1>

            {user?.fullName || "Hema"}

          </h1>

          <p>

            Computer Science Engineering Student

          </p>

          <span>

            Sri Venkateshwara College of Engineering

          </span>

          <div className="profile-meta">

            <span>

              <MapPin size={16}/>

              Bangalore, India

            </span>

            <span>

              <Briefcase size={16}/>

              Full Stack Developer

            </span>

          </div>

          <h4 className="profile-role">

            🚀 AI Enthusiast • React Developer • Backend Learner

          </h4>

          <div className="availability">

            <span className="green-dot"></span>

            Available for Internship

          </div>

          <div className="profile-links">

            <a
              href="https://github.com/Hemalakshmim-gif"
              target="_blank"
              rel="noreferrer"
            >

              <FaGithub size={20}/>

              GitHub

              <ExternalLink size={16}/>

            </a>

            <a
              href="https://www.linkedin.com/in/hemalakshmi-m-6371b432b/"
              target="_blank"
              rel="noreferrer"
            >

              <FaLinkedin size={20}/>

              LinkedIn

              <ExternalLink size={16}/>

            </a>

            <a
              href="mailto:hemalakshmimuddu@gmail.com"
            >

              <Mail size={18}/>

              Contact

            </a>

          </div>

        </div>

      </div>

      {/* ===========================
            OVERVIEW
      =========================== */}

      <div className="overview-grid">

        <div className="overview-card">

          <FolderGit2 size={30}/>

          <h2>12</h2>

          <p>AI Posts</p>

        </div>

        <div className="overview-card">

          <Sparkles size={30}/>

          <h2>5</h2>

          <p>Projects</p>

        </div>

        <div className="overview-card">

          <Award size={30}/>

          <h2>1st</h2>

          <p>Achievement</p>

        </div>

        <div className="overview-card">

          <GraduationCap size={30}/>

          <h2>8.5</h2>

          <p>CGPA</p>

        </div>

      </div>

      {/* ===========================
            SKILLS
      =========================== */}

      <div className="profile-section">

        <h2>

          <Code2 size={22}/>

          Technical Skills

        </h2>

        <div className="skills-grid">

          {skills.map((skill)=>(

            <span
              key={skill}
              className="skill-chip"
            >

              {skill}

            </span>

          ))}

        </div>

      </div>

      {/* ===========================
            ACHIEVEMENTS
      =========================== */}

      <div className="profile-section">

        <h2>

          🏆 Achievements

        </h2>

        <div className="achievement-list">

          {achievements.map((item,index)=>(

            <div
              key={index}
              className="achievement-item"
            >

              {item}

            </div>

          ))}

        </div>

      </div>

      {/* ===========================
            LOGOUT
      =========================== */}

      <div className="profile-section">

        <button
          className="logout-btn"
          onClick={handleLogout}
        >

          <LogOut size={20}/>

          Logout

        </button>

      </div>

    </div>

  );

}

export default Profile;