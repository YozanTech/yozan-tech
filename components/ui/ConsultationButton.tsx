"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { useModalStore } from "@/store/useModalStore";

// Check if current time is within Malaysia business hours
function checkIsBusinessHours() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kuala_Lumpur",
    weekday: "short",
    hour: "numeric",
  }).formatToParts(new Date());

  let hour = 0;

  for (const part of parts) {
    if (part.type === "hour") hour = parseInt(part.value, 10);
  }

  // Business hours are Monday-Sunday, 9:00 AM to 6:00 PM (18:00)
  if (hour >= 9 && hour < 18) {
    return true;
  }
  return false;
}

interface ConsultationButtonProps {
  variant?: "default" | "header" | "outline";
  text: string;
}

export default function ConsultationButton({
  variant = "default",
  text,
}: ConsultationButtonProps) {
  const t = useTranslations("consultationBtn");
  const { onOpen } = useModalStore();
  const [isBusinessHours, setIsBusinessHours] = useState<boolean>(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState warning (cascading renders)
    const initTimeout = setTimeout(() => {
      setMounted(true);
      setIsBusinessHours(checkIsBusinessHours());
    }, 0);

    // Update check every minute
    const intervalId = setInterval(() => {
      setIsBusinessHours(checkIsBusinessHours());
    }, 60000);

    return () => {
      clearTimeout(initTimeout);
      clearInterval(intervalId);
    };
  }, []);

  const disabled = mounted && !isBusinessHours;
  const isHeader = variant === "header";
  const isOutline = variant === "outline";

  let baseClasses = "";
  if (isHeader) {
    baseClasses =
      "md:text-sm text-[10px] ml-1 px-4 py-2 rounded-full font-semibold transition-all duration-300 text-surface-50";
  } else if (isOutline) {
    baseClasses =
      "w-full md:w-auto text-center border border-surface-300 px-5 py-3 rounded-full font-bold transition-all duration-300";
  } else {
    baseClasses =
      "group flex items-center gap-4 mt-8 w-fit text-center px-8 py-3 rounded-full font-bold transition-all duration-300 text-surface-50";
  }

  let activeClasses = "";
  if (isHeader) {
    activeClasses =
      "bg-brand-600 hover:bg-brand-700 shadow-md cursor-pointer hover:scale-105";
  } else if (isOutline) {
    activeClasses =
      "text-surface-600 hover:bg-surface-100 cursor-pointer hover:scale-105";
  } else {
    activeClasses =
      "bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-600/20 cursor-pointer hover:scale-105";
  }

  const disabledClasses =
    "text-xs md:text-sm bg-surface-400 text-surface-50 cursor-not-allowed opacity-80 border-transparent";

  const disabledText = isHeader
    ? t("disabled")
    : `${t("disabled")} (${t("operatingHours")})`;

  return (
      <button
        className={`${baseClasses} ${disabled ? disabledClasses : activeClasses}`}
        disabled={disabled}
        title={disabled ? t("disabledTitle") : ""}
        onClick={onOpen}
      >
        {disabled ? disabledText : text}
        {!disabled && variant === "default" && (
          <ArrowRight
            size={20}
            className="group-hover:translate-x-1 transition-all duration-300"
          />
        )}
      </button>
  );
}
