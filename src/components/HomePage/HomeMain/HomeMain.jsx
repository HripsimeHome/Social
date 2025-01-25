import styles from "./HomeMain.module.scss";
import { useState, useEffect } from "react";
import ProgressBarFunding from "../../layout/ProgressBarFunding/ProgressBarFunding";
import { Link } from "react-router-dom";
import { singlePagePath } from "../../../router/path";

import { gameCards } from "../../../constants/gameCards.js";

const HomeMain = () => {
  const [percentClass, setPercentClass] = useState(styles.percentBgColor);

  useEffect(() => {
    // Check if a value is stored in localStorage and update the class
    const storedClass = localStorage.getItem("percentClass");
    if (storedClass) {
      setPercentClass(storedClass);
    }
  }, []);

  return (
    <>
      <section className={styles.homeMain}>
        {gameCards.map(
          (
            {
              gameName,
              gameType,
              gamePosition,
              backgroundImage,
              progress,
              id,
              //isInTop,
            },
            index
          ) => (
            <Link
              to={`${singlePagePath}/${id}`}
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
                {/* {isInTop && (
                    <div className={styles.homeMain__cardGamePosition}>
                      {gamePosition}
                    </div>
                  )}{" "}
                  */}

                <span className="labelPin">{gamePosition}</span>
              </div>
              <ProgressBarFunding
                {...progress}
                //  percent={progress.percent}
                //  bakers={progress.bakers}
                //  daysToGo={progress.daysToGo}

                percentClass={styles.percentBgColor}
              />
            </Link>
          )
        )}
      </section>
    </>
  );
};

export default HomeMain;
