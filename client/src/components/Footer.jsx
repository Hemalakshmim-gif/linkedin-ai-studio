import "../styles/Footer.css";
import { Code2, User, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Left */}

      <div className="footer-left">

        <div className="footer-logo">
          AI
        </div>

        <div>
          <h3>LinkedIn AI Studio</h3>
          <p>Create • Inspire • Publish</p>
        </div>

      </div>

      {/* Center */}

      <div className="footer-center">

  <p>
    Designed &amp; Developed by <strong>Hema</strong>{" "}
    <Heart size={16} className="heart-icon" />
    <br />
    <span className="footer-tech">
      React • Express • MySQL • AI
    </span>
  </p>

</div>

      {/* Right */}

      <div className="footer-right">

        <button className="footer-icon">
          <Code2 size={18} />
        </button>

        <button className="footer-icon">
          <User size={18} />
        </button>

        <button className="footer-icon">
          <Mail size={18} />
        </button>

      </div>

    </motion.footer>
  );
}

export default Footer;