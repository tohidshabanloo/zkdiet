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
        slidesPerView: 1, // Show 1 slide per view on screens smaller than 768px (e.g., mobile)
      },
      768: {
        slidesPerView: 2.9, // Show 1 slide per view on screens smaller than 768px (e.g., mobile)
      },
      992: {
        slidesPerView: 2.9, // Show 2 slides per view on screens between 768px and 992px
      },
      1200: {
        slidesPerView: 2.9, // Show 3 slides per view on screens larger than 992px
      },
    },
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-5xl p-4 rounded-lg shadow-md ">
        <div>
          <div className="flex justify-center">
            <div className="w-full md:w-1/3 lg:w-1/3  items-center bg-gray-100 ">
              <div className="flex justify-between mt-2">
                <img
                  src="./images/instagram/instagram3.png"
                  className="w-7 h-7 rounded-full mr-4"
                />
                <img
                  src="./images/instagram/instagram2.png"
                  className="w-12 h-15"
                />
                <img
                  src="./images/instagram/instagram1.png"
                  className="w-7 h-7 rounded-full ml-4"
                />
              </div>
              <hr className="ml-2 mt-2 border-gray-300 sm:mx-auto " />
              <div className="flex justify-between mt-1">
                <div className="mt-1 mr-2">
                  <img
                    src="./images/instagram/instagram5.png"
                    className="w-7 h-7 rounded-full ml-4"
                  />
                </div>
                <a
                  className="flex flex-row-reverse"
                  href="https://www.instagram.com/zk_diet_"
                  target="_blank"
                >
                  <img
                    src="./images/instagram/instagram4.png"
                    alt="Profile"
                    className="w-10 h-10 rounded-full ml-2"
                  />

                  <h1 className="text-md mt-2 ml-1 text-black font-bold ">
                    zk_diet_
                  </h1>
                </a>
              </div>
            </div>
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
            <div className="flex justify-center">
              <div className="w-full md:w-1/3 lg:w-1/3 flex p-4 bg-gray-100 ">
                <div className="flex items-center  mb-2">
                  <img
                    src="https://source.unsplash.com/random"
                    alt="Profile"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <h2 className="text-lg text-black font-semibold">
                    Username payin
                  </h2>
                </div>
                <p className="text-sm text-black">Caption payin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
