import Card from "./card";

export default function SolutionsForBusiness() {
  const cardsData = [
    {
      title: "Ticket",
      description:
        "Cổng bán vé sự kiện thể thao Enjoy Sport với những tính năng ưu việt và giao diện thân thiện với người dùng",
    },
    {
      title: "Photo Service",
      description:
        "Hệ thống lưu trữ và tìm kiếm hình ảnh thông minh bằng số BIB thi đấu và nhận diện khuôn mặt với mật độ chính xác gần như tuyệt đối",
    },
    {
      title: "Timing",
      description:
        "Áp dụng công nghệ tốt nhất mang đến kết quả chính xác và trực quan trên trang kết quả thi đấu, cùng giấy chứng nhận hoàn thành chuyên nghiệp.",
    },
    {
      title: "Livestream",
      description:
        "Viêc sử dụng công nghệ tiên tiến đám bảo hệ thống Livestream bắt trọn mọi khoảnh khắc đẹp trên đường đua và ý nghĩa giải đấu mà BTC muốn hướng tới.",
    },
    {
      title: "Check-In",
      description:
        "Giải pháp công nghệ giúp việc Check-in được diễn ra nhanh chóng và giảm thiểu sai sót, thay thế phương pháp Check-in truyền thống.",
    },
  ];
  return (
    <div className="pt-10 px-10 flex flex-col items-center gap-8">
      <div className="max-w-lg lg:max-w-max text-left lg:text-center">
        <h1 className="text-[#1253e9] text-3xl lg:text-5xl font-bold ">
          GIẢI PHÁP DÀNH CHO DOANH NGHIỆP
        </h1>
        <p className="text-[#757575] text-sm md:text-base font-normal leading-relaxed max-w-3xl">
          Với đội ngũ nhiều năm kinh nghiệm trong lĩnh vực công nghệ và thể
          thao, chung tôi tự hào đem đến những giải pháp tối ưu nhất cho các đơn
          vị tổ chức sự kiện
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-10">
        {cardsData.map((cardData, index) => (
          <Card
            key={cardData.title}
            index={index}
            title={cardData.title}
            description={cardData.description}
          />
        ))}
      </div>
    </div>
  );
}
