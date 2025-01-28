import React from "react";
import styles from "./NewProjectMain.module.scss";
import { useState } from "react"
import ProjectCategoryList from "../../global/ProjectCategoryList/ProjectCategoryList";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
//import "swiper/css/navigation";

const NewProjectMain = () => {

  const slideData = [
    {
    placeholder: "Project name", 
    description: "Write 100 keywords first and another 5000 words with all the advantages of the project. Also, take into account that 5 categories will be allowed, integrated individually." 
  }, 
  {
    placeholder: "How much do you need to invest?",
    description: "Percentage of the company for partners and future profits." 
  },

  {
    placeholder: "How many people do you need as partners?",
    description: "PMaximum 1000 partners at 0.01% each in cryptopay." 
  }
]

const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <section className={styles.newProjectMain}>
      <div className={styles.newProjectMain__trackingLine}>
        <span className={styles.newProjectMain__slider}></span>
      </div>

      <ProjectCategoryList />
     
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
          //onSlideChange={() => console.log("Slide changed")}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
          }}
          
          onSwiper={(swiper) => console.log("Swiper instance:", swiper)}
      >
        {slideData.map(( slide, index ) =>  (
          <SwiperSlide key={index}>                
            <input type="text" placeholder={slide.placeholder}  />
            <p>{slide.description}</p>              
          </SwiperSlide>
        ))}   

        </Swiper>  
      </div>
      <div className="greenPanel">
      <button className="btnPrev">
        {currentIndex === 0
          ? `1/${slideData.length}`
          : `BACK ${currentIndex + 1}/${slideData.length}`}
      </button>
        <button className="btnNext btnGradientGreen">
          {currentIndex === slideData.length - 1 ? "PUBLIC" : "NEXT"}          
        </button>
      </div>     
    </section>
  );
};

export default NewProjectMain;


{/*
   <div className="greenPanel">
          <button className="btnPrev">BACK 1/5</button>          
          <button className="btnNext btnGradientGreen">NEXT</button>
        </div>*/}