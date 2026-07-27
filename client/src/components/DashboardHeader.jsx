import "../styles/DashboardHeader.css";
import { motion } from "framer-motion";
import { Sparkles, Zap, Briefcase } from "lucide-react";

import useAuth from "../hooks/useAuth";

function DashboardHeader() {

  const { user } = useAuth();

  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) {
    greeting = "Good Morning 🌅";
  } else if (hour < 18) {
    greeting = "Good Afternoon ☀️";
  }

  const userName = user?.fullName || "User";

  return (
    <motion.section
      className="dashboard-header"
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* LEFT */}

      <div className="dashboard-left">

        <motion.div
          className="ai-badge"
          whileHover={{
            scale: 1.04,
          }}
        >
          ✨ Powered by AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
        >
          {greeting}, {userName} 👋
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          Turn Your Ideas Into
          <br />

          <span className="gradient-text">
            Professional LinkedIn Posts
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Create engaging LinkedIn posts from your projects,
          achievements, internships and ideas using AI.
          Transform your work into recruiter-ready content
          within seconds.
        </motion.p>

        <motion.button
          className="start-btn"
          whileHover={{
            scale: 1.03,
            y: -3,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          ✨ Create Your First Post
        </motion.button>

        <div className="hero-features">

          <div className="feature-item">

            <Sparkles size={18} />

            AI Powered

          </div>

          <div className="feature-item">

            <Zap size={18} />

            Fast Generation

          </div>

          <div className="feature-item">

            <Briefcase size={18} />

            Recruiter Ready

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <motion.div
        className="dashboard-right"
        initial={{ opacity: 0, scale: .9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: .25,
          duration: .8,
        }}
      >
        <div className="orb-container">

          <div className="orb-bg"></div>

          <div className="orb-ring"></div>

          <div className="small-circle circle1"></div>
          <div className="small-circle circle2"></div>
          <div className="small-circle circle3"></div>
          <div className="small-circle circle4"></div>
          <div className="small-circle circle5"></div>
          <div className="small-circle circle6"></div>

          <motion.div
            className="ai-orb"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.div>

        </div>
      </motion.div>

    </motion.section>
  );
}

export default DashboardHeader;