import Image from "next/image";
import firstImage from "../images/z5862419801373_d0d91c3348c238268a923b69435b8fc6.png";
import secondImage from "../images/6aa90fcba2dbf9d915a4bfbc28b5b07e.png";
import thirdImage from "../images/z5862419801373_d0d91c3348c238268a923b69435b8fc7.png";

export default function Banner() {
  return (
    <div>
      <div>
        <h2>ENJOY SPORT</h2>
        <p>
          Đơn vị cung cấp các giải pháp công nghệ về thể thao, mang dến những
          trải nghiệm dịch vụ tối ưu cho cả người tổ chức sự kiện và người tham
          gia{" "}
        </p>
        <button>LIÊN HỆ</button>
        <button>GIẢI PHÁP CỦA CHÚNG TÔI</button>
      </div>
      <div>
        <Image src={firstImage} alt="Man wearing a red clothes" />
        <Image src={secondImage} alt="Man wearing a swim suit in the beach" />
        <Image src={thirdImage} alt="Man wearing a red clothes" />
      </div>
    </div>
  );
}
