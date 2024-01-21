import React from "react";
import { About } from "../typings";
import CoverImage from "./cover-image";

type Props = {
  aboutData: About;
};
const About = ({ aboutData }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg mb-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-2">
            <div className="w-full h-auto rounded-lg">
              <CoverImage
                image={aboutData.bannerImage.url}
                title={undefined}
                slug={undefined}
                priority={undefined}
              />
            </div>
          </div>
          <div className="md:w-2/3 p-4">
            <h1 className="text-3xl font-bold mb-4">{aboutData[0].hedaer1}</h1>
            <p className="text-lg leading-relaxed">
              {aboutData[0].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
