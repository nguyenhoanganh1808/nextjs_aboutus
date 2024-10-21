import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  imageSmall: StaticImageData;
  label: string;
  detail: string;
}

export default function Card({ image, imageSmall, label, detail }: CardProps) {
  return (
    <div className="group lg:p-3 h-80 lg:h-96 lg:w-80 w-64 bg-transparent [perspective:1000px]">
      {/* Card container */}
      <div className="rounded-2xl lg:rounded-[50px] h-full w-full shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 flex flex-col justify-center gap-14 items-center text-white p-6 lg:p-10 rounded-2xl lg:rounded-[50px] bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9] [backface-visibility:hidden]">
          <div className="h-[110px]">
            <Image
              className="md:w-[80px] max-h-[100px]"
              width={100}
              height={100}
              src={image}
              alt={label}
            />
          </div>

          <p className="h-14 text-center text-base lg:text-xl px-2">{label}</p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 rounded-2xl p-[2px] lg:rounded-[50px] [transform:rotateY(180deg)] [backface-visibility:hidden] bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9] w-full h-full">
          <div className="flex w-full h-full lg:p-10 p-6 bg-white flex-col items-center justify-center rounded-2xl lg:rounded-[50px]">
            <div className="lg:h-32">
              <Image width={50} height={50} src={imageSmall} alt={label} />
            </div>
            <p className="text-center text-base text-gradient lg:text-xl mt-10">
              {label}
            </p>
            <p className="text-center text-base text-[#757575] font-medium mt-10">
              {detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
