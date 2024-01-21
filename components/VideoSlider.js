"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const VideoSlider = ({ videos }) => {
  const swiperParams = {
    slidesPerView: 3.5,
    spaceBetween: 20,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <div className="p-8">
      <Swiper {...swiperParams}>
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <video controls width="100%">
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
};

export default VideoSlider;
