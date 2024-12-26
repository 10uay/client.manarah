import { useTranslation } from "@/utils/Imports";

export default function M_Additional_Section({ info }) {
  const { t } = useTranslation();

  return (
    <div
      className={`mb-11 md:mb-20 relative container mx-auto bg-[${info?.bg_color}] rounded-[4rem]`}
    >
      <div className="relative px-5 md:px-10 w-full z-10 flex justify-center lg:justify-between flex-wrap gap-5 items-center">
        <div className="rounded-[3rem]">
          <img
            src={info?.img}
            width="450"
            height="521"
            alt='Discover a New World of Connection and Creativity with the Amazing Social Media App!"'
            sizes="(max-width: 768px) 400px, 500px"
            className="max-h-[595px] mx-auto !object-contain rounded-[3rem] scale-105"
          />
        </div>
        <div className="space-y-5 w-full lg:flex-1 py-11 lg:text-start text-center">
          <h2 className="text-2xl md:text-3xl lg:leading-[2.8rem] text-white font-bold md:leading-[2.5rem] capitalize">
            {t(info?.title)}
          </h2>
          <div className="text-white">{t(info?.para)}</div>
        </div>
      </div>
    </div>
  );
}
