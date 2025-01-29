import styles from "./NewProjectMain.module.scss";
import ProjectCategoryList from "../../global/ProjectCategoryList/ProjectCategoryList";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { homePagePath } from "../../../router/path";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

const NewProjectMain = () => {
  const navigate = useNavigate();

  const slideData = [
    {
      placeholder: "Project name",
      description:
        "Write 100 keywords first and another 5000 words with all the advantages of the project. Also, take into account that 5 categories will be allowed, integrated individually.",
    },
    {
      placeholder: "How much do you need to invest?",
      description: "Percentage of the company for partners and future profits.",
    },
    {
      placeholder: "How many people do you need as partners?",
      description: "Maximum 1000 partners at 0.01% each in cryptopay.",
    },
    {
      placeholder: "Additional Details",
      description: "Provide more information about your project's vision.",
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className={styles.newProjectMain}>
      <div
        className={`${styles.newProjectMain__categoryListWrapper} ${currentIndex === 0 ? styles.visible : ""}`}>
        <ProjectCategoryList />
      </div>        

     {/*}
      <div className={styles.newProjectMain__trackingLine}>
        <span className={styles.newProjectMain__slider}></span>
      </div>
      */}

    

<div className={styles.newProjectMain__trackingLine}>
  <span 
    className={styles.newProjectMain__slider} 
    style={{ width: `${20 + currentIndex * 20}%` }}
  ></span>
</div>


           
      <div className={`${styles.newProjectMain__sliderWrapper} desk`}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".btnNext",
            prevEl: ".btnPrev",
          }}
          loop={false}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
          }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <input type="text" placeholder={slide.placeholder} />
              <p>{slide.description}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="greenPanel">
        <button className="btnPrev">
          {currentIndex === 0 ? "1/5" : `BACK ${currentIndex + 1}/5`}
        </button>

        <button
          className="btnNext btnGradientGreen"
          onClick={() => {
            if (currentIndex === slideData.length - 1) {
              navigate(homePagePath); 
            }
          }}
        >
          {currentIndex === slideData.length - 1 ? "PUBLIC" : "NEXT"}
        </button>
      </div>
    </section>
  );
};

export default NewProjectMain;