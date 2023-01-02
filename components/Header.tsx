import Link from "next/link";
import React from "react";
import headerNavLinks from "../data/headerNavLinks";
import Intro from "./intro";
import ThemeChanger from "./ThemeChanger";
import MobileNav from "./MobileNav";
import dynamic from "next/dynamic";

const Header = () => {
  return (
    <header
      className="sticky z-10 top-0  backdrop-filter sm:backdrop-blur-lg flex items-center justify-between  w-full mx-auto my-0 text-gray-900
  bg-white dark:bg-black shadow-lg md:shadow-none bg-opacity-100 md:bg-opacity-60 md:dark:bg-opacity-60 dark:text-gray-100 md:firefox:bg-opacity-100 md:dark:firefox:bg-opacity-100"
    >
      <div className="md:mx-auto max-w-3xl md:px-6 sm:px-6 xl:max-w-5xl ">
        <Intro />
      </div>
      <div className="ml-2 max-w-3xl md:px-6 md:mx-auto sm:px-6 xl:max-w-5xl xl:px-20 flex items-center text-base leading-5">
        <ThemeChanger />
        <div className="hidden sm:block">
          <Link
            href="/studio"
            target="_blank"
            // className="inline-flex flex-wrap p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
            className="inline-flex flex-wrap mx-2 bg-opacity-30 bg-red-600 dark:bg-red-800 px-3 py-2 rounded-md font-medium text-gray-900 dark:text-gray-200"
          >
            داشبورد مدیر
          </Link>
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              // className="inline-flex flex-wrap p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
              className="inline-flex flex-wrap mx-2 bg-opacity-30 bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md font-medium text-gray-900 dark:text-gray-200"
            >
              {link.title.toLowerCase()}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
// this line below is for Solving Hydration Error in React.js/Next.js
// export default dynamic(() => Promise.resolve(Header), { ssr: false });
