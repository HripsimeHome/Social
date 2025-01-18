import styles from "./LabelPin.module.scss";
import { useState, useEffect } from "react"

const LabelPin = () => {
  const labels = ["new", "top", "popular"]; 
 
  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentLabelIndex((prevIndex) => (prevIndex + 1) % labels.length);
    }, 2000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <>
      <div className={styles.labelPin}>     
      
        <span>{labels[currentLabelIndex]}</span>

      </div>     
    </>
  );
};

export default LabelPin;