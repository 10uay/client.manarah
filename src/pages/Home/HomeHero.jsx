import {
  MdOutlineSecurity,
  IoIosSpeedometer,
  MdHighQuality,
  useTranslation,
} from "../../utils/Imports";
  

export default function HomeHero() {
  const { t } = useTranslation();
  const List = [
    {
      icon: <MdOutlineSecurity />,
      title: "security",
      para: "We-are-dedicated-to-providing-innovative",
      bg_color: "main_color",
    },
    {
      icon: <IoIosSpeedometer />,
      title: "speed",
      para: "We-strongly-believe-in-the-power-of-technology",
      bg_color: "secondary_color",
      color:"white"
    },
    {
      icon: <MdHighQuality />,
      title: "quality",
      para: "We-are-committed-to-achieving-the-highest-levels",
      bg_color: "main_color",
    },
  ];


  return (
    <div>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 my-11">
          {List.map(({ icon, title, para, bg_color, color }, key) => (
            <div
              className={`text_card_content p-4 rounded-xl border bg-${bg_color} bg-opacity-80 drop-shadow-3xl`}
              key={key}
            >
              <div className="inner_card">
                <div
                  className={`flex gap-2 justify-start items-center mb-3 text-xl text-${color}`}
                >
                  <div className="text-2xl">{icon}</div>

                  <p className={`font-bold text-xl text-${color}`}>
                    {t(title)}
                  </p>
                </div>
                <p
                  className={`desc max-h-[100px] overflow-hidden hover:cursor-pointer hover:overflow-y-auto text-${color}`}
                >
                  {t(para)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
