"use client";

import React from "react";
import Image from "next/image";
import Card from "./card";
import checkinImage from "@/../public/images/service-details/check-in.jpg";
import livestreamImage from "@/../public/images/service-details/livestream.jpg";
import photoServiceImage from "@/../public/images/service-details/photo-service.jpg";
import ticketImage from "@/../public/images/service-details/ticket.jpg";
import timingImage from "@/../public/images/service-details/timing.jpg";
import videoImage from "@/../public/images/service-details/video.jpg";
import { useGsapAnimations } from "@/app/hooks/useGsapAnimations";

export default function ServiceDetails() {
  const {} = useGsapAnimations();
  const datas = [
    {
      id: "ticket",
      image: ticketImage,
      title: "Ticket - EnjoySport",
      descriptionList: [
        "Ứng dụng Digital Marketing (email, ZNS, social media) để hỗ trợ truyền thông sự kiện",
        "Mua vé không cần đăng nhập",
        "Mua vé nhóm, mua vé số lượng lớn",
        "Thể hiện đầy đủ nội dung sự kiện và sửa đổi thông tin linh hoạt",
        "Tùy chỉnh yêu cầu mua vé theo BTC",
      ],
    },
    {
      id: "livestream",
      image: livestreamImage,
      title: "Streaming - Livestream sự kiện",
      descriptionList: [
        "Ứng dụng công nghệ tiên tiến",
        "Đội ngũ chuyên môn cao",
        "Tăng tương tác với người xem",
        "Tăng nhận diện thương hiệu nhà tài trợ",
      ],
    },
    {
      id: "photo-service",
      image: photoServiceImage,
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
      id: "",
      image: videoImage,
      title: "Quay dựng video chất lượng cao",
      descriptionList: [
        "Xây dựng kịch bản theo mong muốn của bạn",
        "Sử dụng flycam, máy quay cùng những thiết bị hiện đại đảm bảo chất lượng video sắc nét",
        "Đội ngũ quay dựng chuyên nghiệp, có kinh nghiệm tại các sự kiện thể thao",
        "Tạo nên những video truyền cảm hứng cho sự kiện thể thao của bạn",
      ],
    },
    {
      id: "check-in",
      image: checkinImage,
      title: "Check-in",
      descriptionList: [
        "Quản lý thông tin VĐV check-in sự kiện",
        "Ứng dụng công nghệ hiện đại",
        "Cung cấp & hỗ trợ nguồn dữ liệu tập trung",
        "Quản lý BIB và Racekit tối ưu",
      ],
    },
    {
      id: "timing",
      image: timingImage,
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
    <div className="pt-10 lg:mb-10 px-10 flex flex-col items-center gap-8 overflow-hidden">
      <div className="max-w-lg lg:max-w-max text-left lg:text-center text-left flex lg:items-center flex-col">
        <h1 className="text-gradient text-3xl lg:text-[48px] leading-normal lg:leading-loose font-bold fade-up">
          CHI TIẾT VỀ DỊCH VỤ CỦA CHÚNG TÔI
        </h1>
        <p className="text-[#757575] text-sm md:text-base font-normal leading-relaxed max-w-3xl fade-up">
          Là đơn vị cung cấp dịch vụ SEO tổng thể chuyên nghiệp hàng đầu Việt
          Nam, đây là những lí do khiến hàng trăm doanh nghiệp lựa chọn GTV
          SEO là bạn đồng hành trên con đường phát triển. Và bạn cũng sẽ yêu
          thích chúng tôi!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:max-w-6xl max-w-lg gap-10 place-items-center">
        {datas.map((data, index) => (
          <div
            key={data.id}
            id={data.id}
            className="flex w-full gap-10 items-center lg:flex-nowrap flex-wrap"
          >
            <div
              className={`w-full ${
                index % 2 === 0
                  ? "lg:order-1 fade-left"
                  : "lg:order-2 fade-right"
              }`}
            >
              <Image
                width={505}
                height={296}
                className="object-contain w-full rounded-[10px]"
                src={data.image}
                alt={data.title}
              />
            </div>
            <div
              className={`w-full ${
                index % 2 === 0
                  ? "lg:order-2 fade-right"
                  : "lg:order-1 fade-left"
              }`}
            >
              <Card title={data.title} descriptionList={data.descriptionList} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
