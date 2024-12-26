import { Link, useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";
import { motion, container, middleImage } from "@/utils/framer_motion_vars";

export default function M_Home_SectionTwo({ services, domain }) {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto pb-20 lg:pb-20 pt-14">
      <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
        <h2 className="text-4xl lg:text-5xl mb-2 lg:leading-[3rem] text-text font-bold mleading-[2.5rem] animated wow fadeInUp animated">
          {t("M-Home-Section-Two-title")}
        </h2>
      </BoxReveal>
      <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
        <p className="mb-7 text-text-light max-w-[500px] animated wow fadeInUp animated">
          {t("M-Home-Section-Two-para")}
        </p>
      </BoxReveal>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-col xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {services &&
          services
            .slice(0, 8)
            .map(({ title_in_nav, icon_in_nav, path, data }, index) => (
              <motion.div
                key={index}
                variants={middleImage}
                className="border rounded-xl flex flex-col gap-2 border-[#F5F5FC] p-5 animated wow zoomIn animated"
              >
                <img
                  src={`${domain}/${icon_in_nav}`}
                  width="40"
                  height="40"
                  alt={title_in_nav}
                  className="rounded-full object-contain w-10 h-10 mb-2"
                />
                <Link
                  to={`/services/${path}`}
                  className="text-text font-semibold text-lg lg:text-xl line-clamp-1"
                  aria-label={title_in_nav}
                >
                  {t(title_in_nav)}
                </Link>
                <div className="text-text-light text-sm lg:text-base line-clamp-2">
                  {data.M_Intro_One && <p>{t(data.M_Intro_One.para)}</p>}
                  {data.M_Intro_Two && <p>{t(data.M_Intro_Two.para)}</p>}
                  {data.M_Intro_Four && <p>{t(data.M_Intro_Four.para)}</p>}
                </div>
              </motion.div>
            ))}
      </motion.div>
    </div>
  );
}
