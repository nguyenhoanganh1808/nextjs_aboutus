import Image from "next/image";
import Ticket from "../../images/ticket.png";
import clsx from "clsx";

interface CardProps {
  index: number;
  title: string;
  description: string;
}

export default function Card({ index, title, description }: CardProps) {
  return (
    <div
      className={clsx(
        "px-6 py-10 bg-white/0 rounded-lg lg:rounded-[80px] shadow-2xl items-center gap-2.5 flex lg:col-span-2 max-w-md lg:max-w-sm group hover:bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9] transition-transform ease-in-out duration-75 delay-100 hover:scale-110",
        {
          "lg:col-span-3": index === 3 || index === 4,
          "lg:place-self-end": index === 3,
        }
      )}
    >
      <div className="flex-col items-center gap-20 flex">
        <div className="self-stretch h-[245px] flex-col items-center gap-5 flex ">
          <Image src={Ticket} alt="ticket icon" />
          <div className="self-stretch h-9 text-center text-[#1253e9] text-3xl font-bold font-['Inter'] leading-[29px] group-hover:text-white ">
            {title}
          </div>
          <div className="self-stretch text-center text-[#757575] text-base font-normal leading-normal group-hover:text-white ">
            {description}
          </div>
        </div>

        {/* Button */}
        <button className="px-8 py-4 lg:px-5 lg:py-3 bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9] rounded-[800px] transition duration-300 ease-in-out hover:bg-white">
          <p className="text-center text-white transition duration-300 ease-in-out hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9]">
            Read More
          </p>
        </button>
      </div>
    </div>
  );
}
