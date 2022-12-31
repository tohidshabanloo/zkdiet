import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 md:px-8 py-6">
      {/* Left */}
      <div>
        <Link href="/" className="flex items-center space-x-2 anim">
          <img
            src="https://res.cloudinary.com/dklruuoze/image/upload/v1661691912/Ideas/user/l84h1gcshyb169tocjo1.jpg"
            className="rounded-full w-12 h-12 object-cover border-2 border-pink-300 p-[1.5px]"
            alt="logo" 
          />
          <h3 className="font-semibold text-sm md:text-base">Farhad-Blog</h3>
        </Link>
      </div>
      {/* Right */}
      <div>
        <Link target="_blank" href="https://landfolio.vercel.app/" className="btn text-xs md:text-base font-semibold">
          Click here to see my Portfolio!!
        </Link>
      </div>
    </header>
  );
};

export default Header;
