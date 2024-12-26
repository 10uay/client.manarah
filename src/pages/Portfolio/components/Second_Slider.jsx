import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/components/M_components/M_Slider_Images.css";
import Slider from "react-slick";
import { useTranslation } from "@/utils/Imports";

function Second_Slider({ info, domain }) {
  const { t, i18n } = useTranslation();

  const settings = {
    // className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 2000,
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

  return (
    <div className="slider-container mx-auto overflow-hidden px-0">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 container mx-auto px-3 lg:px-0 mb-10">
        <h2 className="text-3xl lg:text-4xl font-bold capitalize">
          {t(info?.second_slider?.title)}
        </h2>
        <div className="">
          <p className="text-[#737195]">{t(info?.second_slider?.para)}</p>
          <div className="mt-5 grid lg:grid-cols-2 grid-cols-1">
            {info?.second_slider?.features.map(({ name, icon }, i) => (
              <ul key={i}>
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
      </div>
      <Slider {...settings}>
        {info?.second_slider?.images?.map((img, i) => (
          <div key={i}>
            <img
              src={`${domain}/${img}`}
              width="595"
              height="521"
              sizes="(max-width: 768px) 400px, 500px"
              className="max-h-[595px] object-contain min-h-[300px] px-2 !select-none"
            />
          </div>
        ))}
        {info?.second_slider?.images?.map((img, i) => (
          <div key={i}>
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
  );
}

export default Second_Slider;
