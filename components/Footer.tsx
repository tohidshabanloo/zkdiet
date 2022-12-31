import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="m-10 text-center space-y-2 mx-auto">
      <h1 className="font-bold">
        YOGA 2022 created by Next^13 and Sanity ^3,
        <span>Created by Tohid Shabanloo </span>
      </h1>
      <p className="text-sm font-semibold">All rights reserved</p>
      <div className="text-2xl flex justify-center items-center space-x-2">
        <Link target="_blank" href="https://www.facebook.com/tohidshabanloo/">
          <FaFacebookSquare />
        </Link>
        <Link target="_blank" href="https://www.instagram.com/tohidshabanloo/">
          <AiFillInstagram />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/tohidshabanloo/"
        >
          <ImLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
