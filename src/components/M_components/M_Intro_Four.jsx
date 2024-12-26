import WhatsAppButton from "../WhatsAppButton";
import { useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";

export default function M_Intro_Four({ info, domain }) {
  const { t } = useTranslation();

  return (
    <div className="py-20 container mx-auto px-3">
      <div className="text-black capitalize space-y-5 text-center">
        <div className="font-bold text-center text-5xl max-w-[650px] mx-auto tracking-wide w-fit">
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            <h1>
              <strong>{t(info?.title)}</strong>
            </h1>
          </BoxReveal>
        </div>
        <div className=" text-center mx-auto tracking-wide w-fit">
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            <p className="text-text-light text-center text-sm mx-auto max-w-[500px]">
              {t(info?.para)}
            </p>
          </BoxReveal>
        </div>
        <div className="flex items-center justify-center gap-3 w-fit base-btn mx-auto">
          <WhatsAppButton text="get-a-Quote" />
        </div>
        <div className="min-h-[300px] rounded-2xl">
          <img
            src={`${domain}/${info?.img}`}
            alt={t(info?.title)}
            className="mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
