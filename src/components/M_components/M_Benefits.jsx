import WhatsAppButton from "@/components/WhatsAppButton";
import { useTranslation, GrAscend } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";
import {
  motion,
  container,
  middleImage,
} from "@/utils/framer_motion_vars";


export default function M_Benefits({ info, domain }) {
  const { t } = useTranslation();

  return (
    <motion.div
      className="container mx-auto p-0 pb-1 "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <ol
        style={{
          transform: "translateX(0px)",
          transition: "all",
          width: "100%",
        }}
      >
        <li aria-hidden="false" style={{ width: "100%" }}>
          <div className="pb-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 pb-11 items-center pt-4">
              <div className="space-y-5 order-2 lg:order-1 ps-3 lg:ps-11 lg:pe-0 pe-3">
                <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
                  <h3 className="text-3xl lg:text-4xl lg:leading-[3rem] font-bold capitalize text-text text-start">
                    {t(info?.title)}
                  </h3>
                </BoxReveal>
                <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
                  <p className="text-text-light max-w-[600px] text-start">
                    {t(info?.para)}
                  </p>
                </BoxReveal>
                <div className="!mt-11">
                  <WhatsAppButton text="get-service-now" />
                </div>
              </div>
              <div className="order-1 lg:order-2 ps-3">
                {info?.img && (
                  <motion.img
                    variants={middleImage}
                    src={`${domain}/${info?.img}`}
                    alt={t(info?.title)}
                    className="aspect-auto lg:ms-auto"
                    width="500"
                    heigh="300"
                  />
                )}
              </div>
            </div>
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-3">
              {info?.benefits.map(
                ({ title, para }, index) =>
                  title && (
                    <motion.div
                      variants={middleImage}
                      className="rounded-3xl p-5 space-y-3 border border-solid border-white h-full bg-[#ccffe7] shadow-lg"
                      key={index}
                    >
                      <div className="font-bold w-11 h-11 flex justify-center items-center overflow-hidden border border-solid border-white rounded-full">
                        {info?.icons ? (
                          <GrAscend />
                        ) : (
                          <span>{`0${index + 1}`}</span>
                        )}
                      </div>
                      <h2 className="font-bold text-start text-black text-lg line-clamp-1">
                        {t(title)}
                      </h2>
                      <p className="text-text-light text-start">{t(para)}</p>
                    </motion.div>
                  )
              )}
            </div>
          </div>
        </li>
      </ol>
    </motion.div>
  );
}
