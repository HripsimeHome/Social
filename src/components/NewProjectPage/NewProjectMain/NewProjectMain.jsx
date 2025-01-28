import React from "react";
import styles from "./NewProjectMain.module.scss";
import ProjectCategoryList from "../../global/ProjectCategoryList/ProjectCategoryList";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
//import "swiper/css/navigation";

const NewProjectMain = () => {
  return (
    <section className={styles.newProjectMain}>
      <div className={styles.newProjectMain__trackingLine}>
        <span className={styles.newProjectMain__slider}></span>
      </div>

      <ProjectCategoryList />

     
            
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".btnNext",
          prevEl: ".btnPrev",
        }}
        loop={false}
        onSlideChange={() => console.log("Slide changed")}
        onSwiper={(swiper) => console.log("Swiper instance:", swiper)}
      >
       
        <SwiperSlide>
          <div className="desk">
            <input type="text" placeholder="Project name" />
            <p>
              Write 100 keywords first and another 5000 words with all the
              advantages of the project. Also, take into account that 5 categories
              will be allowed, integrated individually.
            </p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="desk">
            <input type="text" placeholder="How much do you need to invest?" />
            <p>Percentage of the company for partners and future profits.</p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="desk">
            <input
              type="text"
              placeholder="How many people do you need as partners?"
            />
            <p>Maximum 1000 partners at 0.01% each in cryptopay.</p>
          </div>
        </SwiperSlide>   

<br />
         <div className="greenPanel">
        <button className="btnPrev">BACK 1/5</button>          
        <button className="btnNext btnGradientGreen">NEXT</button>
      </div>     
      </Swiper>    
    </section>
  );
};

export default NewProjectMain;


{/*
   <div className="greenPanel">
          <button className="btnPrev">BACK 1/5</button>          
          <button className="btnNext btnGradientGreen">NEXT</button>
        </div>*/}