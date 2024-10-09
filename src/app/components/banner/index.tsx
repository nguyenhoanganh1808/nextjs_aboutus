import Image from "next/image";

import bannerImage from "../../images/z5862419801373_d0d91c3348c238268a923b69435b8fc7.png";
import Button from "./button";

export default function Banner() {
  return (
    <div className="bg-gradient-to-l from-blue-600 via-purple-600 to-fuchsia-600 flex items-center justify-center text-white p-16">
      <div className="max-w-xl">
        <h1 className=" text-white text-[80px] font-bold capitalize leading-[66.24px] pb-8">
          ENJOY SPORT
        </h1>

        <div className="text-white text-[21px] font-medium tracking-tight">
          Đơn vị cung cấp các giải pháp công nghệ về thể thao, mang dến những
          trải nghiệm dịch vụ tối ưu cho cả người tổ chức sự kiện và người tham
          gia{" "}
        </div>

        <div className="flex gap-4 pt-9 flex-wrap">
          <Button>LIÊN HỆ</Button>
          <Button>GIẢI PHÁP CỦA CHÚNG TÔI</Button>
        </div>
      </div>
      <div>
        <Image
          width={550}
          height={550}
          src={bannerImage}
          alt="A man wearing a red clothes smiling"
        />
      </div>
    </div>
  );
}
