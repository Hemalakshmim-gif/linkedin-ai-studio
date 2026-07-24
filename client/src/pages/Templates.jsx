import {
  Briefcase,
  Smile,
  Code2,
  BookOpen,
  Trophy,
  GraduationCap,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import TemplateCard from "../components/TemplateCard";

import "../styles/Templates.css";

function Templates() {

  const navigate = useNavigate();

  const templates = [

    {
      title: "Professional",
      description: "Perfect for recruiters and hiring managers.",
      icon: <Briefcase size={30} />,
      color: "linear-gradient(135deg,#0A66C2,#2563EB)",
      badge: "⭐ Recommended",
      tone: "Professional",
    },

    {
      title: "Friendly",
      description: "Warm, engaging and community focused.",
      icon: <Smile size={30} />,
      color: "linear-gradient(135deg,#10B981,#059669)",
      badge: "😊 Popular",
      tone: "Friendly",
    },

    {
      title: "Technical",
      description: "Highlight architecture and implementation.",
      icon: <Code2 size={30} />,
      color: "linear-gradient(135deg,#7C3AED,#4F46E5)",
      badge: "🔥 Trending",
      tone: "Technical",
    },

    {
      title: "Storytelling",
      description: "Share your journey beautifully.",
      icon: <BookOpen size={30} />,
      color: "linear-gradient(135deg,#EC4899,#DB2777)",
      badge: "❤️ Most Engaging",
      tone: "Storytelling",
    },

    {
      title: "Achievement",
      description: "Celebrate milestones professionally.",
      icon: <Trophy size={30} />,
      color: "linear-gradient(135deg,#F59E0B,#F97316)",
      badge: "🏆 Achievement",
      tone: "Professional",
    },

    {
      title: "Internship",
      description: "Perfect for internship experiences.",
      icon: <GraduationCap size={30} />,
      color: "linear-gradient(135deg,#14B8A6,#06B6D4)",
      badge: "🎓 Students",
      tone: "Professional",
    },

  ];

  return (

    <div className="templates-page">

      <div className="templates-header">

        <h1>LinkedIn Templates</h1>

        <p>
          Choose a template and let AI do the rest.
        </p>

      </div>

      <div className="templates-grid">

        {templates.map((template) => (

          <TemplateCard

            key={template.title}

            {...template}

            onClick={() =>
              navigate("/create", {
                state: {
                  tone: template.tone,
                },
              })
            }

          />

        ))}

      </div>

    </div>

  );

}

export default Templates;