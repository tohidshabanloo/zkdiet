import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Posts } from "../typings";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

type Props = {
  postData: Posts;
};

const Post = ({ postData }: Props) => {
  return (
    <div className=" p-4 relative  overflow-hidden group">
      <Link href={`/post/${postData.slug.current}`}>
        {/* Top */}
        <div className="relative w-full h-80 drop-shadow-lg">
          <Image
            src={urlFor(postData.mainImage).url()}
            className="group-hover:scale-105 duration-200 rounded-t-lg ease-linear cursor-pointer object-cover"
            alt={postData.author.name}
            fill
          />

          {/* Center */}
          <div className="flex justify-between items-center group-hover:scale-105 duration-200 ease-linear absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] text-white p-2 rounded-t-lg">
            <div className="">
              <h1 className="mb-2 font-bold">{postData.title}</h1>
              <span className="text-sm font-semibold text-gray-300">
                {new Date(postData._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <div className="space-x-2">
              {postData.categories.slice(0, 2).map((item) => (
                <button className="btn text-xs sm:text-sm" key={item._id}>
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="mt-6 space-y-2">
          <h2 className="font-bold">{postData.title}</h2>

          <p className="line-clamp-2 text-sm text-gray-400 font-semibold">
            {postData.description}
          </p>

          <div className="font-bold flex items-center space-x-2 text-purple-500 anim">
            <span>Read Post </span>
            <BsArrowDownRight />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
