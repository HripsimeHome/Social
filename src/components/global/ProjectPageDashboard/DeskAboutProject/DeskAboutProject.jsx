import { useState } from "react";
import styles from "./DeskAboutProject.module.scss";
import ProjectStatusLabel from "../../../layout/ProjectStatusLabel/ProjectStatusLabel";
import { useLocation } from "react-router-dom"

import {
  singlePagePath, 
  newProjectPagePath 
} 
 from "../../../../router/path";

//const DeskAboutProject = ({ projectName  }) => {
  const DeskAboutProject = () => {
  const location = useLocation();

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded((prev) => !prev);

  return (
    <section className={styles.deskAboutProject}>
      <div
        className={styles.deskAboutProject__projectStatusLContainer}
      >
        <ProjectStatusLabel />
      </div>
      <div className={`${styles.deskAboutProject} desk`}>
        <h3 className="deskTitle">
          {location.pathname.startsWith(singlePagePath) ? (
         // {projectName || "About Project"}
          
        "About Project"
          ) : location.pathname === newProjectPagePath ? (

          "New project"
          ) : null
        }         
        </h3>
       


        <p className={styles.deskAboutProject__deskText}>
          The exciting new VR card game Loftia.
        </p>

        <div
          className={`${styles.deskAboutProject__expandedText} ${
            isExpanded ? styles.expanded : styles.collapsed
          }`}
          // aria-expanded={isExpanded} // Accessibility for screen readers
        >
          Loftia, all of the cards can be played as either a champion to fight
          for you on the destination. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries.
        </div>

        <button
          className={styles.deskAboutProject__readMore}
          onClick={toggleReadMore}
          // aria-label={isExpanded ? "Read short" : "Read all"} // Accessibility
        >
          {isExpanded ? "read short" : "read all"}
        </button>


      </div>
    </section>
  );
};

export default DeskAboutProject;