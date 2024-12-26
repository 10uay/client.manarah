import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { useTranslation } from "@/utils/Imports";

// const reviews_One = [
//   {
//     img: "/images/mULJ7PFnQxn7mdFjyj5CWf6uVYi1XLgnx4CeTC8A.webp",
//   },
//   {
//     img: "/images/mULJ7PFnQxn7mdFjyj5CWf6uVYi1XLgnx4CeTC8A.webp",
//   },
//   {
//     img: "/images/mULJ7PFnQxn7mdFjyj5CWf6uVYi1XLgnx4CeTC8A.webp",
//   },
//   {
//     img: "/images/mULJ7PFnQxn7mdFjyj5CWf6uVYi1XLgnx4CeTC8A.webp",
//   },
//   {
//     img: "/images/mULJ7PFnQxn7mdFjyj5CWf6uVYi1XLgnx4CeTC8A.webp",
//   },
//   {
//     img: "/images/mULJ7PFnQxn7mdFjyj5CWf6uVYi1XLgnx4CeTC8A.webp",
//   },
// ];

const ReviewCard = ({ img, domain }) => {
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
          src={`${domain}/${img}`}
          className="block mx-auto w-24 h-24 bg-contain"
          width="40"
          height="40"
          alt="company we worked with"
        />
      </div>
    </figure>
  );
};

export default function Technologies({ info, domain }) {
  const firstRow = info?.technologies?.icons.slice(
    0,
    info?.technologies?.icons.length
  );
  const { t } = useTranslation();

  return (
    <div className="">
      <div className=" container mx-auto px-3">
        <h2 className="text-3xl lg:text-4xl font-bold capitalize leading-[2.8rem] lg:leading-[3.7rem] ">
          {t(info?.technologies?.title)}
        </h2>
        <p className="max-w-[500px] text-md mb-5 mt-2">
          {t(info?.technologies?.para)}
        </p>
      </div>
      <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden bg-transparent">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow?.map((img, index) => (
            <ReviewCard key={index} img={img} domain={domain} />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}
