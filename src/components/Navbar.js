import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 w-full transition-all duration-300 relative">
      <div className="flex flex-wrap w-full items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a
          href={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/wondr-nav.png"
            className="w-[64px] h-[32px] md:w-[100px] object-contain"
            alt="wondr image"
            width={100}
            height={32}
          />
        </a>
        <div className="flex items-center space-x-1 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center odd:divide-x odd:divide-[#7A7A7A] md:me-0 me-1">
            <button className="text-[16px] leading-[24px] font-demibold pe-2 text-[#141414]">
              ID
            </button>
            <button className="text-[16px] leading-[24px] font-demibold ps-2 text-[#8c8c8c]">
              EN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
