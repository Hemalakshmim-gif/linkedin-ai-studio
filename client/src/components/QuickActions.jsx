import "../styles/QuickActions.css";

import {
  Rocket,
  Trophy,
  Briefcase,
  Award,
  BookOpen,
  Lightbulb,
} from "lucide-react";

import QuickActionCard from "./QuickActionCard";

function QuickActions() {
  const actions = [
    {
      icon: Rocket,
      title: "Project Launch",
      description: "Share your latest project with confidence.",
      color: "#E8F1FF",
    },
    {
      icon: Trophy,
      title: "Achievement",
      description: "Celebrate milestones and accomplishments.",
      color: "#FFF4DD",
    },
    {
      icon: Briefcase,
      title: "Internship",
      description: "Showcase your internship experience.",
      color: "#E9FFF1",
    },
    {
      icon: Award,
      title: "Certificate",
      description: "Highlight your latest certification.",
      color: "#F5ECFF",
    },
    {
      icon: BookOpen,
      title: "Learning Journey",
      description: "Share what you're learning.",
      color: "#EAFBFF",
    },
    {
      icon: Lightbulb,
      title: "Personal Brand",
      description: "Build your professional identity.",
      color: "#FFF0F4",
    },
  ];

  return (
    <section className="quick-actions">

      <div className="section-title">

        <h2>Quick Actions</h2>

        <p>
          Choose a starting point for your next LinkedIn post.
        </p>

      </div>

      <div className="quick-grid">

        {actions.map((item, index) => (
          <QuickActionCard
            key={index}
            {...item}
          />
        ))}

      </div>

    </section>
  );
}

export default QuickActions;