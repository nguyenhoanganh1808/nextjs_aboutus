"use client";

import Image from "next/image";
import bannerImage from "@/../public/images/banner/Banner.webp";
import bannberBackground from "@/../public/images/banner/banner-background.png";
import Button from "./button";
import { useGsapAnimations } from "@/app/hooks/useGsapAnimations";

export default function Banner() {
  const { fadeLeftHeader, fadeRightHeader } = useGsapAnimations();

  return (
    <div className=" bg-gradient-to-r from-blue-500/90 via-purple-500/90 to-pink-600/90 bg-cover bg-center">
      <>
        <div className="mx-auto relative">
          <div className="absolute w-full top-0 md:block hidden">
            <Image
              src={bannberBackground}
              alt="earth map"
              className="w-full opacity-20"
            />
          </div>

          <div className="p-6 xl:p-0 flex flex-col lg:flex-row items-center relative max-w-7xl mx-auto">
            <div ref={fadeLeftHeader} className="">
              <h1 className=" text-white text-5xl lg:text-[80px] font-bold capitalize leading-[66.24px] pb-8">
                ENJOY SPORT
              </h1>

              <div className="text-white text-[21px] font-medium tracking-tight">
                Đơn vị cung cấp các giải pháp công nghệ về thể thao, mang dến
                những trải nghiệm dịch vụ tối ưu cho cả người tổ chức sự kiện và
                người tham gia{" "}
              </div>

              <div className="flex gap-4 pt-9 flex-wrap">
                <Button>LIÊN HỆ</Button>
                <Button>GIẢI PHÁP CỦA CHÚNG TÔI</Button>
              </div>
            </div>
            <Image
              ref={fadeRightHeader}
              width={550}
              height={550}
              src={bannerImage}
              alt="banner image"
            />
          </div>
        </div>
      </>
    </div>
  );
}
