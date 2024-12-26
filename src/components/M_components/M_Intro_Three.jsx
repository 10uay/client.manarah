import { useTranslation } from "@/utils/Imports";
import WhatsAppButton from "../WhatsAppButton";
import "./M_Intro_Three.css";

export default function M_Intro_Three({ info, domain }) {
  const { t } = useTranslation();

  return (
    <div
      className="header-8 !bg-cover !bg-no-repeat pt-20 mb-20 px-3"
      style={{
        background: `url(${domain}/${info?.wide_img})`,
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-5 min-h-[85vh]">
          <div
            className="space-y-5 pb-11 lg:pb-0  backdrop-blur-md bg-white/30 relative z-10 p-5 rounded-lg"
            style={{
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.1)",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <div className="text-text text-4xl md:text-5xl 2xl:text-6xl max-w-[500px] 2xl:max-w-[700px] font-montserrat md:leading-[3.5rem] font-bold">
              <p>{t(info?.title)}</p>
            </div>
            <div className="max-w-[500px] text-[#3f414b]">{t(info?.para)}</div>
            <WhatsAppButton text="get-service-now" />
          </div>
          <div className="flex items-center justify-center relative -translate-y-11 md:translate-y-0">
            <img
              src={`${domain}/${info?.img}`}
              onError="this.setAttribute(&#39;data-error&#39;, 1)"
              width="595"
              height="521"
              alt="Sports Predictions App || تطبيق توقعات الرياضة"
              loading="lazy"
              sizes="(max-width: 768px) 400px, 500px"
              className="max-h-[595px] mx-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
