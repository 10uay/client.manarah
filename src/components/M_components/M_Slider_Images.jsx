import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./M_Slider_Images.css";
import Slider from "react-slick";
import { useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";


function M_Slider_Images({ info, domain }) {
  const { t } = useTranslation();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 900,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint as needed
        settings: {
          slidesToShow: 1,
          centerPadding: "30px", // Adjust padding for mobile if needed
        },
      },
    ],
  };

  return (
    <div className="slider-container  mx-auto overflow-hidden px-0">
      <span className="block container mx-auto text-center mySpan !text-3xl !lg:text-4xl !lg:leading-[3.2rem] !font-bold !text-text max-w-[500px] lg:max-w-[400px] !mb-8">
        <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
          {t(info?.title)}
        </BoxReveal>
      </span>
      <Slider {...settings}>
        {info?.images?.map((img, i) => (
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

export default M_Slider_Images;
