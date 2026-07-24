import "../styles/About.css";

import {
  Brain,
  Code2,
  Database,
  Rocket,
  Sparkles,
  CheckCircle,
} from "lucide-react";

function About() {

  const features = [
    "Generate professional LinkedIn posts using AI",
    "Multiple writing tones",
    "Beautiful LinkedIn Preview",
    "Template Based Generation",
    "History Management",
    "Copy & Delete Posts",
    "Modern Responsive UI",
    "MySQL Database Integration",
  ];

  return (

    <div className="about-page">

      {/* Hero */}

      <div className="about-hero">

        <h1>

          🚀 LinkedIn AI Studio

        </h1>

        <p>

          Create professional LinkedIn posts in seconds
          using Artificial Intelligence.

        </p>

      </div>

      {/* Cards */}

      <div className="about-grid">

        <div className="about-card">

          <Brain size={34}/>

          <h2>AI Powered</h2>

          <p>

            Uses Generative AI to transform project
            details into engaging LinkedIn posts.

          </p>

        </div>

        <div className="about-card">

          <Code2 size={34}/>

          <h2>Modern Frontend</h2>

          <p>

            Built using React, Vite,
            Framer Motion and Lucide Icons.

          </p>

        </div>

        <div className="about-card">

          <Database size={34}/>

          <h2>Backend</h2>

          <p>

            Express.js, Node.js and MySQL
            store generated posts.

          </p>

        </div>

        <div className="about-card">

          <Rocket size={34}/>

          <h2>Portfolio Ready</h2>

          <p>

            Designed as a professional project
            suitable for showcasing on LinkedIn.

          </p>

        </div>

      </div>

      {/* Features */}

      <div className="about-section">

        <h2>

          <Sparkles size={22}/>

          Features

        </h2>

        <div className="feature-list">

          {features.map((item,index)=>(

            <div
              key={index}
              className="feature-item"
            >

              <CheckCircle size={18}/>

              {item}

            </div>

          ))}

        </div>

      </div>

      {/* Tech Stack */}

      <div className="about-section">

        <h2>

          💻 Tech Stack

        </h2>

        <div className="tech-stack">

          <span>React</span>
          <span>Vite</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MySQL</span>
          <span>Gemini AI</span>
          <span>Framer Motion</span>
          <span>Axios</span>

        </div>

      </div>

      {/* Roadmap */}

      <div className="about-section">

        <h2>

          📈 Future Roadmap

        </h2>

        <ul className="roadmap">

          <li>Dark Mode</li>

          <li>User Authentication</li>

          <li>Cloud Deployment</li>

          <li>AI Analytics</li>

          <li>Export to PDF</li>

          <li>Multi Language Support</li>

        </ul>

      </div>

    </div>

  );

}

export default About;