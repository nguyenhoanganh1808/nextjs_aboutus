import Image from "next/image";
import StatColumn from "./stat-column";
import StatBg from "@/../public/images/stat/stat-background.png";

export default function StatsOverview() {
  const datas = [
    {
      stat: "20",
      startStat: "0",
      defaultStat: "",
      title: "Tính năng cho các sự kiện",
    },
    {
      stat: "30",
      startStat: "0",
      defaultStat: "",

      title: "Đối tác trong và ngoài nước",
    },
    {
      stat: "2",
      startStat: "0",
      defaultStat: "1K",
      title: "Sự kiện đã sử dụng giải pháp của chúng tôi",
    },
    {
      stat: "3",
      startStat: "0",
      defaultStat: "1M",
      title: "Người dùng tin tưởng sử dụng",
    },
  ];
  return (
    <div className="relative hidden lg:flex bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9] text-white justify-center items-center">
      <div className="absolute w-full h-fit">
        <Image src={StatBg} alt="" className="w-full opacity-20" />
      </div>
      <ul className="flex py-36 px-32 gap-16">
        {datas.map((data) => (
          <StatColumn
            key={data.title}
            endStat={data.stat}
            startStat={data.startStat}
            title={data.title}
            defaultStat={data.defaultStat}
          />
        ))}
      </ul>
    </div>
  );
}
