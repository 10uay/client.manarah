import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import {
  FaEye,
  BsCalendarDateFill,
  Link,
  MdKeyboardDoubleArrowRight,
  useTranslation,
  useState,
  useEffect,
} from "@/utils/Imports";
import "./Card.css";

export default function Card({ info, domain }) {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const [language, setLanguage] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    if (i18n.language) {
      const currentLanguage = i18n.language;
      setLanguage(currentLanguage);
      // console.log(i18n.language);

      const content =
        currentLanguage === "en"
          ? info.content_in_EN
          : currentLanguage === "ar"
          ? info.content_in_AR
          : info.content_in_DE;

      setContent(content);
    }
  }, [info, i18n.language]);

  const [formattedDateCreatedAt, setFormattedDateCreatedAt] = useState("");

  useEffect(() => {
    const dateString = info?.createdAt;
    const formattedDate = formatDate(dateString);
    setFormattedDateCreatedAt(formattedDate);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <>
      <MagicCard
        className="flex select-none cursor-grab blog-card flex-col gap-10 items-center justify-center shadow-2xl whitespace-nowrap text-4xl max-w-[400px] !overflow-hidden
        hover:translate-y-[-4px] transition-all duration-200 ease-in-out"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      >
        <img
          src={`${domain}/${info?.img}`}
          alt={t(info?.title)}
          className="bg-cover"
        />
        <div className=" px-4 pb-4 relative">
          <h1 className="line-clamp-1 text-[18px] font-bold text-base mb-2 !text-start mt-4 text-gray-900">
            {t(info?.title)}
          </h1>
          <h3
            className="line-clamp-3 !text-start text-[16px] max-w-[500px] mb-4 leading-5 text-gray-600"
            dangerouslySetInnerHTML={{
              __html: language && content,
            }}
          ></h3>
          <div className="flex justify-between items-center">
            <div className="flex gap-4 text-primary text-sm items-center ">
              <p className="flex gap-2 items-center text-gray-600">
                <BsCalendarDateFill className="text-gray-600" />
                {formattedDateCreatedAt}
              </p>
              <p className="flex gap-2 items-center text-gray-600">
                <FaEye className="text-gray-600" />
                {t(info?.views)}
              </p>
            </div>
            <div>
              {/* <Link to={`/blog/${info?.slug}`}> */}
                <MdKeyboardDoubleArrowRight
                  className={`text-[24px] text-main_color ${
                    language === "ar" ? "rotate-180" : ""
                  }`}
                />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </MagicCard>
    </>
  );
}
//
