import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="m-10 text-center space-y-2 mx-auto">
      <h1 className="font-bold">
        2022 Farhad-Blog,,<span>Created by Farhad Hossain.. </span>
      </h1>
      <p className="text-sm font-semibold">All rights reserved</p>
      <div className="text-2xl flex justify-center items-center space-x-2">
        <Link target="_blank" href="/">
          <FaFacebookSquare />
        </Link>
        <Link href="/">
          <AiFillInstagram />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/farhad-hossain-b74540259/"
        >
          <ImLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
