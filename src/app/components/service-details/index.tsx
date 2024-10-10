import Image from "next/image";
import Card from "./card";
import serviceImage from "../../images/Overlay+Shadow.png";

export default function ServiceDetails() {
  const datas = [
    {
      image: serviceImage,
      title: "Ticket - Racebook",
      descriptionList: [
        "Ứng dụng Digital Marketing (email, ZNS, social media) để hỗ trợ truyền thông sự kiện",
        "Mua vé không cần đăng nhập",
        "Mua vé nhóm, mua vé số lượng lớn",
        "Thể hiện đầy đủ nội dung sự kiện và sửa đổi thông tin linh hoạt",
        "Tùy chỉnh yêu cầu mua vé theo BTC",
      ],
    },
    {
      image: serviceImage,
      title: "Streaming - Livestream sự kiện",
      descriptionList: [
        "Ứng dụng công nghệ tiên tiến",
        "Đội ngũ chuyên môn cao",
        "Tăng tương tác với người xem",
        "Tăng nhận diện thương hiệu nhà tài trợ",
      ],
    },
    {
      image: serviceImage,
      title: "Photo Service",
      descriptionList: [
        "Nhận diện thông minh bằng số BIB, ký tự trên áo mũ thi đấu",
        "Nhận diện thông minh bằng khuôn mặt",
        "Cập nhật hình ảnh thi đấu liên tục trong suốt quá trình diễn ra giải đấu",
        "Hiển thị thời gian thi đấu ngay trên ảnh thi đấu",
        "Cập nhật thông tin đến VĐV qua ZNS, Email Marketing",
        "Hỗ trợ BTC đóng dấu logo và nhúng kết quả hình ảnh lên website giải đấu",
        "Tính năng bán ảnh chất lượng cao",
      ],
    },
    {
      image: serviceImage,
      title: "Quay dựng video chất lượng cao",
      descriptionList: [
        "Xây dựng kịch bản theo mong muốn của bạn",
        "Sử dụng flycam, máy quay cùng những thiết bị hiện đại đảm bảo chất lượng video sắc nét",
        "Đội ngũ quay dựng chuyên nghiệp, có kinh nghiệm tại các sự kiện thể thao",
        "Tạo nên những video truyền cảm hứng cho sự kiện thể thao của bạn",
      ],
    },
    {
      image: serviceImage,
      title: "Check-in",
      descriptionList: [
        "Quản lý thông tin VĐV check-in sự kiện",
        "Ứng dụng công nghệ hiện đại",
        "Cung cấp & hỗ trợ nguồn dữ liệu tập trung",
        "Quản lý BIB và Racekit tối ưu",
      ],
    },
    {
      image: serviceImage,
      title: "Timing",
      descriptionList: [
        "Hiển thị chính xác thành tích trên trang thi đấu",
        "Thông báo kết quả VĐV qua ZNS",
        "Dự đoán thành tích VĐV bằng hệ thống hiện đại",
        "Giấy chứng nhận điện tử chuyên nghiệp",
        "Hệ thống linh hoạt đáp ứng mọi loại hình thể thao",
      ],
    },
  ];
  return (
    <div className="pt-10 px-10 flex flex-col items-center gap-8">
      <div className="max-w-lg lg:max-w-max text-left lg:text-center">
        <h1 className="text-gradient text-3xl lg:text-[48px] leading-normal lg:leading-loose font-bold">
          CHI TIẾT VỀ DỊCH VỤ CỦA CHÚNG TÔI
        </h1>
        <p className="text-[#757575] text-sm md:text-base font-normal leading-relaxed max-w-3xl">
          Là đơn vị cung cấp dịch vụ SEO tổng thể chuyên nghiệp hàng đầu Việt
          Nam, đây là những lí do khiến hàng trăm doanh nghiệp lựa chọn GTV
          SEO là bạn đồng hành trên con đường phát triển. Và bạn cũng sẽ yêu
          thích chúng tôi!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl gap-6 place-items-stretch">
        {/* First Row */}
        <Image
          className="order-1 lg:order-none"
          src={datas[0].image}
          alt="A man smiling"
        />
        <div className="order-2 lg:order-none">
          <Card
            title={datas[0].title}
            descriptionList={datas[0].descriptionList}
          />
        </div>

        {/* Second Row */}
        <div className="order-4 lg:order-none">
          <Card
            title={datas[1].title}
            descriptionList={datas[0].descriptionList}
          />
        </div>
        <Image
          className="order-3 lg:order-none"
          src={datas[1].image}
          alt="A man smiling"
        />

        {/* Third Row */}
        <Image
          className="order-5 lg:order-none"
          src={datas[2].image}
          alt="A man smiling"
        />
        <div className="order-6 lg:order-none">
          <Card
            title={datas[2].title}
            descriptionList={datas[0].descriptionList}
          />
        </div>

        {/* Fourth Row */}
        <div className="order-8 lg:order-none">
          <Card
            title={datas[3].title}
            descriptionList={datas[0].descriptionList}
          />
        </div>
        <Image
          className="order-7 lg:order-none"
          src={datas[3].image}
          alt="A man smiling"
        />

        {/* Fifth Row */}
        <Image
          className="order-9 lg:order-none"
          src={datas[4].image}
          alt="A man smiling"
        />

        <div className="order-10 lg:order-none">
          <Card
            title={datas[4].title}
            descriptionList={datas[0].descriptionList}
          />
        </div>

        {/* Sixth Row */}
        <div className="order-12 lg:order-none">
          <Card
            title={datas[5].title}
            descriptionList={datas[0].descriptionList}
          />
        </div>
        <Image
          className="order-11 lg:order-none"
          src={datas[5].image}
          alt="A man smiling"
        />
      </div>
    </div>
  );
}
