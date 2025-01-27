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

      <div className={`${styles.newProjectMain} desk`}>
      <div className={styles.newProjectMain__swiperWrapper}>
        
        {/* Custom navigation buttons */}
        <button className={styles.newProjectMain__arrowBtn_prev}>Prev</button>
        <button className={styles.newProjectMain__arrowBtn_next}>Next</button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: `.${styles.newProjectMain__arrowBtn_next}`,
            prevEl: `.${styles.newProjectMain__arrowBtn_prev}`,
          }}
          loop={false}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper) => console.log("Swiper instance:", swiper)}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className={styles.newProjectMain__slide}>
              <input type="text" placeholder="Project name" />
              <p>
                Write 100 keywords first and another 5000 words with all the
                advantages of the project. Also, take into account that 5 categories
                will be allowed, integrated individually.
              </p>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className={styles.newProjectMain__slide}>
              <input type="text" placeholder="How much do you need to invest?" />
              <p>Percentage of the company for partners and future profits.</p>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className={styles.newProjectMain__slide}>
              <input
                type="text"
                placeholder="How many people do you need as partners?"
              />
              <p>Maximum 1000 partners at 0.01% each in cryptopay.</p>
            </div>
          </SwiperSlide>

          <br />
        <div className="greenPanel">
          <span>1/5</span>
          <button className="btnGradientGreen">NEXT</button>
        </div>
        </Swiper>
      </div>
      </div>
    </section>
  );
};

export default NewProjectMain;
