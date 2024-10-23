"use client";

import OnePayImage from "@/../public/images/payment/onepay.png";
import VnPayImage from "@/../public/images/payment/vnpay.png";
import MbImage from "@/../public/images/payment/mb.png";
import VisaImage from "@/../public/images/payment/visa.png";
import MastercardImage from "@/../public/images/payment/mastercard.png";
import AtmImage from "@/../public/images/payment/atm.png";
import JcbImage from "@/../public/images/payment/jcb.png";
import QrImage from "@/../public/images/payment/bx_qr.png";
import UnionPayImage from "@/../public/images/payment/union-pay.png";
import Image from "next/image";
import { useGsapAnimations } from "@/app/hooks/useGsapAnimations";

export default function PaymentGateWay() {
  const {} = useGsapAnimations();
  return (
    <div className="bg-[#F6F6F6] pt-10 p-8 px-10 flex flex-col items-center gap-8 overflow-hidden">
      <div className="max-w-lg lg:max-w-max text-left lg:text-center">
        <h1 className="text-gradient text-3xl leading-normal lg:text-[48px] lg:leading-loose font-bold fade-up">
          ĐỐI TÁC THANH TOÁN
        </h1>
        <p className="text-center text-black text-[32px] font-bold fade-up">
          Cổng thanh toán
        </p>
      </div>

      {/* Payment */}
      <div className="grid grid-cols-12 place-items-center gap-6 lg:gap-0 max-w-lg lg:max-w-3xl">
        <Image
          className="col-span-4 fade-left"
          src={OnePayImage}
          alt="OnePay"
          key="OnePay"
        />
        <Image
          className="col-span-4 fade-up"
          src={VnPayImage}
          alt="VnPay"
          key="VnPay"
        />
        <Image
          className="col-span-4 fade-right"
          src={MbImage}
          alt="MB Bank"
          key="MB Bank"
        />
        <Image
          className="col-span-3 lg:col-span-2 fade-left"
          src={VisaImage}
          alt="Visa"
          key="Visa"
        />
        <Image
          className="col-span-3 lg:col-span-2 fade-left"
          src={MastercardImage}
          alt="Mastercard"
          key="Mastercard"
        />
        <Image
          className="col-span-3 lg:col-span-2 fade-left"
          src={AtmImage}
          alt="ATM"
          key="ATM"
        />
        <Image
          className="col-span-3 lg:col-span-2 fade-right"
          src={JcbImage}
          alt="JCB"
          key="JCB"
        />
        <Image
          className="col-span-6 justify-self-end lg:justify-self-auto lg:col-span-2 fade-right"
          src={QrImage}
          alt="QR Code"
          key="QR Code"
        />
        <Image
          className="col-span-6 justify-self-start lg:justify-self-auto lg:col-span-2 fade-right"
          src={UnionPayImage}
          alt="UnionPay"
          key="UnionPay"
        />
      </div>
    </div>
  );
}
