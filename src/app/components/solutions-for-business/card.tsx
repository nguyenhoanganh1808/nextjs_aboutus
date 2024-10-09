import Image from "next/image";
import Ticket from "../../images/ticket.png";

export default function Card({ title, description }) {
  return (
    <div className="w-[350px] px-6 py-10 bg-white/0 rounded-[80px] shadow-2xl items-center gap-2.5 inline-flex">
      <div className=" flex-col items-center gap-20 inline-flex">
        <div className="self-stretch h-[245px] flex-col items-center gap-5 flex">
          <Image src={Ticket} alt="ticket icon" />
          <div className="self-stretch h-9 text-center text-[#1253e9] text-3xl font-bold font-['Inter'] leading-[29px]">
            {title}
          </div>
          <div className="self-stretch  text-center text-[#757575] text-base font-normal  leading-normal">
            {description}
          </div>
        </div>
        <div className=" px-5 py-3 bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9] rounded-[800px] border border-[#f6f6fa] justify-center items-center inline-flex">
          <div className="text-center text-white ">Read More</div>
        </div>
      </div>
    </div>
  );
}
