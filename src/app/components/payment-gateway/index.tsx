import OnePayImage from "@/app/images/payment/onepay.png";
import VnPayImage from "@/app/images/payment/vnpay.png";
import MbImage from "@/app/images/payment/mb.png";
import VisaImage from "@/app/images/payment/visa.png";
import MastercardImage from "@/app/images/payment/mastercard.png";
import AtmImage from "@/app/images/payment/atm.png";
import JcbImage from "@/app/images/payment/jcb.png";
import QrImage from "@/app/images/payment/bx_qr.png";
import UnionPayImage from "@/app/images/payment/union-pay.png";
import Image from "next/image";

export default function PaymentGateWay() {
  return (
    <div className="pt-10 p-8 px-10 flex flex-col items-center gap-8">
      <div className="max-w-lg lg:max-w-max text-left lg:text-center">
        <h1 className="text-gradient text-3xl lg:text-[48px] lg:leading-loose font-bold">
          ĐỐI TÁC THANH TOÁN
        </h1>
        <p className="text-center text-black text-[32px] font-bold">
          Cổng thanh toán
        </p>
      </div>

      {/* Payment */}
      <div className="grid grid-cols-12 place-items-center gap-6 lg:gap-0 max-w-lg lg:max-w-3xl">
        <Image
          className="col-span-4"
          src={OnePayImage}
          alt="OnePay"
          key="OnePay"
        />
        <Image
          className="col-span-4"
          src={VnPayImage}
          alt="VnPay"
          key="VnPay"
        />
        <Image
          className="col-span-4"
          src={MbImage}
          alt="MB Bank"
          key="MB Bank"
        />
        <Image
          className="col-span-3 lg:col-span-2"
          src={VisaImage}
          alt="Visa"
          key="Visa"
        />
        <Image
          className="col-span-3 lg:col-span-2"
          src={MastercardImage}
          alt="Mastercard"
          key="Mastercard"
        />
        <Image
          className="col-span-3 lg:col-span-2"
          src={AtmImage}
          alt="ATM"
          key="ATM"
        />
        <Image
          className="col-span-3 lg:col-span-2"
          src={JcbImage}
          alt="JCB"
          key="JCB"
        />
        <Image
          className="col-span-6 justify-self-end lg:justify-self-auto lg:col-span-2"
          src={QrImage}
          alt="QR Code"
          key="QR Code"
        />
        <Image
          className="col-span-6 justify-self-start lg:justify-self-auto lg:col-span-2"
          src={UnionPayImage}
          alt="UnionPay"
          key="UnionPay"
        />
      </div>
    </div>
  );
}
