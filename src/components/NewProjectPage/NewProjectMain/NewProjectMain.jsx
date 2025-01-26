import styles from "./NewProjectMain.module.scss";
 
const NewProjectMain = () => {
   
  return (
    <>
      <section className={styles.newProjectMain}>
        <div className={styles.newProjectMain__trackingLine}>
          <span
            className={styles.newProjectMain__slider}>
          </span>
        </div>


      <span className="labelPin">CATEGORY</span>

        <div className={`${styles.newProjectMain} desk`}>    

          <input type="text" placeholder="Project name" /> 
          <p>
          Write 100 key words first and another 5000 words with all the advantages of the project, also take into account that 5 categories will be allowed, who integrates the categories individually
          </p>  



          <input type="text" placeholder="How much do you need to invest?" /> 
          <p>
          Percentage of the company for partners, of future profits 
          </p>


          <input type="text" placeholder="How many people do you need as partners?" /> 
          <p>
          Maximum 1000 partners at 0.01% each cryptopay 
          </p>





        </div>
     


      </section>
    </>
  );
};

export default NewProjectMain;