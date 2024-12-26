import {
  MdKeyboardDoubleArrowRight,
  Link,
  useTranslation,
  useState,
  useEffect,
} from "@/utils/Imports";

export default function M_Home_SectionOne() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState();

  useEffect(() => {
    if (i18n.language) {
      const currentLanguage = i18n.language;
      setLanguage(currentLanguage);
    }
  }, [i18n.language]);

  return (
    <>
      <div className="container mb-11 lg:mb-20 mx-auto mt-24">
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 items-center">
          <div className="about-text space-y-3 order-2">
            <h2 className="text-2xl md:text-3xl md:leading-[2.3rem] font-bold text-text animated wow fadeInUp animated">
              {t("+6-years-of-digital-solutions-and-information-technology")}
            </h2>
            <div className="line-clamp-3 text-text-light text-sm mb-5 leading-6 animated wow fadeInUp animated">
              {t("it-sounds-like-you-have-embarked-on-an-impressive-journey")}
            </div>
            <div className="flex items-center gap-2 animated wow bounceIn animated">
              <div className="relative dark:bg-black">
                <img
                  format="webp"
                  alt="Langjährige Erfahrung im Bereich Softwaredienstleistungen || Years of experience in software services || سنوات من الخبرة في خدمات البرمجيات"
                  src="/images/6_Years.png"
                  align="center"
                  width="90"
                  height="80"
                  sizes="100px"
                  className="object-contain dark:text-white"
                />
                <span className="font-bold text-primary text-2xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  +6
                </span>
              </div>
              <span className="text-text-light font-medium">
                {t("years-of-experience-in-software-services")}
              </span>
            </div>
            <div className="flex items-center justify-end !mt-8">
              <Link to="/about" className="base-btn-white flex">
                {t("more-about-us")}
                <MdKeyboardDoubleArrowRight
                  className={`text-[24px] text-main_color ms-3 ${
                    language === "ar" ? "rotate-180" : ""
                  }`}
                />
              </Link>
            </div>
          </div>
          <div className="order-1 animated wow fadeInLeft animated">
            <img
              src="/images/people.webp"
              width="595"
              height="521"
              alt="Jahrelange Erfahrung in digitalen Lösungen und IT || Years of digital solutions and IT || أعوام من الحلول الرقمية وتكنولوجيا المعلومات"
              className="max-h-[595px] mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
