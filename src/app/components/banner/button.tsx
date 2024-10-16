import React from "react";

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="pl-6 pr-6 py-4 bg-white rounded-[200px] justify-center items-center inline-flex group hover:bg-gradient-to-b from-[#1253e9] via-[#852ae0] to-[#eb07d9]">
      <div className="group-hover:bg-none group-hover:bg-white text-center text-gradient text-base font-medium  capitalize leading-normal tracking-wider">
        {children}
      </div>
    </button>
  );
}
