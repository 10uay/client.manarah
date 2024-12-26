import "@/components/M_components/M_Section_One.css";
import { useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";
import {
  motion,
  container,
  leftCard,
  rightCard,
  middleImage,
} from "@/utils/framer_motion_vars";

export default function M_Section_One({ info, domain }) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-3">
      <h2 className="text-3xl font-bold text-text text-center mb-2 mx-auto w-fit max-w-[700px]">
        <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
          {t(info?.title)}
        </BoxReveal>
      </h2>

      <div className="text-base text-text-light  max-w-[700px] text-center text_two mx-auto w-fit">
        <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
          <p>{t(info?.para)}</p>
        </BoxReveal>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-2 gap-x-4 mt-14 grid_area_template items-start"
      >
        <div className="rounded-2xl img_wrapper w-full h-fit max-w-[600px] mx-auto lg:mx-0">
          <motion.img
            variants={middleImage}
            src={`${domain}/${info?.img}`}
            width="350"
            height="450"
            alt={t(info?.title)}
            className="relative object-contain w-full rounded-2xl"
          />
        </div>
        {info?.services?.map(({ title, para }, index) => (
          <motion.div
            variants={middleImage}
            className="rounded-3xl pb-5 shadow h-fit p-5 space-y-3 border border-solid border-[#F5F5FC]"
            key={index}
          >
            <div className="rounded-full p-2 font-bold w-11 h-11 border border-solid flex justify-center items-center">
              <span>{`0${index + 1}`}</span>
            </div>
            <h3 className="font-bold text-black text-lg line-clamp-1">
              {t(title)}
            </h3>
            <p className="text-text-light line-clamp-3">{t(para)}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
