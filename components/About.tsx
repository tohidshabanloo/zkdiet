import React from "react";
import { About } from "../typings";
import CoverImage from "./cover-image";

type Props = {
  aboutData: About;
};
const About = ({ aboutData }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center px-4  p-4 rounded-lg mb-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-2">
            <img
              src={aboutData.bannerImage.url}
              alt=""
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <h1 className="text-3xl font-bold mb-4">{aboutData.hedaer1}</h1>
            <p className="text-lg leading-relaxed">{aboutData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
