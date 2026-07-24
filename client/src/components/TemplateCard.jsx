import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import "../styles/Templates.css";

function TemplateCard({
  icon,
  title,
  description,
  badge,
  color,
  onClick,
}) {

  return (

    <motion.div

      className="template-card"

      whileHover={{
        y: -10,
        scale: 1.02,
      }}

    >

      <div
        className="template-icon"
        style={{
          background: color,
        }}
      >

        {icon}

      </div>

      <span className="template-badge">

        {badge}

      </span>

      <h3>{title}</h3>

      <p>{description}</p>

      <motion.button

        className="use-template-btn"

        whileHover={{
          scale: 1.03,
        }}

        whileTap={{
          scale: .96,
        }}

        onClick={onClick}

      >

        Use Template

        <ArrowRight size={18} />

      </motion.button>

    </motion.div>

  );

}

export default TemplateCard;