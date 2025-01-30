import React, { useState } from "react";
import ProjectPageContainer from "../../global/ProjectPageContainer/ProjectPageContainer";

const NewProjectWrapper = () => {
  const [formData, setFormData] = useState({
    name: "",
    invest: "",
    partnersCount: "",
  });
  return (
    <>
      <ProjectPageContainer formData={formData} setFormData={setFormData} />
    </>
  );
};

export default NewProjectWrapper;
