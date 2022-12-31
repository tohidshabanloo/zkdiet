import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-6">
      {/* Left */}
      <div>
        <Link href="/" className="flex items-center space-x-2 anim">
          <img
            src="/tohid.jpg"
            className="rounded-full w-12 h-12 object-cover border-2 border-pink-300 p-[1.5px]"
            alt="logo"
          />
          <h3 className="font-semibold text-gray-500 pr-4 text-2xl md:text-base ">
            خانه یوگا
          </h3>
        </Link>
      </div>
      {/* Right */}
      <div>
        <Link
          target="_blank"
          href="https://www.tohidsh.com/"
          className="btn text-xs md:text-base font-semibold"
        >
          Click here to see backpacker website
        </Link>
      </div>
    </header>
  );
};

export default Header;
