import { useState } from "react";

import AIWorkspace from "./AIWorkspace";
import LinkedInPreview from "./LinkedInPreview";

import "../styles/WorkspaceSection.css";

function WorkspaceSection({ selectedTemplate }) {

  const [generatedPost, setGeneratedPost] = useState("");

  const [loading, setLoading] = useState(false);

  return (
    <section className="workspace-layout">

      <div className="workspace-left">

        <AIWorkspace
          selectedTemplate={selectedTemplate}
          generatedPost={generatedPost}
          setGeneratedPost={setGeneratedPost}
          loading={loading}
          setLoading={setLoading}
        />

      </div>

      <div className="workspace-right">

        <LinkedInPreview
          generatedPost={generatedPost}
          loading={loading}
        />

      </div>

    </section>
  );
}

export default WorkspaceSection;