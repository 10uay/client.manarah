import WhatsAppButton from "@/components/WhatsAppButton";
import { useTranslation, GrChat } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";

export default function M_DBMS({ info, domain }) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5 gap-10 items-center">
        <div className="order-2 lg:order-2 space-y-5 overflow-x-hidden">
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            <h2 className="text-2xl md:text-3xl xl:text-5xl font-bold capitalize text-black max-w-[600px] lg:mb-10 mb-0">
              {t(info?.title)}
            </h2>
          </BoxReveal>
          {info?.services?.map(
            ({ title, para }, index) =>
              title && (
                <div className="text-[#737195] mt-8" key={index}>
                  <h4 className="flex items-center gap-2 font-bold text-lg text-black">
                    {info?.counter ? (
                      <span className="flex items-center justify-center border rounded-full border-third w-11 h-11 mb-2">
                        {`0${index + 1}`}
                      </span>
                    ) : (
                      <GrChat />
                    )}
                    {t(title)}
                  </h4>
                  <p className="max-w-[700px]">{t(para)}</p>
                </div>
              )
          )}

          {info?.whatsapp_button && <WhatsAppButton text="get-service-now" />}
        </div>
        <div
          className={`order-1 lg:order-${
            info?.dir === 3 ? "2" : "1"
          } mx-auto overflow-hidden`}
        >
          <img
            src={`${domain}/${info?.img}`}
            // width="550"
            height="550"
            alt={t(info?.title)}
            sizes="(max-width: 768px) 350px, (max-width: 1024px) 400px, 550px"
            className="object-contain mx-auto rounded-lg drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
