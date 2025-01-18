import { useState } from "react";
import styles from "./SinglePageDeskAboutProject.module.scss";
import ProjectStatusLabel from "../../../layout/ProjectStatusLabel/ProjectStatusLabel";

const SinglePageDeskAboutProject = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded((prev) => !prev);

  return (
    <section className={styles.singlePageDeskAboutProject}>
      <div className={styles.singlePageDeskAboutProject__projectStatusLContainer}>
        <ProjectStatusLabel />
      </div>
      <div className={`${styles.singlePageDeskAboutProject} desk`}>
        <h3 className="deskTitle">About Project</h3>
        <p className={styles.singlePageDeskAboutProject__deskText}>
          The exciting new VR card game Loftia.
        </p>
        <div
          className={`${styles.singlePageDeskAboutProject__expandedText} ${
            isExpanded ? styles.expanded : styles.collapsed
          }`}
         // aria-expanded={isExpanded} // Accessibility for screen readers
        >
          Loftia, all of the cards can be played as either a champion to fight for you on the destination. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
        </div>
        <button
          className={styles.singlePageDeskAboutProject__readMore}
          onClick={toggleReadMore}
         // aria-label={isExpanded ? "Read short" : "Read all"} // Accessibility
        >
          {isExpanded ? "read short" : "read all"}
        </button>
      </div>
    </section>
  );
};

export default SinglePageDeskAboutProject;
