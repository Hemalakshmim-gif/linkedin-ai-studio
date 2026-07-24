import { useState } from "react";
import "../styles/AIWorkspace.css";
import { motion } from "framer-motion";
import {
  FolderGit2,
  Code2,
  FileText,
  Sparkles,
  Wand2,
  Users,
  AlignLeft,
} from "lucide-react";
import { toast } from "react-toastify";

import { generateLinkedInPost } from "../services/postService";

function AIWorkspace({
  selectedTemplate,
  setGeneratedPost,
  loading,
  setLoading,
}) {
  // Load saved settings
  const savedSettings = JSON.parse(
    localStorage.getItem("linkedin-ai-settings") || "{}"
  );

  const initialTone =
    selectedTemplate?.tone ??
    savedSettings.tone ??
    "Professional";

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    features: "",
    achievements: "",
    tone: initialTone,
    audience:
      savedSettings.audience ?? "Recruiters",
    length:
      savedSettings.length ?? "Medium",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenerate = async () => {
    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.techStack.trim()
    ) {
      toast.warning(
        "Please fill Project Title, Description and Tech Stack."
      );
      return;
    }

    try {
      setLoading(true);

      const response =
        await generateLinkedInPost(formData);

      setGeneratedPost(response.data.post);

      toast.success(
        "LinkedIn post generated successfully!"
      );
    } catch (error) {
      console.error(error);

      toast.error(
        "Failed to generate LinkedIn post."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="workspace"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="section-title">
        <h2>AI Workspace</h2>

        <p>
          Fill in your project details and let AI
          generate a professional LinkedIn post.
        </p>
      </div>

      <div className="workspace-card">

        {/* Project */}

        <div className="input-group">
          <label>
            <FolderGit2 size={18} />
            Project Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="LinkedIn AI Studio"
          />
        </div>

        {/* Tech Stack */}

        <div className="input-group">
          <label>
            <Code2 size={18} />
            Tech Stack
          </label>

          <input
            type="text"
            name="techStack"
            value={formData.techStack}
            onChange={handleChange}
            placeholder="React, Node.js, Express, MySQL..."
          />
        </div>

        {/* Description */}

        <div className="input-group">
          <label>
            <FileText size={18} />
            Description
          </label>

          <textarea
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project..."
          />
        </div>

        {/* Tone */}

        <div className="input-group">
          <label>
            <Sparkles size={18} />
            Tone
          </label>

          <select
            name="tone"
            value={formData.tone}
            onChange={handleChange}
          >
            <option>Professional</option>
            <option>Friendly</option>
            <option>Technical</option>
            <option>Storytelling</option>
          </select>
        </div>

        {/* Audience */}

        <div className="input-group">
          <label>
            <Users size={18} />
            Audience
          </label>

          <select
            name="audience"
            value={formData.audience}
            onChange={handleChange}
          >
            <option>Recruiters</option>
            <option>Developers</option>
            <option>Students</option>
            <option>General Audience</option>
          </select>
        </div>

        {/* Length */}

        <div className="input-group">
          <label>
            <AlignLeft size={18} />
            Post Length
          </label>

          <select
            name="length"
            value={formData.length}
            onChange={handleChange}
          >
            <option>Short</option>
            <option>Medium</option>
            <option>Long</option>
          </select>
        </div>

        {/* Generate */}

        <motion.button
          className="generate-btn"
          onClick={handleGenerate}
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <Wand2 size={20} />

          {loading
            ? "✨ Generating..."
            : "✨ Generate LinkedIn Post"}
        </motion.button>

      </div>
    </motion.section>
  );
}

export default AIWorkspace;