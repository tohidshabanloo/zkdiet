"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import styles from "./VideoSlider.module.css";
import SwiperCore, { Navigation } from "swiper";
import CoverImage from "./cover-image";
SwiperCore.use([Navigation]);
const VideoSlider = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const swiperParams = {
    centeredSlides: true,
    spaceBetween: 20,
    // autoplay: {
    //   delay: 5000,
    // },

    navigation: true, // Enable navigation
    onSlideChange: handleSlideChange,
    initialSlide: 1,
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
      <div className="w-full max-w-5xl p-4  ">
        <div>
          <div className="flex justify-center">
            <div className="w-full md:w-1/3 lg:w-1/3 bg-gray-100 ">
              <div className="flex justify-between mt-2">
                <div className="flex gap-3 mt-1 mr-2">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 3L9.21802 10.083"
                      stroke="#262626"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.698 20.334L22 3.001H2L9.218 10.084L11.698 20.334Z"
                      stroke="#262626"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.792 3.904C18.1064 3.97667 19.3389 4.56591 20.2207 5.54331C21.1026 6.52071 21.5624 7.80705 21.5 9.122C21.5 12.194 18.848 14.081 16.303 16.344C13.791 18.587 12.438 19.813 12 20.096C11.523 19.787 9.85698 18.273 7.69698 16.344C5.14098 14.072 2.49998 12.167 2.49998 9.122C2.43755 7.80705 2.89737 6.52071 3.77924 5.54331C4.66111 4.56591 5.89355 3.97667 7.20798 3.904C7.93613 3.88193 8.65754 4.04919 9.30169 4.3894C9.94585 4.72962 10.4907 5.23117 10.883 5.845C11.723 7.02 11.863 7.608 12.003 7.608C12.143 7.608 12.281 7.02 13.113 5.842C13.503 5.22533 14.0481 4.7218 14.6937 4.38172C15.3393 4.04164 16.0628 3.87691 16.792 3.904ZM16.792 1.904C15.8839 1.87493 14.981 2.05109 14.1504 2.41935C13.3199 2.78762 12.5831 3.33851 11.995 4.031C11.4074 3.34053 10.6721 2.79091 9.84353 2.42276C9.01496 2.0546 8.11427 1.87732 7.20798 1.904C5.36285 1.97615 3.62136 2.77599 2.36432 4.1286C1.10728 5.48121 0.436977 7.27654 0.499982 9.122C0.499982 12.732 3.04998 14.949 5.51498 17.092C5.79798 17.338 6.08398 17.586 6.36798 17.839L7.39498 18.757C8.51502 19.8228 9.68925 20.8301 10.913 21.775C11.2368 21.9846 11.6143 22.0962 12 22.0962C12.3857 22.0962 12.7632 21.9846 13.087 21.775C14.3497 20.8013 15.56 19.7615 16.713 18.66L17.635 17.836C17.928 17.576 18.225 17.317 18.52 17.062C20.854 15.037 23.5 12.742 23.5 9.122C23.563 7.27654 22.8927 5.48121 21.6356 4.1286C20.3786 2.77599 18.6371 1.97615 16.792 1.904Z"
                      fill="#262626"
                    />
                  </svg>
                </div>

                <img
                  src="./images/instagram/instagram2.png"
                  className="w-1/3 h-1/2 mt-1 ml-4"
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

          <div className={styles.videoSliderContainer}>
            <Swiper {...swiperParams}>
              {videos.map((video, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`${styles.videoWrapper} ${
                      activeIndex === index ? styles.active : ""
                    }`}
                  >
                    <video
                      controls={true}
                      width="100%"
                      poster={video.poster.url.replace(/^http:/, "https:")}
                    >
                      <source
                        src={video.file.url.replace(/^http:/, "https:")}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </SwiperSlide>
              ))}
              {/* <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div> */}
            </Swiper>
            <div className="flex justify-center">
              <div className="w-full md:w-1/3 lg:w-1/3 flex bg-gray-100 ">
                <img
                  src="./images/instagram/instagram6.png"
                  alt="Profile"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
