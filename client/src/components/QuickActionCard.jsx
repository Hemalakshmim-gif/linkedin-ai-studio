import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function QuickActionCard({
  icon: Icon,
  title,
  description,
  color,
}) {
  return (
    <motion.div
      className="quick-card"
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
    >
      <div
        className="quick-icon"
        style={{
          background: color,
        }}
      >
        <Icon size={26} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button className="learn-btn">
        Learn More
        <ArrowRight size={18} />
      </button>
    </motion.div>
  );
}

export default QuickActionCard;