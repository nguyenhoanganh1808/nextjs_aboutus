import clsx from "clsx";

interface CardProps {
  index: number;
  title: string;
  description: string;
  svg: React.ReactNode;
  href: string;
}

export default function Card({
  svg,
  index,
  title,
  description,
  href,
}: CardProps) {
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <div
      className={clsx(
        "px-6 py-10 bg-white/0 rounded-lg lg:rounded-[80px] shadow-2xl items-center gap-2.5 flex lg:col-span-2 max-w-md lg:max-w-sm group transition-transform ease-in-out duration-75 delay-100 hover:scale-110 hover:bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9]",
        {
          "lg:col-span-3": index === 3 || index === 4,
          "lg:place-self-end": index === 3,
        }
      )}
    >
      <div className="flex-col items-center gap-20 flex">
        <div className="self-stretch h-[245px] flex-col items-center gap-5 flex">
          {svg}

          <p className="text-gradient self-stretch h-9 text-center text-[#1253e9] text-3xl font-bold leading-[34px] group-hover:bg-white group-hover:bg-none transition-colors ">
            {title}
          </p>
          <div className="self-stretch text-center text-[#757575] text-base font-normal leading-normal group-hover:text-white transition-colors">
            {description}
          </div>
        </div>

        {/* Button */}
        <button
          // href="#"
          onClick={() => scrollToElement(href)}
          className="px-8 py-4 lg:px-5 lg:py-3 bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9] rounded-[800px] transition duration-300 ease-in-out group-hover:bg-white group-hover:bg-none"
        >
          <p className="text-center text-white transition duration-300 ease-in-out group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9]">
            Read More
          </p>
        </button>
      </div>
    </div>
  );
}
