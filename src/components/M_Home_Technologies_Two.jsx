import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { useTranslation } from "@/utils/Imports";
import BoxReveal from "@/components/magicui/box-reveal";

const reviews_One = [
  "/images/XSq9xzSsKTf2XrenDGwpNukk49pOnNFpuiGJTMYh.webp",
  "/images/hiYpt6UaoGbXwlBVZ2JZMhfoFjIZzNoaMccbEsAs.jpg",
  "/images/xwGVX1p0h4GKvAd1GpPDLWnD7vGh1z2Lo9XJu2PC.png",
  "/images/Z8vkIzOS7qkZA3klHyDz0k45Fb690rqTMoTnr6Nn.jpg",
];

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15] dark:bg-white"
      )}
    >
      <div className="flex justify-center items-center h-full">
        <img
          className="block mx-auto text-6xl  bg-contain"
          // width="40"
          // height="40"
          alt="company we worked with"
          src={img}
        />
      </div>
    </figure>
  );
};

export default function M_Home_Technologies_Two() {
  const { t } = useTranslation();

  return (
    <div className="mb-14">
      <div className=" container mx-auto px-3 mb-4 mt-8">
        <h2 className="text-3xl lg:text-4xl font-bold capitalize leading-[2.8rem] lg:leading-[3.7rem] ">
          <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
            {t("We-are-certificated-in")}
          </BoxReveal>
        </h2>
      </div>
      <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden bg-transparent">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews_One?.map((img, index) => (
            <ReviewCard key={index} img={img} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
