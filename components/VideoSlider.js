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
    breakpoints: {
      768: {
        slidesPerView: 1.5, // Show 1 slide per view on screens smaller than 768px (e.g., mobile)
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
