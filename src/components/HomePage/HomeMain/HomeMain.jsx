import styles from "./HomeMain.module.scss";
import ProgressBarFunding from "../../layout/ProgressBarFunding/ProgressBarFunding";
//import { allPagePath } from "../../../router/path"

import { videogame1Image, videogame2Image } from "../../../assets/images.js";

const HomeMain = () => {
  const gameCard = [
    {
      backgroundImage: `url(${videogame1Image})`,
      gameName: "Loftia VR Game",
      gameType: "video game",
      gamePosition: "top",
      isInTop: true,
      progress: {
        bakers: 15,
        percent: 45,
        daysToGo: 15,
      },
    },

    {
      backgroundImage: `url(${videogame2Image})`,
      gameName: "Design System Automation",
      gameType: "video game",
      gamePosition: "top",
      isInTop: true,
      progress: {
        bakers: 20,
        percent: 15,
        daysToGo: 5,
      },
    },

    {
      backgroundImage: `url(${videogame1Image})`,
      gameName: "Loftia VR Game",
      gameType: "video game",
      gamePosition: "top",
      isInTop: true,
      progress: {
        bakers: 55,
        percent: 55,
        daysToGo: 65,
      },
    },

    {
      backgroundImage: `url(${videogame2Image})`,
      gameName: "Design System Automation",
      gameType: "video game",
      gamePosition: "top",
      progress: {
        bakers: 35,
        percent: 80,
        daysToGo: 5,
      },
    },

    {
      backgroundImage: `url(${videogame1Image})`,
      gameName: "Loftia VR Game",
      gameType: "video game",
      gamePosition: "top",
      progress: {
        bakers: 64,
        percent: 85,
        daysToGo: 35,
      },
    },

    {
      backgroundImage: `url(${videogame2Image})`,
      gameName: "Design System Automation",
      gameType: "video game",
      gamePosition: "top",
      progress: {
        bakers: 9,
        percent: 20,
        daysToGo: 24,
      },
    },
  ];

  return (
    <>
      <section className={styles.homeMain}>
        {gameCard.map(
          (
            {
              gameName,
              gameType,
              gamePosition,
              backgroundImage,
              progress,
              isInTop,
            },
            index
          ) => (
            <div
              className={styles.homeMain__card}
              key={index}
              style={{ backgroundImage }}
            >
              <div className={styles.homeMain__cardHeader}>
                <div className={styles.homeMain__cardGameNameBlock}>
                  <h2 className={styles.homeMain__cardGameName}>{gameName}</h2>
                  <span className={styles.homeMain__cardVideogame}>
                    {gameType}
                  </span>
                </div>
                {isInTop && (
                  <div className={styles.homeMain__cardGamePosition}>
                    {gamePosition}
                  </div>
                )}{" "}
              </div>
              <ProgressBarFunding
                {...progress}
                //  percent={progress.percent}
                //  bakers={progress.bakers}
                //  daysToGo={progress.daysToGo}
              />
            </div>
          )
        )}
      </section>
    </>
  );
};

export default HomeMain;
