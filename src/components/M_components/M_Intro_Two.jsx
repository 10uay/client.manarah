import WhatsAppButton from "@/components/WhatsAppButton";
import { useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";

export default function M_Intro_Two({ info }) {
  const { t } = useTranslation();

  return (
    <div className="py-11 lg:py-20 container mx-auto">
      <div className="text-3xl md:text-4xl xl:text-5xl capitalize font-montserrat text-center md:leading-[3.3rem] font-bold max-w-[630px] xl:max-w-[800px] max-h-fit text-black xl:leading-[4rem] w-fit mx-auto">
        <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
          <h1>
            <strong>{t(info?.title)}</strong>
          </h1>
        </BoxReveal>
      </div>
      <div className="w-fit mx-auto">
        <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
          <p className="max-w-[700px] mx-auto text-[#737195] text-center mt-5">
            {t(info?.para)}
          </p>
        </BoxReveal>
      </div>
      <div className="flex items-center gap-5 justify-center mt-8">
        <WhatsAppButton text="get-service-now" />
      </div>
    </div>
  );
}
