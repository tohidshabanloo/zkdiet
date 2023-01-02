import Link from "next/link";

Link;

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between  p-5  ">
        <Link
          href="/"
          className="flex item-center flex-wrap mx-2 bg-opacity-30 bg-red-600 dark:bg-red-600 px-3 py-2 rounded-md font-medium text-gray-200 dark:text-gray-200"
        >
          بازگشت به وبسایت{" "}
        </Link>
        <div className="hidden md:flex p-2 rounded-lg justify-center border-2 border-[#F7AB0A]">
          <h1 className="font-bold text-white ml-2"> راه اندازی توسط </h1>
          <Link
            target="_blank"
            href="https://www.tohidsh.com"
            className="text-[#F7AB0A] font-bold"
          >
            وبسایت کوله پشتی
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
