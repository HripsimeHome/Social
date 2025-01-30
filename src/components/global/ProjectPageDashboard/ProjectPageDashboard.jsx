
import DeskAboutProject from "./DeskAboutProject/DeskAboutProject"
import DeskFunding from "./DeskFunding/DeskFunding"
 
const ProjectPageDashboard = () => {
  return (
    <>
      <DeskAboutProject />
      {/*<DeskAboutProject projectName={projectName} />  */}
      <DeskFunding />    
    </>
  );
};

export default ProjectPageDashboard