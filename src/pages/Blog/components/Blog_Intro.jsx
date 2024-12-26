import { Carousel } from "@trendyol-js/react-carousel";
import {
  useEffect,
  useRef,
  useState,
  useTranslation,
  forwardRef,
  Link,
} from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";
import Card from "./Card";
import { motion } from "@/utils/framer_motion_vars";
// import { useSelector } from "react-redux";
import useFetchBlog from "@/utils/custom-hook/useFetchBlog";

const Blog_Intro_Forwarded = (props, ref) => {
  const { domain } = props; // Access domain from props
  const { blog } = useFetchBlog(domain);

  const carouselRef = ref  // Use forwarded ref or fallback ref
  const { t } = useTranslation();
  const [number_of_cards, setNumber_of_cards] = useState(getShowValue());
  // const { posts } = useSelector((state) => state.posts);

  function getShowValue() {
    if (window.innerWidth < 720) {
      return 1;
    } else if (window.innerWidth < 1024) {
      return 2;
    } else {
      return 3;
    }
  }

  const sortedPostsCopy = blog && [...blog].sort((a, b) => b.views - a.views);
  const top3Posts = sortedPostsCopy.slice(0, 3); // Access the copy

  // console.log(top3Posts);

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
      if (carouselRef && carouselRef.current) {
        carouselRef.current.next();
      }
    };
    const interval = setInterval(scroll, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      // variants={container}
      // initial="hidden"
      // whileInView="show"
      // viewport={{ once: true }}
      className="lg:pt-20 lg:pb-0 pt-10 px-2 overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="space-y-2 mb-7 md:mb-8">
          <div className="text-sm lg:text-md font-bold mb-2">
            {t("blog-intro-be-update")}
          </div>
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            <h2 className="text-3xl lg:text-4xl lg:leading-[3.2rem] font-bold text-text max-w-[500px]">
              {t("What's-happening")}
            </h2>
          </BoxReveal>
        </div>
        {top3Posts.length > 0 && (
          <Carousel
            ref={carouselRef}
            show={number_of_cards && number_of_cards}
            slide={number_of_cards && number_of_cards}
            swiping={true}
            responsive={true}
            infinite={false}
            className="py-5 cursor-grab"
          >
            {top3Posts.map((postTop, index) => (
              <motion.div
                key={index}
                // variants={middleImage}
                className="mb-20 mt-2 md:mx-2 mx-auto w-fit"
              >
                <Link to={`/blog/${postTop.slug}`}>
                  <Card info={postTop} domain={domain} />
                </Link>
              </motion.div>
            ))}
          </Carousel>
        )}
      </div>
    </motion.div>
  );
};

const Blog_Intro = forwardRef(Blog_Intro_Forwarded);

export default Blog_Intro;
