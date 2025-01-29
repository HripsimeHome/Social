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
  const [currentIndex, setCurrentIndex] = useState(0);

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
      placeholder: "", // Empty slide so Swiper reaches index 3
      description: "",
    },
  ];

  const currencyData = [
    { usdtData: 1, usdtText: "Thanks!" },
    { usdtData: 11, usdtText: "0.015%" },
    { usdtData: 111, usdtText: "0.25%" },
    { usdtData: 1111, usdtText: "2.55%" },
  ];

  return (
    <section className={styles.newProjectMain}>
      {/* Category List - Visible Only on First Slide */}
      <div
        className={`${styles.newProjectMain__categoryListWrapper} ${
          currentIndex === 0 ? styles.visible : ""
        }`}
      >
        <ProjectCategoryList />
      </div>

      {/* Progress Bar */}
      <div className={styles.newProjectMain__trackingLine}>
        <span
          className={styles.newProjectMain__slider}
          style={{ width: `${20 + currentIndex * 23}%` }}
        ></span>
      </div>

      {/* Slider Wrapper */}
      <div className={styles.newProjectMain__sliderWrapper}>
        {/* Panels are displayed when we are on the last slide */}
        {currentIndex === 3 && (
          <>
            {currencyData.map((panel, index) => (
              <div
                key={index}
                className={`${styles.newProjectMain__panelMargin} whitePanel`}
              >
                <span>{panel.usdtData} USDT</span>
                <span className="btnGreen">{panel.usdtText}</span>
              </div>
            ))}
          </>
        )}

        {/* Swiper stays inside 'desk', but class 'desk' is conditionally removed on the last slide */}
        <div className={currentIndex === 3 ? "" : "desk"}>
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
                {slide.placeholder && <input type="text" placeholder={slide.placeholder} />}
                {slide.description && <p>{slide.description}</p>}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="greenPanel">
        <button className="btnPrev">
          {currentIndex === 0 ? "1/5" : `BACK ${currentIndex + 1}/5`}
        </button>

      {/*  <button className="btnNext btnGradientGreen">
          {currentIndex === 3 ? "PUBLIC" : "NEXT"}
        </button>

        */}

        <button
          className="btnNext btnGradientGreen"
          
         // onClick={() => {
            //if (currentIndex === slideData.length - 1) {
             // navigate(homePagePath); 
           // }
         // }}
        >
          {currentIndex === slideData.length - 1 ? "PUBLIC" : "NEXT"}
        </button>

        
      </div>
    </section>
  );
};

export default NewProjectMain;
