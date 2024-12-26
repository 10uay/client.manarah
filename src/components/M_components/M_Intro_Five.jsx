import React from "react";
import WhatsAppButton from "../WhatsAppButton";
import { useTranslation } from "@/utils/Imports";

export default function M_Intro_Five({ info, domain }) {
  const { t } = useTranslation();

  return (
    <div
      className="!bg-no-repeat !bg-cover min-h-[70vh] flex items-center transparent_bg mb-20 px-3"
      style={{
        background: `url(${domain}/${info?.img})`,
      }}
    >
      <div className="container mx-auto z-10">
        <div className="max-w-[550px]">
          <div className="text-4xl md:text-5xl xl:text-6xl xl:leading-[4.5rem] capitalize md:leading-[3.5rem] font-bold text-white">
            <h2>
              <span style={{ backgroundColor: "transparent" }}>
                {t(info?.title_one)}
              </span>
            </h2>
            <h1 className="ql-direction-rtl">
              <strong
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(255, 255, 255)",
                }}
              >
                {t(info?.title_two)}
              </strong>
            </h1>
          </div>
          <div className="text-white mt-5">{t(info?.para)}</div>
          <div className="flex items-center gap-5 mt-8">
            <WhatsAppButton text="get-service-now" />
          </div>
        </div>
      </div>
    </div>
  );
}
