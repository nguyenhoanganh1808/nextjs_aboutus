"use client";

import Card from "./card";
import { useGsapAnimations } from "@/app/hooks/useGsapAnimations";

export default function SolutionsForBusiness() {
  const {} = useGsapAnimations();
  const cardsData = [
    {
      title: "Ticket",
      description:
        "Cổng bán vé sự kiện thể thao Enjoy Sport với những tính năng ưu việt và giao diện thân thiện với người dùng",
      href: "ticket",
      svg: (
        <svg
          width="93"
          height="75"
          viewBox="0 0 93 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.0602 9.0655C-3.46452e-07 11.6139 0 14.8468 0 21.3125V24.7812C0 26.696 1.5624 28.25 3.4875 28.25H4.65C7.11651 28.25 9.48201 29.2246 11.2261 30.9593C12.9702 32.694 13.95 35.0467 13.95 37.5C13.95 39.9533 12.9702 42.306 11.2261 44.0407C9.48201 45.7754 7.11651 46.75 4.65 46.75H3.4875C2.56256 46.75 1.6755 47.1155 1.02146 47.766C0.367432 48.4165 0 49.2988 0 50.2188V53.6875C0 60.1533 -3.46452e-07 63.3861 1.0602 65.9345C1.76126 67.6184 2.78901 69.1485 4.08474 70.4372C5.38047 71.726 6.91878 72.7482 8.6118 73.4455C11.174 74.5 14.4243 74.5 20.925 74.5H72.075C78.5757 74.5 81.8261 74.5 84.3882 73.4455C86.0812 72.7482 87.6195 71.726 88.9153 70.4372C90.211 69.1485 91.2387 67.6184 91.9398 65.9345C93 63.3861 93 60.1533 93 53.6875V50.2188C93 49.2988 92.6326 48.4165 91.9785 47.766C91.3245 47.1155 90.4374 46.75 89.5125 46.75H88.35C85.8835 46.75 83.518 45.7754 81.7739 44.0407C80.0298 42.306 79.05 39.9533 79.05 37.5C79.05 35.0467 80.0298 32.694 81.7739 30.9593C83.518 29.2246 85.8835 28.25 88.35 28.25H89.5125C90.4374 28.25 91.3245 27.8845 91.9785 27.234C92.6326 26.5835 93 25.7012 93 24.7812V21.3125C93 14.8468 93 11.6139 91.9398 9.0655C91.2387 7.38158 90.211 5.85154 88.9153 4.56278C87.6195 3.27402 86.0812 2.2518 84.3882 1.5545C81.8261 0.500001 78.5757 0.5 72.075 0.5H20.925C14.4243 0.5 11.174 0.500001 8.6118 1.5545C6.91878 2.2518 5.38047 3.27402 4.08474 4.56278C2.78901 5.85154 1.76126 7.38158 1.0602 9.0655ZM44.4401 31.432C43.9937 32.579 43.7705 33.1525 43.3566 33.541C43.2414 33.6507 43.1152 33.7484 42.9799 33.8324C42.4963 34.1284 41.8965 34.1839 40.6968 34.2949C38.6647 34.4799 37.6511 34.577 37.3395 35.1736C37.2761 35.2989 37.2322 35.433 37.2093 35.5714C37.107 36.242 37.851 36.945 39.3483 38.3464L39.7621 38.7349C40.4596 39.3916 40.8084 39.72 41.013 40.127C41.1308 40.3759 41.2107 40.6409 41.2502 40.9132C41.3153 41.3665 41.213 41.8382 41.0084 42.791L40.934 43.1333C40.5666 44.8399 40.3853 45.6909 40.6131 46.1118C40.7108 46.2954 40.8547 46.4507 41.0307 46.5625C41.2068 46.6744 41.4089 46.739 41.6175 46.75C42.0825 46.7731 42.7382 46.2228 44.0541 45.1174C44.9144 44.3866 45.3468 44.0259 45.8304 43.8825C46.2671 43.7519 46.7329 43.7519 47.1696 43.8825C47.6532 44.0213 48.0857 44.3913 48.9506 45.1174C50.2619 46.2228 50.9175 46.7731 51.3825 46.75C51.5911 46.739 51.7932 46.6744 51.9693 46.5625C52.1453 46.4507 52.2892 46.2954 52.3869 46.1118C52.6147 45.6955 52.4334 44.8399 52.0614 43.1333L51.9916 42.791C51.787 41.8429 51.6847 41.3665 51.7499 40.9132C51.7893 40.6409 51.8692 40.3759 51.987 40.127C52.1916 39.72 52.5404 39.387 53.2379 38.7395L53.6563 38.3464C55.1443 36.945 55.893 36.242 55.7907 35.5714C55.7678 35.433 55.7239 35.2989 55.6605 35.1736C55.349 34.577 54.3353 34.4799 52.3032 34.2949C51.1035 34.1839 50.5037 34.1284 50.0247 33.8324C49.8878 33.7486 49.76 33.651 49.6434 33.541C49.2249 33.1525 49.0064 32.579 48.56 31.432C47.7788 29.4247 47.3882 28.4165 46.7558 28.2777C46.5867 28.2464 46.4133 28.2464 46.2443 28.2777C45.6119 28.4165 45.2213 29.4247 44.4401 31.432Z"
            fill="url(#paint0_linear_89_2475)"
            className="group-hover:fill-white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_89_2475"
              x1="46.5"
              y1="0.5"
              x2="46.5"
              y2="74.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1253E9" />
              <stop offset="0.556" stopColor="#852BE1" />
              <stop offset="1" stopColor="#EB07D9" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Photo Service",
      description:
        "Hệ thống lưu trữ và tìm kiếm hình ảnh thông minh bằng số BIB thi đấu và nhận diện khuôn mặt với mật độ chính xác gần như tuyệt đối",
      href: "photo-service",

      svg: (
        <svg
          width="76"
          height="75"
          viewBox="0 0 76 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.125 74.8364C6.85625 74.8364 4.91475 74.0293 3.3005 72.4151C1.68625 70.8008 0.87775 68.8579 0.875 66.5864V8.83643C0.875 6.56768 1.6835 4.62618 3.3005 3.01193C4.9175 1.39768 6.859 0.589176 9.125 0.586426H66.875C69.1438 0.586426 71.0866 1.39493 72.7036 3.01193C74.3206 4.62893 75.1277 6.57043 75.125 8.83643V66.5864C75.125 68.8552 74.3179 70.798 72.7036 72.4151C71.0894 74.0321 69.1465 74.8392 66.875 74.8364H9.125ZM13.25 58.3364H62.75L47.2812 37.7114L34.9062 54.2114L25.625 41.8364L13.25 58.3364Z"
            fill="url(#paint0_linear_87_1883)"
            className="group-hover:fill-white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_87_1883"
              x1="38"
              y1="0.586426"
              x2="38"
              y2="74.8364"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1253E9" />
              <stop offset="0.556" stopColor="#852BE1" />
              <stop offset="1" stopColor="#EB07D9" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Timing",
      description:
        "Áp dụng công nghệ tốt nhất mang đến kết quả chính xác và trực quan trên trang kết quả thi đấu, cùng giấy chứng nhận hoàn thành chuyên nghiệp.",
      href: "timing",

      svg: (
        <svg
          width="71"
          height="82"
          viewBox="0 0 71 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7682 7.80952V0H47.2318V7.80952H23.7682ZM27.6788 53.6905L23.3771 45.1C23.0512 44.3841 22.5624 43.8466 21.9106 43.4873C21.2588 43.1281 20.5745 42.9498 19.8575 42.9524H0.5C1.47765 34.1667 5.2905 26.7645 11.9385 20.746C18.5866 14.7275 26.4404 11.7169 35.5 11.7143C39.541 11.7143 43.419 12.3651 47.1341 13.6667C50.8492 14.9683 54.3361 16.8556 57.595 19.3286L63.0698 13.8619L68.5447 19.3286L63.0698 24.7952C65.1555 27.5286 66.8175 30.409 68.0559 33.4365C69.2942 36.464 70.1089 39.6359 70.5 42.9524H53.5866L46.8408 29.481C46.1238 27.9841 44.9506 27.2357 43.3212 27.2357C41.6918 27.2357 40.5186 27.9841 39.8017 29.481L27.6788 53.6905ZM35.5 82C26.4404 82 18.5866 78.9907 11.9385 72.9722C5.2905 66.9537 1.47765 59.5502 0.5 50.7619H17.4134L24.1592 64.2333C24.8762 65.7302 26.0493 66.4786 27.6788 66.4786C29.3082 66.4786 30.4814 65.7302 31.1983 64.2333L43.3212 40.0238L47.6229 48.6143C47.9488 49.3302 48.4376 49.8677 49.0894 50.227C49.7411 50.5862 50.4255 50.7645 51.1425 50.7619H70.5C69.5223 59.5476 65.7095 66.9497 59.0614 72.9683C52.4134 78.9868 44.5596 81.9974 35.5 82Z"
            fill="url(#paint0_linear_89_2488)"
            className="group-hover:fill-white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_89_2488"
              x1="35.5"
              y1="0"
              x2="35.5"
              y2="82"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1253E9" />
              <stop offset="0.556" stopColor="#852BE1" />
              <stop offset="1" stopColor="#EB07D9" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Livestream",
      description:
        "Việc sử dụng công nghệ tiên tiến đảm bảo hệ thống Livestream bắt trọn mọi khoảnh khắc đẹp trên đường đua và ý nghĩa giải đấu mà BTC muốn hướng tới.",
      href: "livestream",

      svg: (
        <svg
          width="86"
          height="63"
          viewBox="0 0 86 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M58.6364 0C59.6731 0 60.6674 0.414843 61.4005 1.15327C62.1336 1.89169 62.5455 2.89321 62.5455 3.9375C62.5455 10.8873 70.3806 14.9492 76.06 10.9437L82.9235 6.10313C83.2166 5.89623 83.5603 5.77433 83.9174 5.75072C84.2745 5.72711 84.6312 5.80269 84.9485 5.96923C85.2659 6.13576 85.5317 6.38686 85.7172 6.69514C85.9026 7.00342 86.0004 7.35706 86 7.7175V55.2825C86.0004 55.6429 85.9026 55.9966 85.7172 56.3049C85.5317 56.6131 85.2659 56.8642 84.9485 57.0308C84.6312 57.1973 84.2745 57.2729 83.9174 57.2493C83.5603 57.2257 83.2166 57.1038 82.9235 56.8969L76.06 52.0563C70.3806 48.0508 62.5455 52.1127 62.5455 59.0625C62.5455 60.1068 62.1336 61.1083 61.4005 61.8467C60.6674 62.5852 59.6731 63 58.6364 63H3.90909C2.87234 63 1.87804 62.5852 1.14495 61.8467C0.411849 61.1083 0 60.1068 0 59.0625V3.9375C0 2.89321 0.411849 1.89169 1.14495 1.15327C1.87804 0.414843 2.87234 0 3.90909 0H58.6364ZM25.0182 19.0142C24.6577 19.0141 24.3083 19.1395 24.0291 19.3691C23.7498 19.5987 23.5579 19.9184 23.4858 20.2742L23.4545 20.5852V42.4069C23.4545 42.6619 23.516 42.9132 23.6337 43.139C23.7513 43.3649 23.9217 43.5586 24.1301 43.7034C24.3385 43.8483 24.5788 43.94 24.8301 43.9707C25.0815 44.0013 25.3365 43.97 25.5733 43.8795L25.8586 43.7378L42.8827 32.8269C43.082 32.699 43.25 32.5272 43.3739 32.3245C43.4978 32.1218 43.5745 31.8935 43.5982 31.6566C43.622 31.4198 43.592 31.1806 43.5108 30.957C43.4295 30.7335 43.299 30.5314 43.129 30.366L42.8827 30.1691L25.8586 19.2544C25.6064 19.0969 25.3149 19.011 25.0182 19.0142Z"
            fill="url(#paint0_linear_89_2494)"
            className="group-hover:fill-white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_89_2494"
              x1="43"
              y1="0"
              x2="43"
              y2="63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1253E9" />
              <stop offset="0.556" stopColor="#852BE1" />
              <stop offset="1" stopColor="#EB07D9" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      title: "Check-in",
      description:
        "Giải pháp công nghệ giúp việc Check-in được diễn ra nhanh chóng và giảm thiểu sai sót, thay thế phương pháp Check-in truyền thống.",
      href: "check-in",

      svg: (
        <svg
          width="68"
          height="77"
          viewBox="0 0 68 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.2785 0C22.2713 0 9.36373 12.6194 8.557 28.49L0.404817 39.3128C-0.614206 40.6389 0.404817 42.7778 2.18811 42.7778H8.557V55.6111C8.557 60.3594 12.3359 64.1667 17.0489 64.1667H21.2948V77H51.0163V56.9372C61.0791 52.1461 68 41.9222 68 29.9444C68 13.4322 54.7527 0 38.2785 0ZM36.0282 42.7778L21.2948 27.8056L27.2391 21.7739L36.0282 30.6717L53.5638 12.8333L59.5081 18.865L36.0282 42.7778Z"
            fill="url(#paint0_linear_89_2500)"
            className="group-hover:fill-white"
          />
          <defs>
            <linearGradient
              id="paint0_linear_89_2500"
              x1="34"
              y1="0"
              x2="34"
              y2="77"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1253E9" />
              <stop offset="0.556" stopColor="#852BE1" />
              <stop offset="1" stopColor="#EB07D9" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
  ];

  return (
    <div
      id="solutions-for-business"
      className="pt-10 p-8 px-10 flex flex-col items-center gap-8 bg-[#F5F6FE] dark:text-white overflow-hidden"
    >
      <div className="max-w-lg lg:max-w-max text-left lg:text-center flex lg:items-center flex-col">
        <h1 className="text-gradient text-3xl lg:text-[48px] lg:leading-loose font-bold fade-up">
          GIẢI PHÁP DÀNH CHO DOANH NGHIỆP
        </h1>
        <p className="text-[#757575] text-sm md:text-base font-normal leading-relaxed w-full max-w-3xl fade-up">
          Với đội ngũ nhiều năm kinh nghiệm trong lĩnh vực công nghệ và thể
          thao, chúng tôi tự hào đem đến những giải pháp tối ưu nhất cho các đơn
          vị tổ chức sự kiện
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 fade-up">
        {cardsData.map((cardData, index) => (
          <Card
            key={cardData.title}
            index={index}
            title={cardData.title}
            description={cardData.description}
            svg={cardData.svg}
            href={cardData.href}
          />
        ))}
      </div>
    </div>
  );
}
