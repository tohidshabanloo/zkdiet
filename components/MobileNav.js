"use client";

import { useState } from "react";
import Link from "next/link";
import headerNavLinks from "../data/headerNavLinks";
// import useTranslation from "next-translate/useTranslation";

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  // const { t } = useTranslation();
  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="w-8 h-8 ml-1 mr-1 rounded"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed w-full h-full top-14 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ${
          navShow ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed w-full h-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>

        <nav className="fixed overflow-auto h-full w-full mt-4 ">
          {headerNavLinks.map((link) => (
            <div
              key={link.title}
              className="px-10 py-2 hover:bg-gray-300 dark:hover:bg-gray-900"
            >
              <Link
                href={link.href}
                className="text-lg text-gray-900 dark:text-gray-100"
                onClick={onToggleNav}
              >
                {link.title.toLowerCase()}
              </Link>
            </div>
          ))}
          {/* <hr className="w-5/6 m-auto mt-10" /> */}
          {/* <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" /> */}
          <div className="mt-10 flex flex-col justify-center items-start max-w-xl mx-auto ">
            <Link
              className="px-10 py-2 w-full hover:bg-gray-300 dark:hover:bg-gray-900 dark:bg-opacity-10"
              href="/schengen-visa-guide"
              onClick={onToggleNav}
            >
              <div className="text-lg   text-gray-900 dark:text-gray-100">
                <span class="fi fi-nl"></span> برنامه های یوگا  
              </div>
            </Link>
            <Link
              className="px-10 py-2 w-full hover:bg-gray-300 dark:hover:bg-gray-900 dark:bg-opacity-10"
              href="/couchsurfing"
              onClick={onToggleNav}
            >
              <div className="text-lg  text-gray-900 dark:text-gray-100">
                <span class="fi fi-eu"></span> مراکز یوگا 
              </div>
            </Link>
            {/* <Link
              className="px-10 py-2 w-full hover:bg-gray-300 dark:hover:bg-gray-900 dark:bg-opacity-10"
              href="/visafree"
              onClick={onToggleNav}
            >
              <div className="text-lg  text-gray-900 dark:text-gray-100">
                <span class="fi fi-ir"></span> کشورهای بدون ویزا
              </div>
            </Link> */}
            <Link
              className="px-10 py-2 w-full hover:bg-gray-300 dark:hover:bg-gray-900 dark:bg-opacity-10"
              href="/guest"
              onClick={onToggleNav}
            >
              <div className="text-lg  text-gray-900 dark:text-gray-100">
                <span role="img" aria-label="">
                  ✍️
                </span>{" "}
                مهمانان
              </div>
            </Link>
            <Link
              className="px-10 py-2 w-full hover:bg-gray-300 dark:hover:bg-gray-900 dark:bg-opacity-10"
              href="/favorite-blogs"
              onClick={onToggleNav}
            >
              <div className="text-lg  text-gray-900 dark:text-gray-100">
                <span role="img" aria-label="">
                  🔗
                </span>{" "}
                وبلاگ های برگزیده
              </div>
            </Link>
          </div>
          {/* <hr className="w-full border-1 border-gray-400 dark:border-gray-600 " /> */}
          {/* <hr className="w-5/6 m-auto mt-10" /> */}
          {/* <div className="flex flex-col justify-center items-start max-w-xl mx-auto mb-2 p-9">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
              <div className="flex flex-col text-3xl justify-center items-start max-w-xl mx-auto  p-9">
                <p> آسیا</p>
              </div>
              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/iran"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-ir"></span> ایران
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:iran")}
                </p>
              </Link>

              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/china"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-cn"></span>{" "}
                  {t("archives:china")}
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:china")}
                </p>
              </Link>
              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/malaysia"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-my"></span>{" "}
                  {t("archives:malaysia")}
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:malaysia")}
                </p>
              </Link>
              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/turkey"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-tr"></span> ترکیه
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  ترکیه
                </p>
              </Link>

              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/thailand"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-th"></span>{" "}
                  تایلند
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:thailand")}
                </p>
              </Link>
            </div>
          </div> */}

          {/* <div className="flex flex-col justify-center items-start max-w-xl mx-auto mb-2 p-9">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
              <div className="flex flex-col text-3xl justify-center items-start max-w-xl mx-auto  p-9">
                <p>{t("common:europetravelogue")}</p>
              </div>
              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/belgium"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-be"></span>{" "}
                  {t("archives:belgium")}
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:belgium")}
                </p>
              </Link>

              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/france"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-fr"></span>{" "}
                  {t("archives:france")}
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:france")}
                </p>
              </Link>

              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/germany"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-de"></span>{" "}
                  {t("archives:germany")}
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:germany")}
                </p>
              </Link>

              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/italy"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-it"></span>{" "}
                  {t("archives:italy")}
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:italy")}
                </p>
              </Link>

              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/netherlands"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-nl"></span>{" "}
                  {t("archives:netherlands")}
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:netherlands")}
                </p>
              </Link>

              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/luxembourg"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-lu"></span>{" "}
                  {t("archives:luxembourg")}
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:luxembourg")}
                </p>
              </Link>

              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/russia"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-ru"></span>{" "}
                  {t("archives:russia")}
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:russia")}
                </p>
              </Link>

              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/switzerland"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-ch"></span>{" "}
                  {t("archives:switzerland")}
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:switzerland")}
                </p>
              </Link>

              <Link
                className="border border-gray-400 dark:border-gray-700 rounded p-4 w-full hover:bg-gray-100 dark:bg-opacity-10"
                href="/archives/ukraine"
                onClick={onToggleNav}
              >
                <div className="text-lg font-bold mt-2 text-gray-900 dark:text-gray-100">
                  <span className="flag-icon flag-icon-ua"></span>{" "}
                  {t("archives:ukraine")}
                </div>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {t("archives:travelguide")} {t("archives:ukraine")}
                </p>
              </Link>
            </div>
          </div> */}

          <div className="flex flex-col justify-center items-start max-w-xl mx-auto mb-2 p-9">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4"></div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
