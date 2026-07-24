import { useState } from "react";
import { toast } from "react-toastify";
import useTheme from "../hooks/useTheme";

import "../styles/Settings.css";

function Settings() {
  const { darkMode, toggleDarkMode, setDarkMode } = useTheme();

  // Load settings directly (React 19 friendly)
  const savedSettings = JSON.parse(
    localStorage.getItem("linkedin-ai-settings") || "{}"
  );

  const [settings, setSettings] = useState({
    notifications: savedSettings.notifications ?? true,
    tone: savedSettings.tone ?? "Professional",
    audience: savedSettings.audience ?? "Recruiters",
    length: savedSettings.length ?? "Medium",
  });

  // Handle dropdowns & switches
  const handleChange = (field, value) => {
    setSettings((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Save Settings
  const handleSave = () => {
    localStorage.setItem(
      "linkedin-ai-settings",
      JSON.stringify(settings)
    );

    toast.success("Settings saved successfully!");
  };

  // Reset Settings
  const handleReset = () => {
    setDarkMode(false);

    const defaultSettings = {
      notifications: true,
      tone: "Professional",
      audience: "Recruiters",
      length: "Medium",
    };

    setSettings(defaultSettings);

    localStorage.removeItem("linkedin-ai-settings");

    toast.info("Settings reset successfully!");
  };

  return (
    <div className="settings-page">

      <div className="settings-card">

        <h1>⚙ Settings</h1>

        <p>
          Personalize your LinkedIn AI Studio experience.
        </p>

        {/* Dark Mode */}

        <div className="setting-row">

          <span>🌙 Dark Mode</span>

          <input
  type="checkbox"
  checked={darkMode}
  onChange={toggleDarkMode}
/>

        </div>

        {/* Notifications */}

        <div className="setting-row">

          <span>🔔 Notifications</span>

          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={() =>
              handleChange(
                "notifications",
                !settings.notifications
              )
            }
          />

        </div>

        {/* Tone */}

        <div className="setting-group">

          <label>Default Tone</label>

          <select
            value={settings.tone}
            onChange={(e) =>
              handleChange(
                "tone",
                e.target.value
              )
            }
          >
            <option>Professional</option>
            <option>Friendly</option>
            <option>Technical</option>
            <option>Storytelling</option>
          </select>

        </div>

        {/* Audience */}

        <div className="setting-group">

          <label>Default Audience</label>

          <select
            value={settings.audience}
            onChange={(e) =>
              handleChange(
                "audience",
                e.target.value
              )
            }
          >
            <option>Recruiters</option>
            <option>Developers</option>
            <option>Students</option>
            <option>General Audience</option>
          </select>

        </div>

        {/* Length */}

        <div className="setting-group">

          <label>Default Length</label>

          <select
            value={settings.length}
            onChange={(e) =>
              handleChange(
                "length",
                e.target.value
              )
            }
          >
            <option>Short</option>
            <option>Medium</option>
            <option>Long</option>
          </select>

        </div>

        {/* Buttons */}

        <div className="settings-buttons">

          <button
            className="save-btn"
            onClick={handleSave}
          >
            Save Settings
          </button>

          <button
            className="reset-btn"
            onClick={handleReset}
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;