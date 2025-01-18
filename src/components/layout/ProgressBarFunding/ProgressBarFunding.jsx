import styles from "./ProgressBarFunding.module.scss";

const ProgressBarFunding = ({ percent, bakers, daysToGo, percentClass }) => {
  return (
    <>
      <div className={styles.progressBarFunding}>
        <div className={styles.progressBarFunding__funded}>
          <div>
          <span
            className={`${styles.progressBarFunding__percent} ${percentClass} labelPin`}
          >
            {percent}%
          </span> 
             funded
          </div>

          <span>{bakers} backers</span>
        </div>

        <div className={styles.progressBarFunding__trackingLine}>
          <span
            className={styles.progressBarFunding__slider}
            style={{
              width: `${percent}%`,
            }}
          ></span>
        </div>
        <span>{daysToGo} days to go</span>
      </div>
    </>
  );
};

export default ProgressBarFunding;