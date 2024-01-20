import React from "react";
import { AuthorBanner } from "../typings";

type Props = {
  authorData: AuthorBanner;
};

const Author = ({ authorData }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center px-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg mb-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-2">
            <img
              src="https://source.unsplash.com/random"
              alt="Author's Photo"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <h1 className="text-3xl font-bold mb-4">{authorData.name}</h1>
            <p className="text-lg leading-relaxed">{authorData.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
