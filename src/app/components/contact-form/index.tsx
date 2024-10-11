import Image from "next/image";
import Robot from "../../images/contact-form/robot.png";
import Input from "./input";
import SubmitButton from "./submit-button";

export default function ContactForm() {
  return (
    <div className="m-10 rounded-[100px] bg-gradient-to-b from-blue-600 via-purple-600 to-fuchsia-600 bg-cover bg-center flex flex-col lg:flex-row items-center justify-center text-white p-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-6xl max-w-lg">
        <Image
          className="lg:row-span-2 place-self-center row-span-1 order-2 lg:order-1" // It becomes order 1 for smaller screens
          src={Robot}
          alt="Robot"
        />
        <p className="text-white text-[32px] font-bold leading-[35px] mb-6 order-1 lg:order-2">
          Liên hệ Enjoy Sport ngay để nhận được những dịch vụ tốt nhất với mức
          giá cực kỳ hấp dẫn
        </p>

        {/* Image - order adjusted for smaller screens */}

        {/* Form */}
        <form action="" className="flex flex-col gap-6 order-3">
          <h3 className="text-3xl font-medium ">Thông tin liên hệ :</h3>
          <Input id="name" label="Họ và tên:" type="text" />
          <Input id="phone" label="Số điện thoại:" type="tel" />
          <Input id="email" label="Email:" type="email" />
          <textarea
            className="py-5 px-8 bg-white rounded-[30px] shadow text-black placeholder:text-black"
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
