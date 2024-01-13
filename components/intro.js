import { CMS_NAME, CMS_URL } from "../lib/constants";
import Avatar from "../components/avatar";
import Link from "next/link";

export default function Intro({ title = "" }) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between  ">
      <h1 className="flex text-2xl md:text-2xl font-bold tracking-tighter leading-tight">
        <div>
          <Avatar />
        </div>
        <Link href="/">
          <div className="dark:text-gray-200 text-gray-800 mt-2 mr-2">
            {" "}
            {CMS_NAME}
          </div>
        </Link>
        <Link href="">
          <div className="dark:text-gray-700 text-gray-300 mt-2 mr-2">
            {title}
          </div>
        </Link>
      </h1>
      <h1 className=" text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8"></h1>
      <h4 className="hidden lg:block bg-gray-200 dark:bg-gray-900 p-2 rounded-xl text-center md:text-left text-lg mt-2 ">
        دایت و فواید آن برای سلامت بدن و درمان بیماری ها
      </h4>
    </section>
  );
}
