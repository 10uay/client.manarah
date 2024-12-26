import { useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";
import {
  motion,
  container,
  middleImage,
  rightCard,
} from "@/utils/framer_motion_vars";

const AboutSectionThreeData = [
  {
    image: "/images/PIJMqeuMi6Qh6j31lEU8EwjmmCn2xj72UA3khfOi.webp",
    stats: [
      {
        value: "+200",
        label: "client",
      },
      {
        value: "+300",
        label: "project",
      },
      {
        value: "+20",
        label: "service",
      },
      {
        value: "+100",
        label: "member",
      },
    ],
  },
];

const StatCard = ({ value, label }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={rightCard}
      className="border rounded-xl border-[#D8E8F8] bg-[#f9fcfe] max-h-[194px]"
    >
      <div className="flex flex-col items-center justify-center gap-2 h-[150px] md:h-[180px] px-5">
        <p className="text-3xl md:text-5xl font-bold">{value}</p>
        <p className="font-semibold">{t(label)}</p>
      </div>
    </motion.div>
  );
};

export default function M_About_SectionThree() {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container mx-auto pb-20 overflow-hidden"
    >
      <div className="mb-8">
        <h1 className="text-2xl leading-[2.2rem] md:text-4xl font-extrabold md:leading-[3.5rem] text-text">
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            {t("some-facts-about-Manarah-Al-Abtkar")}
          </BoxReveal>
        </h1>
        <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
          <p className="text-text-light text-sm mb-5 leading-6">
            {t("we-are-here-to-help-you-find-the-best-way")}{" "}
          </p>
        </BoxReveal>
      </div>
      <div className="grid grid-cols-5 gap-5 xl:gap-12">
        <div className="col-span-5 lg:col-span-3 rounded-2xl">
          <motion.img
            variants={middleImage}
            src={AboutSectionThreeData[0].image}
            width="200"
            height="200"
            sizes="200px"
            className="w-full h-full object-cover min-h-[200px] rounded-2xl shadow-2xl"
          />
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 col-span-5 lg:col-span-2">
          {AboutSectionThreeData[0].stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
