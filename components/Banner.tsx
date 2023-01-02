import React from "react";
import CoverImage from "./cover-image";
import { Banners } from "../typings";
import { Posts } from "../typings";
import Image from "next/image";

type Props = {
  bannerData: Banners;
};

const Banner = ({ bannerData }: Props) => {
  return (
    <section className="grid lg:grid-cols-6 space-y-5 p-2 md:p-4">
      {/* Right */}
      <div className="space-y-4 col-span-3">
        <h1 className="text-4xl font-bold">{bannerData.hedaer1}</h1>
        <h2 className="font-semibold text-gray-500 tracking-widetext-sm md:text-base text-justify">
          {bannerData.header2}
        </h2>
        <h2 className="text-gray-400 text-sm md:text-base font-bold text-justify">
          {bannerData.description}
        </h2>
      </div>

      {/* Left */}
      <div className="col-span-3 mr-4 sm:grid">
        <CoverImage
          image={bannerData.bannerImage.url}
          title={undefined}
          slug={undefined}
          priority={undefined}
        />
      </div>
    </section>
  );
};

export default Banner;
