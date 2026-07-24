import { useLocation } from "react-router-dom";

import WorkspaceSection from "../components/WorkspaceSection";

function Create() {

  const location = useLocation();

  const selectedTemplate = location.state || {};

  return (
    <>
      <WorkspaceSection
        selectedTemplate={selectedTemplate}
      />
    </>
  );
}

export default Create;