import styles from "./ProgressBarFunding.module.scss"

const ProgressBarFunding = () => {
  return (
    <>
      <div className={styles.progressBarFunding}>                   
        <div className={styles.progressBarFunding__funded}>
          <div> 
            <span className={styles.progressBarFunding__percent}>40%            
            </span> funded
           </div>  

          <span>15 backers</span>  
        </div>            
           
        <div className={styles.progressBarFunding__trackingLine}>
          <span className={styles.progressBarFunding__slider}></span>
        </div>
        <span>34 days to go</span>    
        
      </div>
    </>
  );
}

export default ProgressBarFunding