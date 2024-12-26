import { Carousel } from "@trendyol-js/react-carousel";
import {
  MdArrowCircleLeft,
  MdArrowCircleRight,
  useEffect,
  useRef,
  useState,
  useTranslation,
} from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";

export default function M_Slider({ info }) {
  const { t } = useTranslation();
  const carouselRef = useRef(null);
  const [number_of_cards, setNumber_of_cards] = useState(getShowValue());

  function getShowValue() {
    if (window.innerWidth < 640) {
      return 1;
    } else if (window.innerWidth < 768) {
      return 2;
    } else {
      return 3;
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setNumber_of_cards(getShowValue());
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial values

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.next();
      }
    };
    const interval = setInterval(scroll, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`py-10 bg-[${info?.bg_color}] bg-[#d3f9ff] rounded-xl px-3 overflow-x-scroll`}
    >
      <div className="container mx-auto">
        <div className="space-y-2 mb-14 md:mb-16">
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            <h2 className="text-[26px] lg:text-4xl lg:leading-[3.2rem] font-bold text-text max-w-[500px]">
              {t(info?.title)}
            </h2>
          </BoxReveal>
          {info?.para && (
            <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
              <div className="text-text-light max-w-[500px] mb-7 text-lg">
                {t(info?.para)}
              </div>
            </BoxReveal>
          )}
        </div>
        <Carousel
          ref={carouselRef}
          show={number_of_cards && number_of_cards}
          slide={number_of_cards && number_of_cards}
          swiping={true}
          responsive={true}
          className="py-5 cursor-grabbing	"
          leftArrow={
            <button className="absolute -top-10 md:left-6 left-24 z-50">
              <MdArrowCircleLeft className="block text-5xl" />
            </button>
          }
          rightArrow={
            <button className="absolute -top-10 md:right-6 right-24 z-50">
              <MdArrowCircleRight className="block text-5xl" />
            </button>
          }
        >
          {info?.cards?.map(({ title, para }, index) => (
            <div
              className="!cursor-grab select-none rounded-3xl pb-5 shadow p-5 space-y-3 border border-solid border-[#F5F5FC] h-full bg-white mx-1"
              key={index}
            >
              <div className="font-bold w-11 h-11 flex justify-center items-center overflow-hidden border border-solid rounded-full">
                <span>{`0${index + 1}`}</span>
              </div>
              <h2 className="select-none font-bold text-start text-black text-lg line-clamp-1">
                {t(title)}
              </h2>
              <p className="select-none text-text-light text-start">
                {t(para)}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
