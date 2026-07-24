import "../styles/Navbar.css";
import {
  Moon,
  Bell,
  User,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (
    <motion.header
      className="navbar"
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >

      {/* Logo */}

      <div
        className="navbar-logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >

        <motion.div
          className="logo-circle"
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          AI
        </motion.div>

        <div className="logo-text">
          <h2>LinkedIn AI Studio</h2>
          <p>Create • Inspire • Publish</p>
        </div>

      </div>

      {/* Navigation */}

      <nav className="navbar-links">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/templates"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Templates
        </NavLink>

        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          History
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          About
        </NavLink>

      </nav>

      {/* Right Side */}

      <div className="navbar-right">

        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search templates..."
          />

        </div>

        <motion.button
          className="icon-btn"
          whileHover={{
            rotate: 20,
            scale: 1.08,
          }}
          whileTap={{
            scale: .92,
          }}
          title="Dark Mode"
        >
          <Moon size={20}/>
        </motion.button>

        <motion.button
          className="icon-btn"
          whileHover={{
            scale:1.08,
          }}
          whileTap={{
            scale:.92,
          }}
          title="Notifications"
        >
          <Bell size={20}/>
        </motion.button>

        <motion.button
          className="profile-btn"
          whileHover={{
            scale:1.08,
          }}
          whileTap={{
            scale:.95,
          }}
          title="Profile"
          onClick={() => navigate("/profile")}
        >
          <User size={20}/>
        </motion.button>

      </div>

    </motion.header>
  );
}

export default Navbar;