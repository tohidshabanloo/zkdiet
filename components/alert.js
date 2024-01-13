import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Alert({ preview }) {
  return (
    <div
      // className={cn("border-b", {
      //   "darbg-accent-7 border-accent-7 text-white": preview,
      //   "bg-accent-1 border-accent-2": !preview,
      // })}
      className="w-max-full py-2"
    >
      <Container>
        <div className="flex rounded-xl p-4 justify-center bg-gray-200 text-gray-900 dark:bg-gray-900 py-2 dark:text-gray-500 text-center text-sm">
          <div></div>
          <div className="mt-1">
            {preview ? (
              <>
                This page is a preview.{" "}
                <a
                  href="/api/exit-preview"
                  className="underline hover:text-cyan  duration-200 transition-colors"
                >
                  Click here
                </a>{" "}
                to exit preview mode.
              </>
            ) : (
              <>
                خانه دایت یک نسخه آزمایشی است | کاری از{" "}
                <a
                  target="_blank"
                  href={`https://www.tohidsh.com/`}
                  className="px-2 hover:text-success text-red-400 dark:text-red-400  dark:hover:text-success duration-200 transition-colors"
                >
                  وبسایت کوله پشتی
                </a>
                {""} | راه اندازی شده با nextjs^13 ، sanity^3 و cloudinary .
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
