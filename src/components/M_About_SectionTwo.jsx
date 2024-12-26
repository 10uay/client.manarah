import {
  TbMessage,
  FaRegEye,
  TbTargetArrow,
  useTranslation,
} from "@/utils/Imports";

const aboutData = [
  {
    icon: <TbMessage />,
    title: "our-message",
    description: "in-Manarah-Al-Abtkar-company-we-believe-that-technology",
  },
  {
    icon: <FaRegEye />,
    title: "our-vision",
    description:
      "we-aim-to-shape-the-future-of-technology-and-software-development",
  },
  {
    icon: <TbTargetArrow />,
    title: "our-mission",
    description: "our-mission-revolves-around-developing-software-solutions",
  },
];

const AboutCard = ({ icon, title, description }) => {
  const { t } = useTranslation();

  return (
    <div className="p-4 rounded-xl bg-[#E50E9C08]">
      <div className="text-5xl rounded-full font-bold mb-5">{icon}</div>
      <div>
        <h3 className="text-text font-semibold my-2 text-xl">{t(title)}</h3>
        <p className="text-text-light">{t(description)}</p>
      </div>
    </div>
  );
};

export default function M_About_SectionTwo() {
  return (
    <div className="container pb-20 mx-auto">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {aboutData.map((data, index) => (
          <AboutCard key={index} {...data} />
        ))}
      </div>
    </div>
  );
}
