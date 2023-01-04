"use client";

import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Posts } from "../typings";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import CoverImage from "./cover-image";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Banners } from "../typings";
// import Swiper bundle with all modules installed

import "swiper/css/pagination";
import "../styles/globals.css";

// import required modules
import { Pagination } from "swiper";
import Banner from "./Banner";
type Props = {
  bannerData: Banners;
};
const BannerSlider = ({ bannerData }: Props) => {
  return (
    <div>
      {/* <div className="swiper-button-prev"> قبلی</div>
      <div className="swiper-button-next"></div>{" "} */}
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        <div className="">
          {bannerData.map((banner: any, index: any) => (
            <SwiperSlide>
              <div className=" m-4 border bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md font-medium text-gray-900 dark:text-gray-200 ">
                <Banner key={index} bannerData={banner} />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default BannerSlider;
