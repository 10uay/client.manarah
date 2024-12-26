import WhatsAppButton from "@/components/WhatsAppButton";
import { HiMiniShieldCheck, useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";
import {
  motion,
  container,
  leftCard,
  middleImage,
} from "@/utils/framer_motion_vars";

export default function M_Steps({ info, domain }) {
  const { t } = useTranslation();
  // console.log(info);
  return (
    <>
      {info?.title && (
        <motion.div
          className="container mx-auto grid gap-8 pb-0 grid-cols-1 lg:grid-cols-2 items-center px-3 select-none"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="lg:order-2">
            <motion.img
              variants={middleImage}
              src={`${domain}/${info?.img}`}
              width="595"
              height="521"
              alt={t(info?.title)}
              loading="lazy"
              sizes="(max-width: 768px) 400px, 500px"
              className="max-h-[595px] mx-auto object-contain lg:!rounded-[3rem] rounded-md"
            />
          </div>
          <div className={`lg:order-${info?.dir} space-y-5 overflow-x-hidden`}>
            <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
              <h2 className="text-2xl lg:text-3xl lg:leading-[2.4rem] text-text font-semibold leading-[2.5rem] capitalize">
                <span style={{ backgroundColor: "transparent" }}>
                  {t(info?.title)}
                </span>
              </h2>
            </BoxReveal>
            <div className="text-text-light max-w-[500px]">
              <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
                <p>
                  <span className=" text-gray-500">{t(info?.para)}</span>
                </p>
              </BoxReveal>
            </div>
            {info?.steps[0].sentence && ( // Check if steps exist and have elements
              <ul className="features_list space-y-3">
                {info?.steps.map(({ sentence }, index) => (
                  <motion.li
                    variants={leftCard}
                    className="text-[#737195] flex gap-3 items-start"
                    key={index}
                  >
                    {sentence && <HiMiniShieldCheck className="text-2xl" />}
                    <span className="flex-1">{t(sentence)}</span>
                  </motion.li>
                ))}
              </ul>
            )}
            {info?.whatsapp_button && <WhatsAppButton text="get-service-now" />}
          </div>
        </motion.div>
      )}
    </>
  );
}
