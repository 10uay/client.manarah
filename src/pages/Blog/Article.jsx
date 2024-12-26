import {
  FaFacebook,
  FaTiktok,
  RiTwitterXFill,
  FaLinkedinIn,
  FaInstagram,
  useTranslation,
  useEffect,
  useState,
} from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";
import Card from "./components/Card";
import { useSelector } from "react-redux";

export default function Article({ info , domain}) {
  const { t, i18n } = useTranslation();
  const { posts } = useSelector((state) => state.posts);

  const [similarPosts, setSimilarPosts] = useState();
  const [language, setLanguage] = useState();
  const [content, setContent] = useState();

  useEffect(() => {
    const the_category = info && info.category;
    const filteredPosts = posts.filter(
      (post) => post.category === the_category
    );

    const firstThreeSimilarPosts = filteredPosts.slice(0, 3);

    setSimilarPosts(firstThreeSimilarPosts);
  }, [info?.category]);

  const [formattedDateUpdatedAt, setFormattedDateUpdatedAt] = useState("");
  const [formattedDateCreatedAt, setFormattedDateCreatedAt] = useState("");

  useEffect(() => {
    const dateString = info?.updatedAt;
    const formattedDate = formatDate(dateString);
    setFormattedDateUpdatedAt(formattedDate);
  }, []);
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

  // lang
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

  return (
    <div className="container mx-auto mt-16 px-2">
      <div className="lg:ms-[80px]">
        <p className="text-[#2A398C] font-semibold capitalize">
          {t(info?.category)}
        </p>
        <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
          <h1 className="mb-2 font-bold text-2xl">{t(info?.title)}</h1>
        </BoxReveal>
        <p className="text-[#9590C8] mb-5">
          {`${info?.views} Views | Published On: ${formattedDateCreatedAt} - Last Updated: ${formattedDateUpdatedAt}`}
        </p>
      </div>
      <div>
        {/* content */}
        <div>
          <div className="flex lg:flex-row flex-col gap-4">
            {/* icons */}
            <div className="flex lg:flex-col justify-center gap-3 items-center text-primary">
              <a
                href="https://www.tiktok.com"
                target="_blank"
                className="flex lg:w-11 w-9 lg:h-11 h-9 justify-center rounded-full border gap-1 items-center lg:text-2xl text-xl text-main_color hover:text-secondary_color transition"
                aria-label="tik tok"
                title="tik tok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="flex lg:w-11 w-9 lg:h-11 h-9 justify-center rounded-full border gap-1 items-center lg:text-2xl text-xl text-main_color hover:text-secondary_color transition"
                aria-label="facebook"
                title="facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                className="flex lg:w-11 w-9 lg:h-11 h-9 justify-center rounded-full border gap-1 items-center lg:text-2xl text-xl text-main_color hover:text-secondary_color transition"
                aria-label="X"
                title="X"
              >
                <RiTwitterXFill />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="flex lg:w-11 w-9 lg:h-11 h-9 justify-center rounded-full border gap-1 items-center lg:text-2xl text-xl text-main_color hover:text-secondary_color transition"
                aria-label="linkedin"
                title="linkedin"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="flex lg:w-11 w-9 lg:h-11 h-9 justify-center rounded-full border gap-1 items-center lg:text-2xl text-xl text-main_color hover:text-secondary_color transition"
                aria-label="instagram"
                title="instagram"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="flex-1">
              <img
                src={`${domain}/${info?.img}`}
                width="600"
                height="600"
                alt={`${info?.title} ${info?.category}`}
                className="rounded-lg w-auto h-full max-h-[600px] object-cover"
              />
            </div>
          </div>
          <div
            className="lg:ms-[80px] mt-11"
            dangerouslySetInnerHTML={{
              __html: language && content,
            }}
          ></div>
        </div>
        {/* joush */}
        {/* <div>
          <img
            src="/images/josh-happy-light.webp"
            alt="josh happy"
            className="lg:w-[150px] md:w-[120px] w-[100px] mx-auto fixed -right-14 lg:top-72 top-28 transform -rotate-45"
          />
        </div> */}

        {/* Similar Posts */}
        <div className="flex flex-col justify-center items-center mb-5 mt-16">
          <h1 className="text-xl capitalize">{t("similar-articles")}</h1>
          <div className="flex flex-wrap gap-5 mt-5 justify-center">
            {similarPosts &&
              similarPosts.map((post, index) => (
                <Card key={index} info={post} domain={domain} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
