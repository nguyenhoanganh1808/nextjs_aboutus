"use client";
import React from "react";
import { useIncreaseNumberAnimations } from "@/app/hooks/useIncreaseNumberAnimations";

interface StatColumnProps {
  startStat: number; // Starting formatted stat like "1K1"
  endStat: number; // Ending formatted stat like "1K2"
  defaultStat: string;
  title: string;
}

export default function StatColumn({
  startStat,
  endStat,
  defaultStat,
  title,
}: StatColumnProps) {
  const { containerRef, currentFormattedStat, statRef } =
    useIncreaseNumberAnimations({ startValue: startStat, endValue: endStat });
  return (
    <div ref={containerRef} className="flex flex-col gap-6 max-w-60">
      <p className="text-[80px] font-bold leading-[64px]">
        {defaultStat}
        <span ref={statRef}>{currentFormattedStat}</span>
        <span>+</span>
      </p>

      <p className="text-wrap text-xl font-bold leading-normal">{title}</p>
    </div>
  );
}
