import "../styles/Analytics.css";
import { motion } from "framer-motion";
import {
  FileText,
  Eye,
  Heart,
  Sparkles,
  TrendingUp,
} from "lucide-react";

function Analytics() {
  const analytics = [
    {
      icon: FileText,
      title: "Posts Generated",
      value: "128",
      growth: "+24%",
      color: "#E8F1FF",
    },
    {
      icon: Eye,
      title: "Total Views",
      value: "18.5K",
      growth: "+18%",
      color: "#FFF4DD",
    },
    {
      icon: Heart,
      title: "Engagement",
      value: "94%",
      growth: "+11%",
      color: "#FFECEC",
    },
    {
      icon: Sparkles,
      title: "AI Generations",
      value: "420",
      growth: "+32%",
      color: "#F3ECFF",
    },
  ];

  return (
    <section className="analytics">

      <div className="section-title">

        <h2>Analytics Overview</h2>

        <p>
          Monitor your AI writing activity and overall performance.
        </p>

      </div>

      <div className="analytics-grid">

        {analytics.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              className="analytics-card"
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >

              <div
                className="analytics-icon"
                style={{
                  background: item.color,
                }}
              >
                <Icon size={28} />
              </div>

              <h3>{item.value}</h3>

              <p>{item.title}</p>

              <div className="growth">

                <TrendingUp size={16} />

                {item.growth} this month

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}

export default Analytics;