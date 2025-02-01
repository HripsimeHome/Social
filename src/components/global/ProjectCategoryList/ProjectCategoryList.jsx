import styles from "./ProjectCategoryList..module.scss";
import { useState } from "react"

const categoriesList = [
  "Metaverse 🥽",  
  "Privacy 🔒",
  "Stablecoins ⚖️",
  "DAOs 🏛️",
  "Oracles 🔗",
  "Interoperability 🔄",
  "Cybersecurity 🛡️",
  "Meme 👑",
  "AI 🤖",
  "IoT 📡 ",
  "Social 💬",
  "Identity 🆔",
  "Green 🌱",
  "Cross-chain 🔄",
  "Tokenization 🌐",
  "Payments 💳",
  "Security Tokens 🛠️",
  "Infrastructure 🏭",
  "Gaming 🎮",
  "Advertising 📢",
  "Data Storage 🗄️",
  "Launchpads 🚀",
];
const ProjectCategoryList = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleCategory = () => setIsExpanded((prev) => !prev);

  return (   
    <div className={styles.projectCategoryList}>
      <span
        onClick={toggleCategory}
        className={`${styles.projectCategoryList__category} labelPin`}>
        category
      </span>

      <div
        className={`${styles.projectCategoryList__expendedCategory} ${
          isExpanded ? styles.active : ""
        }`}
      >
        <ul className={styles.projectCategoryList__categoryList}>
          {categoriesList.map((item, index) => (
          <li key={index}>
            <input type="checkbox" /> {item}
          </li>
        ))}
        </ul>
        <button
          onClick={toggleCategory}
          className={`${styles.projectCategoryList__categoryBtnSave} btnGreen`}
        >
          Save
        </button>
      </div>
    </div>  
  );
}

export default ProjectCategoryList