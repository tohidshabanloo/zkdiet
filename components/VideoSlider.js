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
        slidesPerView: 3, // Show 1 slide per view on screens smaller than 768px (e.g., mobile)
      },
      768: {
        slidesPerView: 3, // Show 1 slide per view on screens smaller than 768px (e.g., mobile)
      },
      992: {
        slidesPerView: 3, // Show 2 slides per view on screens between 768px and 992px
      },
      1200: {
        slidesPerView: 3, // Show 3 slides per view on screens larger than 992px
      },
    },
  };

  return (
    <div className="-z-1 flex items-center justify-center h-screen ">
      <div className="w-9/12 max-w-3xl  rounded-lg shadow-md ">
        <div className={styles.videoSliderContainer}>
          <div className="flex  items-center bg-gray-600 p-4">
            <img
              src="https://source.unsplash.com/random"
              alt="Profile"
              className="w-10 h-10 rounded-full mr-4"
            />
            <h1 className="text-xl font-bold ">Username</h1>
          </div>
          <div className="absolute p-4 bg-gray-600  mt-96">
            <div className="flex items-center  mb-2">
              <img
                src="https://source.unsplash.com/random"
                alt="Profile"
                className="w-8 h-8 rounded-full mr-2"
              />
              <h2 className="text-lg font-semibold">Username</h2>
            </div>
            <p className="text-sm">Caption</p>
          </div>
          <div className="">
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
      </div>
    </div>
  );
};

export default VideoSlider;
