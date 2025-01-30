import styles from "./NewProjectMain.module.scss";
import ProjectCategoryList from "../../global/ProjectCategoryList/ProjectCategoryList";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { homePagePath } from "../../../router/path";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

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
  {
    usdtData: 1,
    usdtText: "Thanks!",
  },
  {
    usdtData: 11,
    usdtText: "0.015%",
  },
  {
    usdtData: 111,
    usdtText: "0.25%",
  },
  {
    usdtData: 1111,
    usdtText: "2.55%",
  },
];

const NewProjectMain = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publishEnable, setPublishEnable] = useState(false);

  useEffect(() => {
    if (currentIndex === slideData.length - 1) {
      setPublishEnable(true);
    }
  }, [currentIndex]);

  console.log(currentIndex, slideData.length - 1);

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

      <div className={styles.newProjectMain__sliderWrapper}>
        {/* Panels displayed on the last slide */}
        {currentIndex === slideData.length - 1 && (
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

        <div
          className={
            currentIndex === slideData.length - 1
              ? styles.newProjectMain__hideSwiper
              : "desk"
          }
        >
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
                <input
                  type="text"
                  placeholder={slide.placeholder}
                  // onChange={(e) => {
                  // if (index === 0) setProjectName(e.target.value); // Only update for //first slide
                  // }}
                />
                <p>{slide.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="greenPanel">
        <button className="btnPrev">
          {`${currentIndex > 0 ? "BACK " : ""}${currentIndex + 1}/5`}
        </button>

        {currentIndex !== slideData.length - 1 ? (
          <button className="btnNext btnGradientGreen">{"NEXT"}</button>
        ) : (
          <button
            disabled={!publishEnable}
            onClick={() => navigate(homePagePath)}
            className=" btnGradientGreen"
          >
            {"PUBLIC"}
          </button>
        )}
      </div>
    </section>
  );
};

export default NewProjectMain;
