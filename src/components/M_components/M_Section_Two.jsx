import WhatsAppButton from "@/components/WhatsAppButton";
import { useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";
import { motion, container, middleImage } from "@/utils/framer_motion_vars";

export default function M_Section_Two({ info, domain }) {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2 items-center px-3"
    >
      <div className={`rounded-[3rem] lg:order-${info?.dir}`}>
        <motion.img
          variants={middleImage}
          src={`${domain}/${info?.img}`}
          alt={t(info?.title)}
          className="relative mx-auto !rounded-[3rem] object-contain max-h-[550px]"
        />
      </div>
      <div className="space-y-5 lg:order-1">
        <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
          <div className="text-3xl lg:text-4xl mb-4 lg:leading-[2.8rem] text-text font-bold leading-[2.5rem] capitalize">
            {t(info?.title)}
          </div>
        </BoxReveal>
        <div className="mt-5 overflow-x-scroll">
          <ul>
            {info?.infos?.map(({ title, para, icon }, index) => (
              <motion.li
                className="flex items-start gap-2 mb-4 last:mb-0"
                key={index}
                variants={middleImage}
              >
                {icon && (
                  <img
                    src={`${domain}/${icon}`}
                    alt={info?.title}
                    className="relative rounded-full w-9 h-9 object-cover"
                  />
                )}
                <div>
                  <h3 className="text-text font-semibold mb-2 text-2xl">
                    {t(title)}
                  </h3>
                  <p className="text-[#737195]">{t(para)}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div variants={middleImage}>
          <WhatsAppButton text="get-service-now" />
        </motion.div>
      </div>
    </motion.div>
  );
}
