import Container from "./container";
// import { EXAMPLE_PATH } from "../lib/constants";
// import SocialIcon from "../components/social-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-20 bg-accent-1 border-t border-accent-2 dark:bg-transparent">
      <Container>
        <div className="flex flex-col items-center mt-6">
          <div className="flex  space-x-2 space-x-2new text-sm text-gray-500 dark:text-gray-400">
            <div className="footertext">{`© 2011 - ${new Date().getFullYear()}`}</div>
            <div className="footertext">{` • توحید شعبانلو  `}</div>
          </div>
          <div className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full ">
            {/* <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3"> */}
            <div className="px-2 grid gap-0 grid-cols-2 sm:grid-cols-2 my-2 w-full mt-4">
              <div className="flex flex-col space-y-4">
                <Link href="/">
                  <span role="img" aria-label="">
                    🏠
                  </span>{" "}
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    صفحه اصلی
                  </a>
                </Link>
                <Link href="/biography">
                  <span role="img" aria-label="">
                    👨
                  </span>{" "}
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    درمورد ما
                  </a>
                </Link>
                <Link href="/destinations/">
                  <span role="img" aria-label="">
                    🌎
                  </span>{" "}
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    برنامه ها
                  </a>
                </Link>
                <Link href="/projects/">
                  <span role="img" aria-label="">
                    🕊️
                  </span>{" "}
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    پروژه ها
                  </a>
                </Link>
              </div>

              <div className=" flex flex-col space-y-4 ">
                <Link href="/tags">
                  <span role="img" aria-label="">
                    #️⃣
                  </span>{" "}
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    تگ ها
                  </a>
                </Link>
                <Link href="/favorite-blogs">
                  <span role="img" aria-label="">
                    🔗
                  </span>{" "}
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    وبلاگ های برتر
                  </a>
                </Link>

                <Link href="/quotes/">
                  <span role="img" aria-label="">
                    🧐
                  </span>{" "}
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    دست نوشته
                  </a>
                </Link>
                <Link href="/guest/">
                  <span role="img" aria-label="">
                    ✍️
                  </span>{" "}
                  <a className="text-gray-500 hover:text-gray-600 transition">
                    مهمانان
                  </a>
                </Link>
              </div>

              <div className="invisible flex flex-col space-y-4">
                <Link href="/archives/daily/">
                  <span className="flag-icon flag-icon-un"></span> پست های
                  روزانه
                </Link>
                <Link href="/schengen-visa-guide">
                  <span className="flag-icon flag-icon-nl"></span> راهنمای
                  دریافت شینگن
                </Link>
                <Link href="/couchsurfing">
                  <span className="flag-icon flag-icon-eu"></span> کوچسرفینگ
                </Link>
                <Link href="/visafree">
                  <span className="flag-icon flag-icon-ir"></span> کشورهای بدون
                  ویزا
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {/* <div className="pt-4 justify-center flex gap-4">
            <SocialIcon
              kind="facebook"
              href="https://www.facebook.com/Tohidshabanloo"
              size="6"
            />
            <SocialIcon
              kind="youtube"
              href="https://www.facebook.com/Tohidshabanloo"
              size="6"
            />
            <SocialIcon
              kind="twitter"
              href="https://www.facebook.com/Tohidshabanloo"
              size="6"
            />
            <SocialIcon
              kind="instagram"
              href="https://www.facebook.com/Tohidshabanloo"
              size="6"
            />
            <SocialIcon
              kind="mail"
              href="https://www.facebook.com/Tohidshabanloo"
              size="6"
            />
            <SocialIcon
              kind="github"
              href="https://www.facebook.com/Tohidshabanloo"
              size="6"
            />
          </div> */}
          <div className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100">
            بازنشر نوشته های سايت فقط با ذكر منبع و لينك مجاز است.
          </div>
        </div>
      </Container>
    </div>
  );
}
