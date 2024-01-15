"use client";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);

import { EffectFade, Navigation, Pagination } from "swiper";

export default function HomeSlider({ bannerData }) {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bannerData[0].bannerImage.url} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerData[1].bannerImage.url} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerData[3].bannerImage.url} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
