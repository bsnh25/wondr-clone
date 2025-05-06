"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const Lifestyle = ({ params }) => {
  const router = useRouter();

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.screen.width,
        height: window.screen.height,
      });
    }
  }, []);

  return (
    <section className="w-full py-10 sm:py-20" id="about">
      <div className="max-w-screen-xl md:max-w-screen-sm lg:max-w-screen-xl px-[24px] md:px-[30px] mx-auto">
        <div className="flex flex-col-reverse gap-4 lg:grid lg:grid-cols-2 place-items-center">
          <div>
            <Image
              src="/lifestyle.png"
              loading="lazy"
              className="hidden w-full md:block"
              alt="section2"
              width={500}
              height={500}
            />
            <Image
              src="/lifestyle.png"
              loading="lazy"
              className="w-[342px] h-[342px] block md:hidden"
              alt="section2"
              width={342}
              height={342}
            />
          </div>
          <div className="text-center md:text-left">
            <div className="quill font-regular text-[#8C8C8C] text-[16px] leading-[24px] md:text-[24px] md:leading-[32px]">
              wondr by BNI
            </div>
            <h2 className="my-4 w-full text-[#141414] text-[40px] leading-[48px] md:text-[80px] md:leading-[88px] font-demibold">
              Teman yang tak henti jadiin segala maumu
            </h2>
            <div className="quill w-full text-[16px] leading-[24px] md:text-[24px] md:leading-[32px] font-regular">
              <div className="quill">
                <p>
                  Mulai dari <strong>transaksi </strong>ini itu, lihat{" "}
                  <strong>rekap keuanganmu</strong>, hingga{" "}
                  <strong>kembangin </strong>portofolio investasi-semua bisa
                  kamu jadiin dengan <strong>wondr</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
