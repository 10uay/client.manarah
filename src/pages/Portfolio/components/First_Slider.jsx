import Slider from "react-slick";
import "./First_Slider.css";
import { useTranslation } from "@/utils/Imports";

export default function First_Slider({ info, domain }) {
  const { t, i18n } = useTranslation();
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 900,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  // console.log(i18n.dir())

  return (
    <div className="container mx-auto grid lg:grid-cols-5 gap-5 items-center px-3 !mt-24">
      <div className="lg:col-span-2">
        <h2 className="mb-2 text-3xl lg:text-4xl lg:leading-[3.7rem] font-bold leading-[2.8rem] capitalize text-[#737195]">
          {t(info?.first_slider?.title)}
        </h2>
        <p className="text-[#737195]">{t(info?.first_slider?.para)}</p>
        <div className="mt-5 grid xl:grid-cols-2 grid-cols-1">
          {info?.first_slider?.features.map(({ name, icon }, index) => (
            <ul key={index}>
              <li
                style={{
                  backgroundImage: `url(${domain}/${icon})`,
                }}
                className={`bg-${
                  i18n.dir() === "rtl" ? "right" : "left"
                } leading-8 text-[#737195] list-none bg-[length:20px] bg-no-repeat ps-[30px]`}
              >
                {t(name)}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="projects-swiper lg:col-span-3 overflow-hidden">
        <Slider {...settings}>
          {info?.first_slider?.images?.map((img, index) => (
            <div key={index}>
              <img
                src={`${domain}/${img}`}
                width="595"
                height="521"
                sizes="(max-width: 768px) 400px, 500px"
                className="max-h-[595px] object-contain min-h-[300px] px-2 !select-none"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
