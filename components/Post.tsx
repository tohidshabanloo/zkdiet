import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";
import { Posts } from "../typings";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import CoverImage from "./cover-image";

type Props = {
  postData: Posts;
};

const Post = ({ postData }: Props) => {
  return (
    <Link href={`/post/${postData.slug.current}`}>
      <div className="bg-gray-200 dark:bg-gray-800  rounded-lg p-2">
        <div className="mb-5">
          <CoverImage
            image={postData.mainImage.url}
            title={undefined}
            slug={undefined}
            priority={undefined}
          />
          <div className="mt-4">
            <h3 className="text-gray-800 dark:text-gray-200 px-2 mb-2 text-xl leading-snug  font-bold tracking-tighter">
              {postData.title}
            </h3>
            {/* <div className="mb-4 text-lg flex justify-center">
              <span className="text-sm font-semibold text-gray-300">
                {new Date(postData._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div> */}
            {postData.description ? (
              <p className=" text-sm px-2 text-gray-500">
                {`${postData.description}`.substring(0, 100)}...{" "}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
