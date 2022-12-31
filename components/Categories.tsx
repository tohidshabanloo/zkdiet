"use client";

import Link from "next/link";
import { Category } from "../typings";
import { usePathname } from "next/navigation";

type Props = {
  categoriesData: Category[];
};

const Categories = ({ categoriesData }: Props) => {
  const path = usePathname();

  const activeLink = (item: Category) => {
    return path?.slice(12) === item.slug.current;
  };

  return (
    <div className="p-2 md:p-4 space-x-4 my-10 overflow-x-scroll w-screen py-5 sm:overflow-x-hidden sm:py-0 sm:w-auto">
      <Link
        href="/"
        className={
          path === "/"
            ? "btn"
            : "btn bg-transparent border border-pink-600 text-pink-600"
        }
      >
        Recent
      </Link>

      {categoriesData.map((item: Category) => (
        <Link
          key={item._id}
          href={`/categories/${item.slug.current}`}
          className={
            activeLink(item)
              ? "btn whitespace-nowrap"
              : "btn bg-transparent border border-pink-600 text-pink-600 whitespace-nowrap"
          }
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
