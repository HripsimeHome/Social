import styles from "./HomeMain.module.scss";
import ProgressBarFunding from "../../layout/ProgressBarFunding/ProgressBarFunding"

import {
  videogame1Image, 
  videogame2Image,  

} from "../../../assets/images.js"

const HomeMain = () => {

  const gameCard = [
    {
      backgroundImage: `url(${videogame1Image})`,
      gameName: "Loftia VR Game",
      gameType: "video game",
      gamePosition: "top"
    },

    {
      backgroundImage: `url(${videogame2Image})`,
      gameName: "Design System Automation",
      gameType: "video game",
      gamePosition: "top"
    },

    {
      backgroundImage: `url(${videogame1Image})`,
      gameName: "Loftia VR Game",
      gameType: "video game",
      gamePosition: "top"
    },

    {
      backgroundImage: `url(${videogame2Image})`,
      gameName: "Design System Automation",
      gameType: "video game",
      gamePosition: "top"
    },

    {
      backgroundImage: `url(${videogame1Image})`,
      gameName: "Loftia VR Game",
      gameType: "video game",
      gamePosition: "top"
    },

    {
      backgroundImage: `url(${videogame2Image})`,
      gameName: "Design System Automation",
      gameType: "video game",
      gamePosition: "top"
    },
  ];

  return (
    <>
       <section className={styles.homeMain}>
       {gameCard.map(({ gameName, gameType, gamePosition, backgroundImage }, index) => (
        <div className={styles.homeMain__card} key={index} style={{ backgroundImage }}>
          <div className={styles.homeMain__cardHeader}>
            <div className={styles.homeMain__cardGameNameBlock}>
              <h2 className={styles.homeMain__cardGameName}>{gameName}</h2>
              <span className={styles.homeMain__cardVideogame}>{gameType}</span>
            </div>
            <div className={styles.homeMain__cardGamePosition}>{gamePosition}</div>
          </div>
          <ProgressBarFunding />
        </div>
      ))}
    </section>
    </>
  );
};

export default HomeMain