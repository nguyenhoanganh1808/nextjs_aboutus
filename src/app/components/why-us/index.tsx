import Card from "./card";
import ShieldImage from "../../images/why-us/shield.png";
import StatImage from "../../images/why-us/stat.png";
import PhoneImage from "../../images/why-us/phone.png";
import InforImage from "../../images/why-us/infor.png";
import ThumbImage from "../../images/why-us/thumb.png";
import CostImage from "../../images/why-us/cost.png";
import NetworkImage from "../../images/why-us/net-work.png";
import HumanImage from "../../images/why-us/human.png";

export default function WhyUs() {
  const datas = [
    {
      img: ShieldImage,
      label: "An toàn và bảo mật",
    },

    {
      img: StatImage,
      label: "Thống kê phân tích dữ liệu",
    },
    {
      img: PhoneImage,
      label: "Giao diện thân thiện",
    },
    {
      img: InforImage,
      label: "Tối ưu hóa thông tin",
    },
    {
      img: ThumbImage,
      label: "Ứng dụng công nghệ tiên tiến",
    },
    {
      img: CostImage,
      label: "Tối ưu hóa chi phí",
    },
    {
      img: NetworkImage,
      label: "Hỗ trợ truyển thông sự kiện",
    },
    {
      img: HumanImage,
      label: "Đội ngũ hỗ trợ và chăm sóc khách hàng chuyên nghiệp",
    },
  ];
  return (
    <div className="pt-10 p-8 px-10 flex flex-col items-center gap-8 ">
      <div className="max-w-lg lg:max-w-max text-left lg:text-center">
        <h1 className="text-gradient text-3xl lg:text-[48px] lg:leading-loose font-bold">
          WHY CHOOSE US
        </h1>
        <p className="text-[#757575] text-sm md:text-base font-normal leading-relaxed max-w-3xl">
          Với đội ngũ nhiều năm kinh nghiệm trong lĩnh vực công nghệ và thể
          thao, chung tôi tự hào đem đến những giải pháp tối ưu nhất cho các đơn
          vị tổ chức sự kiện
        </p>
      </div>
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-screen-md lg:max-w-screen-xl">
        {datas.map((data) => (
          <Card key={data.label} image={data.img} label={data.label} />
        ))}
      </ul>
    </div>
  );
}
