import WhatsAppButton from "@/components/WhatsAppButton";
import { useTranslation } from "@/utils/Imports";
import {
  motion,
  middleImage,
} from "@/utils/framer_motion_vars";


export default function M_Get_A_Service({ info, domain }) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto mb-11 lg:mb-20 rounded-lg px-3">
      <div
        className="flex flex-col items-center justify-center text-center border rounded-[40px] px-4 py-11 lg:py-20 font-montserrat !bg-no-repeat !bg-cover !bg-center"
        style={{
          background: `url(${domain}/${info?.img})`,
        }}
      >
        <motion.h2
          variants={middleImage}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] lg:text-4xl text-3xl font-bold mb-5 capitalize max-w-[700px] leading-[3rem] lg:leading-[3.7rem] text-white"
        >
          {t("services-web-development-title-of-get-a-service-one")}
        </motion.h2>
        {info?.whatsapp_button && <WhatsAppButton text="get-service-now" />}
      </div>
    </div>
  );
}
