"use client";

import Image from "next/image";
import Robot from "@/../public/images/contact-form/robot.png";
import ContactBackground from "@/../public/images/contact-form/contact-background.png";
import Input from "./input";
import SubmitButton from "./submit-button";
import { useGsapAnimations } from "@/app/hooks/useGsapAnimations";

export default function ContactForm() {
  const {} = useGsapAnimations();
  return (
    <div className="overflow-hidden relative lg:p-10 p-3 lg:m-10 m-5 lg:rounded-[100px] rounded-lg bg-gradient-to-b from-blue-600 via-purple-600 to-fuchsia-600 bg-cover bg-center flex flex-col lg:flex-row items-center justify-center text-white">
      <div className="absolute w-full lg:block hidden z-0">
        <Image
          src={ContactBackground}
          alt="earth"
          className="opacity-10 w-full"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-7xl">
        <Image
          className="lg:row-span-2 place-self-center lg:place-self-auto my-auto row-span-1 order-2 lg:order-1 fade-left w-[200px] lg:w-[600px]" // It becomes order 1 for smaller screens
          src={Robot}
          width={400}
          alt="Robot"
        />
        <p className="text-white text-2xl lg:text-[32px] font-bold leading-[35px] mb-6 order-1 lg:order-2 fade-right">
          Liên hệ Enjoy Sport ngay để nhận được những dịch vụ tốt nhất với mức
          giá cực kỳ hấp dẫn
        </p>

        {/* Image - order adjusted for smaller screens */}

        {/* Form */}
        <form className="flex flex-col gap-6 order-3 z-10">
          <h3 className="lg:text-3xl text-xl font-medium ">
            Thông tin liên hệ :
          </h3>
          <Input id="name" label="Họ và tên:" type="text" />
          <Input id="phone" label="Số điện thoại:" type="tel" />
          <Input id="email" label="Email:" type="email" />
          <textarea
            className="lg:py-5 lg:px-8 p-3 bg-white lg:rounded-[30px] rounded-lg shadow text-black placeholder:text-black"
            rows={4}
            name="message"
            id="message"
            placeholder="Lời nhắn:"
          ></textarea>
          <div className="self-center">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
