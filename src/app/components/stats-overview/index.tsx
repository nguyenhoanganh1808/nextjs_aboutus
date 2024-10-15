import Image from "next/image";
import StatColumn from "./stat-column";
import StatBg from "@/../public/images/stat/stat-background.png";

export default function StatsOverview() {
  const datas = [
    {
      stat: "20",
      title: "Tính năng cho các sự kiện",
    },
    {
      stat: "30",
      title: "Đối tác trong và ngoài nước",
    },
    {
      stat: "1K2",
      title: "Sự kiện đã sử dụng giải pháp của chúng tôi",
    },
    {
      stat: "1M3",
      title: "Người dùng tin tưởng sử dụng",
    },
  ];
  return (
    <div className="relative hidden lg:flex bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9] text-white justify-center items-center">
      <div className="absolute w-full h-fit">
        <Image src={StatBg} alt="" className="w-full opacity-20" />
      </div>
      <ul className="flex py-36 px-40 gap-10">
        {datas.map((data) => (
          <StatColumn key={data.title} stat={data.stat} title={data.title} />
        ))}
      </ul>
    </div>
  );
}
