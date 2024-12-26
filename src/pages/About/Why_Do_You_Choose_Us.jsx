import { useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  FaMedal,
  SiParrotsecurity,
  BsLightningChargeFill,
} from "@/utils/Imports";
import {
  motion,
  container,
  middleImage,
  leftCard,
  rightCard
} from "@/utils/framer_motion_vars";

const WhyChooseUsData = [
  {
    icon: <FaMedal />,
    title: "quality",
    description: "We-are-committed-to-achieving-the-highest-levels",
    color: "main_color",
    move: 200,
  },
  {
    icon: <SiParrotsecurity />,
    title: "reliability",
    description: "Our-team-consists-of-highly-skilled-and-certified",
    color: "secondary_color",
    text: "white",
    move: 125,
  },
  {
    icon: <BsLightningChargeFill />,
    title: "competence",
    description: "Our-team-consists-of-expert-developers-with-full-knowledge",
    color: "main_color",
    move: 50,
  },
];

const WhyChooseUsCard = ({ icon, title, description, move, color, text }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={rightCard}
      className={`2xl:translate-x-[${move}px] bg-${color} text-${text} p-5 rounded-xl items-start border gap-2 flex max-w-[600px] w-full bg-opacity-90 `}
    >
      <div className="text-2xl pt-[5px]">{icon}</div>
      <div>
        <h3 className="text-text font-bold text-2xl mb-2">{t(title)}</h3>
        <p className="text-text text-sm max-w-[450px]">{t(description)}</p>
      </div>
    </motion.div>
  );
};

export default function Why_Do_You_Choose_Us() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto lg:py-20 py-5 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-11">
        <div className="w-full max-w-[400px]">
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            <h2 className="mb-2 text-4xl lg:text-5xl lg:leading-[3.7rem] text-text font-bold leading-[2.8rem]">
              <span className="block">{t("why")}</span> {t("do-you-choose-us")}
            </h2>
          </BoxReveal>
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            <p className="mb-5 max-w-[350px] text-sm text-text-light animated wow fadeInLeftBig">
              {t(
                "the-more-years-the-better-the-solutions!-We-have-collaborated-with-several"
              )}
            </p>
          </BoxReveal>

          <div className="flex items-center mt-4 animated wow fadeInLeftBig">
            <WhatsAppButton text="lets work together" />
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 why_us_content w-full flex justify-center items-center flex-col flex-1 "
        >
          {WhyChooseUsData.map((data, index) => (
            <WhyChooseUsCard key={index} {...data} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
