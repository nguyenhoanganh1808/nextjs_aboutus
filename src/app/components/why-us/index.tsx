"use client";

import Card from "./card";
import ShieldImage from "@/../public/images/why-us/shield.png";
import ShieldSmallImage from "@/../public/images/why-us/shield-small.png";
import StatImage from "@/../public/images/why-us/stat.png";
import StatSmallImage from "@/../public/images/why-us/stat-small.png";
import PhoneImage from "@/../public/images/why-us/phone.png";
import PhoneSmallImage from "@/../public/images/why-us/phone-small.png";
import InforImage from "@/../public/images/why-us/infor.png";
import InforSmallImage from "@/../public/images/why-us/infor-small.png";
import ThumbImage from "@/../public/images/why-us/thumb.png";
import ThumbSmallImage from "@/../public/images/why-us/thumb-small.png";
import CostImage from "@/../public/images/why-us/cost.png";
import CostSmallImage from "@/../public/images/why-us/cost-small.png";
import NetworkImage from "@/../public/images/why-us/net-work.png";
import NetworkSmallImage from "@/../public/images/why-us/net-work-small.png";
import HumanImage from "@/../public/images/why-us/human.png";
import HumanSmallImage from "@/../public/images/why-us/human-small.png";
import { useGsapAnimations } from "@/app/hooks/useGsapAnimations";

export default function WhyUs() {
  const {} = useGsapAnimations();
  const datas = [
    {
      img: ShieldImage,
      imgSmall: ShieldSmallImage,
      label: "An toàn và bảo mật",
      detail:
        "Mọi thông tin khách hàng đều được mã hóa và bảo vệ bằng công nghệ bảo mật tiên tiến nhất",
    },

    {
      img: StatImage,
      imgSmall: StatSmallImage,

      label: "Thống kê phân tích dữ liệu",
      detail:
        "Với hệ thống phân tích dữ liệu mạnh mẽ giúp BTC phân tích và thống kê mọi khía cạnh của dữ liệu thông tin",
    },
    {
      img: PhoneImage,
      imgSmall: PhoneSmallImage,
      label: "Giao diện thân thiện",
      detail:
        "Hệ thống đăng ký trực tuyến tiện lợi, hỗ trợ thanh toán và quản lý dữ liệu người tham gia",
    },
    {
      img: InforImage,
      imgSmall: InforSmallImage,
      label: "Tối ưu hóa thông tin",
      detail:
        "Cho phép người dùng mua vé ẩn danh giúp quá trình diễn ra nhanh chóng, tiết kiệm thời gian",
    },
    {
      img: ThumbImage,
      imgSmall: ThumbSmallImage,

      label: "Ứng dụng công nghệ tiên tiến",
      detail:
        "Sử dụng công nghệ hiện đại giúp giảm thiểu sai sót và thay thế phương pháp truyền thông",
    },
    {
      img: CostImage,
      imgSmall: CostSmallImage,
      label: "Tối ưu hóa chi phí",
      detail:
        "Chúng tôi mang đến những giải pháp tốt nhất với chi phí tối ưu nhất dành cho nhà tổ chức sự kiện",
    },
    {
      img: NetworkImage,
      imgSmall: NetworkSmallImage,
      label: "Hỗ trợ truyền thông sự kiện",
      detail:
        "Giúp sự kiện của bạn nổi bật và tạo dấu ấn mạnh mẽ trong lòng khách hàng với chiến lược truyền thông chuyên nghiệp",
    },
    {
      img: HumanImage,
      imgSmall: HumanSmallImage,
      label: "Đội ngũ hỗ trợ và chăm sóc khách hàng chuyên nghiệp",
      detail:
        "Chúng tôi luôn hỗ trợ  và giải đáp những thắc mắc của khách hàng tạo nên trải nghiệm tuyệt vời  ",
    },
  ];
  return (
    <div className="pt-10 p-8 px-10 flex flex-col items-center gap-8 bg-white">
      <div className="max-w-lg lg:max-w-max text-left lg:text-center">
        <h1 className="text-gradient text-3xl lg:text-[48px] lg:leading-loose font-bold fade-up">
          VÌ SAO NÊN CHỌN CHÚNG TÔI
        </h1>
        <p className="text-[#757575] text-sm md:text-base font-normal leading-relaxed max-w-3xl fade-up">
          Với đội ngũ nhiều năm kinh nghiệm trong lĩnh vực công nghệ và thể
          thao, chúng tôi tự hào đem đến những giải pháp tối ưu nhất cho các đơn
          vị tổ chức sự kiện
        </p>
      </div>
      <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 fade-up">
        {datas.map((data) => (
          <Card
            key={data.label}
            image={data.img}
            label={data.label}
            detail={data.detail}
            imageSmall={data.imgSmall}
          />
        ))}
      </ul>
    </div>
  );
}
