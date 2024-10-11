import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  label: string;
}

export default function Card({ image, label }: CardProps) {
  return (
    <div className="flex flex-col items-center text-white p-6 lg:p-10 rounded-2xl lg:rounded-[50px] bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9]">
      <div className="lg:h-32">
        <Image width={100} height={100} src={image} alt={label} />
      </div>
      <p className="text-center text-base lg:text-xl mt-10">{label}</p>
    </div>
  );
}
