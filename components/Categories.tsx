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
    <div className="p-2">
      <Link
        href="/"
        className={
          path === "/"
            ? "inline-flex flex-wrap mx-2 bg-opacity-30 bg-red-600 dark:bg-red-800 px-3 py-2 rounded-md font-medium text-gray-900 dark:text-gray-200"
            : "inline-flex flex-wrap mx-2 bg-opacity-30 bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md font-medium text-gray-900 dark:text-gray-200"
        }
      >
        جدیدترین
      </Link>

      {categoriesData.map((item: Category) => (
        <Link
          key={item._id}
          href={`/categories/${item.slug.current}`}
          className={
            activeLink(item)
              ? "inline-flex flex-wrap mx-2 bg-opacity-30 bg-red-600 dark:bg-red-800 px-3 py-2 rounded-md font-medium text-gray-900 dark:text-gray-200"
              : "inline-flex flex-wrap mx-2 bg-opacity-30 bg-gray-200 dark:bg-gray-800 px-3 py-2 rounded-md font-medium text-gray-900 dark:text-gray-200"
          }
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
