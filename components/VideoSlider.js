"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./VideoSlider.module.css";

const VideoSlider = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const swiperParams = {
    centeredSlides: true,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    onSlideChange: handleSlideChange,
    breakpoints: {
      400: {
        slidesPerView: 1.2, // Show 1 slide per view on screens smaller than 768px (e.g., mobile)
      },
      768: {
        slidesPerView: 2.2, // Show 1 slide per view on screens smaller than 768px (e.g., mobile)
      },
      992: {
        slidesPerView: 2.5, // Show 2 slides per view on screens between 768px and 992px
      },
      1200: {
        slidesPerView: 3.5, // Show 3 slides per view on screens larger than 992px
      },
    },
  };

  return (
    <div className="p-20">
      <div className={styles.videoSliderContainer}>
        <img
          className={styles.instagramFrame}
          src="/images/instagram-frame2.png"
          alt="Instagram Frame"
        />
        <Swiper {...swiperParams}>
          {videos.map((video, index) => (
            <SwiperSlide key={index}>
              <div
                className={`${styles.videoWrapper} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <video controls width="100%">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default VideoSlider;
