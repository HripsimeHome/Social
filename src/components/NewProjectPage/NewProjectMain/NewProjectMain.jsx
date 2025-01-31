import styles from "./NewProjectMain.module.scss";
import ProjectCategoryList from "../../global/ProjectCategoryList/ProjectCategoryList";
import CurrencyDataPanel from "../../layout/CurrencyDataPanel/CurrencyDataPanel";
import React, { useEffect, useRef, useState } from "react";
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
    key: "name",
  },
  {
    placeholder: "How much do you need to invest?",
    description: "Percentage of the company for partners and future profits.",
    key: "invest",
  },
  {
    placeholder: "How many people do you need as partners?",
    description: "Maximum 1000 partners at 0.01% each in cryptopay.",
    key: "partnersCount",
  },
  {
    placeholder: "", // Empty slide so Swiper reaches index 3
    description: "",
  },
];


const NewProjectMain = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [publishEnable, setPublishEnable] = useState(false);

  const swiperRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);

  useEffect(() => {
    if (currentIndex === slideData.length - 1) {
      setPublishEnable(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;

      if (typeof swiperInstance.params.navigation === "object") {
        swiperInstance.params.navigation.nextEl = nextButtonRef.current;
        swiperInstance.params.navigation.prevEl = prevButtonRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, []);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className={styles.newProjectMain}>     
      <div
        className={`${styles.newProjectMain__categoryListWrapper} ${
          currentIndex === 0 ? styles.visible : ""
        }`}
      >
        <ProjectCategoryList />
      </div>
      
      <div className={styles.newProjectMain__trackingLine}>
        <span
          className={styles.newProjectMain__slider}
          style={{ width: `${20 + currentIndex * 23}%` }}
        ></span>
      </div>

      <div className={styles.newProjectMain__sliderWrapper}>
        
        {/* Panels displayed on the last slide */}
          {currentIndex === slideData.length - 1 && (            
          <CurrencyDataPanel />            
        )}

        <div
          className={
            currentIndex === slideData.length - 1
              ? styles.newProjectMain__hideSwiper
              : "desk"
          }
        >
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            loop={false}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.activeIndex);
            }}
          >
            {slideData.map((slide, index) => (
              <SwiperSlide key={index}>
                <input
                  name={slide.key}
                  value={formData[slide.key]}
                  onChange={onChange}
                  type="text"
                  placeholder={slide.placeholder}
                />
                <p>{slide.description}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="greenPanel">
        <button ref={prevButtonRef} className={`btnPrev`}>
          {`${currentIndex > 0 ? "BACK " : ""}${currentIndex + 1}/5`}
        </button>

        {currentIndex !== slideData.length - 1 ? (
          <button ref={nextButtonRef} className={`btnNext btnGradientGreen`}>
            {"NEXT"}
          </button>
        ) : (
          <button
            disabled={!publishEnable}
            onClick={() => navigate(homePagePath)}
            className="btnGradientGreen"
          >
            {"PUBLIC"}
          </button>
        )}
      </div>
    </section>
  );
};

export default NewProjectMain;