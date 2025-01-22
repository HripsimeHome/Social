import styles from "./ProjectStatusLabel.module.scss";
import { useState, useEffect } from "react"

const ProjectStatusLabel = () => {

  const labels = ["new", "top", "popular"];  
  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);
/*
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLabelIndex((prevIndex) => (prevIndex + 1) % labels.length);
    }, 2000); 

    return () => clearInterval(intervalId); 
  }, []);
  
*/
  return (
    <>
      <div className="labelPin"> 
       {/* <span>{labels[currentLabelIndex]}</span>*/}
        <span>new</span>
      </div>     
    </>
  );
};

export default ProjectStatusLabel;