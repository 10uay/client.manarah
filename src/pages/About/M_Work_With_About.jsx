import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";

const reviews_One = [
  {
    img: "/images/Work_With_1.webp",
  },
  {
    img: "/images/Work_With_2.webp",
  },
  {
    img: "/images/Work_With_3.webp",
  },
  {
    img: "/images/Work_With_4.webp",
  },
  {
    img: "/images/Work_With_9.webp",
  },
  {
    img: "/images/Work_With_10.webp",
  },
  {
    img: "/images/Work_With_11.webp",
  },
  {
    img: "/images/Work_With_12.webp",
  },
  {
    img: "/images/Work_With_1.webp",
  },
  {
    img: "/images/Work_With_2.webp",
  },
  {
    img: "/images/Work_With_3.webp",
  },
  {
    img: "/images/Work_With_4.webp",
  },
  {
    img: "/images/Work_With_9.webp",
  },
  {
    img: "/images/Work_With_10.webp",
  },
  {
    img: "/images/Work_With_11.webp",
  },
  {
    img: "/images/Work_With_12.webp",
  },
  {
    img: "/images/Work_With_1.webp",
  },
  {
    img: "/images/Work_With_2.webp",
  },
  {
    img: "/images/Work_With_3.webp",
  },
  {
    img: "/images/Work_With_4.webp",
  },
  {
    img: "/images/Work_With_9.webp",
  },
  {
    img: "/images/Work_With_10.webp",
  },
  {
    img: "/images/Work_With_11.webp",
  },
  {
    img: "/images/Work_With_12.webp",
  },
  {
    img: "/images/Work_With_1.webp",
  },
  {
    img: "/images/Work_With_2.webp",
  },
  {
    img: "/images/Work_With_3.webp",
  },
  {
    img: "/images/Work_With_4.webp",
  },
  {
    img: "/images/Work_With_9.webp",
  },
  {
    img: "/images/Work_With_10.webp",
  },
  {
    img: "/images/Work_With_11.webp",
  },
  {
    img: "/images/Work_With_12.webp",
  },
];
const reviews_Two = [
  {
    img: "/images/Work_With_14.webp",
  },
  {
    img: "/images/Work_With_17.webp",
  },
  {
    img: "/images/Work_With_18.webp",
  },
  {
    img: "/images/Work_With_19.webp",
  },
  {
    img: "/images/Work_With_26.webp",
  },
  {
    img: "/images/Work_With_21.webp",
  },
  {
    img: "/images/Work_With_22.webp",
  },
  {
    img: "/images/Work_With_25.webp",
  },
  {
    img: "/images/Work_With_14.webp",
  },
  {
    img: "/images/Work_With_17.webp",
  },
  {
    img: "/images/Work_With_18.webp",
  },
  {
    img: "/images/Work_With_19.webp",
  },
  {
    img: "/images/Work_With_26.webp",
  },
  {
    img: "/images/Work_With_21.webp",
  },
  {
    img: "/images/Work_With_22.webp",
  },
  {
    img: "/images/Work_With_25.webp",
  },
  {
    img: "/images/Work_With_14.webp",
  },
  {
    img: "/images/Work_With_17.webp",
  },
  {
    img: "/images/Work_With_18.webp",
  },
  {
    img: "/images/Work_With_19.webp",
  },
  {
    img: "/images/Work_With_26.webp",
  },
  {
    img: "/images/Work_With_21.webp",
  },
  {
    img: "/images/Work_With_22.webp",
  },
  {
    img: "/images/Work_With_25.webp",
  },
  {
    img: "/images/Work_With_14.webp",
  },
  {
    img: "/images/Work_With_17.webp",
  },
  {
    img: "/images/Work_With_18.webp",
  },
  {
    img: "/images/Work_With_19.webp",
  },
  {
    img: "/images/Work_With_26.webp",
  },
  {
    img: "/images/Work_With_21.webp",
  },
  {
    img: "/images/Work_With_22.webp",
  },
  {
    img: "/images/Work_With_25.webp",
  },
];

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex justify-center items-center h-full">
        <img
          className="block mx-auto w-40 bg-contain"
          width="40"
          height="40"
          alt="company we worked with"
          src={img}
        />
      </div>
    </figure>
  );
};

const firstRow = reviews_One.slice(0, reviews_One.length / 2);
const secondRow = reviews_Two.slice(reviews_Two.length / 2);

export default function M_Work_With_About() {
  const { t } = useTranslation();

  return (
    <div className="mb-20">
      <div className="my-10 px-2 container mx-auto">
        <h2 className="my-5 text-4xl lg:text-5xl lg:leading-[3.7rem] text-text font-bold leading-[2.8rem] max-w-[450px]">
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            {t("about-work-with-title")}
          </BoxReveal>
        </h2>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 md:gap-8 lg:gap-12 overflow-hidden min-h-fit items-center">
        <div className="relative flex h-fit w-full flex-col items-center justify-center bg-main_color shadow-2xl transform translate-x-[-1900px]">
          <Marquee pauseOnHover className="[--duration:35s]">
            {firstRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:35s]">
            {secondRow.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </div>
  );
}
