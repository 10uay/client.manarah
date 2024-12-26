import { useTranslation } from "@/utils/Imports";

export default function Portfolio_Hero({ info, domain }) {
  const { t } = useTranslation();

  return (
    <div className="portfolio-header px-3 ">
      <div className="grid container mx-auto grid-cols-1 gap-3 md:grid-cols-2 mt-10 relative z-20 items-start">
        <div className="lg:mb-5 md:mt-7">
          <h1 className="mb-5 text-4xl lg:text-5xl lg:leading-[3.7rem] text-text font-bold leading-[2.8rem] capitalize lg:text-start">
            <span className="text-[#339989]">{t(info?.title)}</span>
          </h1>
          <div className="text-[#737195] italic">{t(info?.para)}</div>
        </div>
        <div className="relative rounded-2xl mb-5 lg:mb-0 z-10">
          <img
            src={`${domain}/${info?.portfolio_hero?.secondary_img}`}
            width="500"
            height="500"
            alt="Al-Manarah"
            sizes="(max-width: 1024px) 300px, 500px"
            className="rounded-2xl object-cover mx-auto w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] lg:ms-auto"
          />
        </div>
      </div>
      <div className="relative container mx-auto z-20">
        <div className="grid md:grid-cols-2 gap-5 items-start">
          <div className="rounded-2xl order-2 md:order-1">
            <img
              src={`${domain}/${info?.main_img}`}
              width="450"
              height="500"
              alt="Al-Manarah"
              className="object-contain mx-auto md:ms-auto rounded-2xl md:-translate-y-36 relative"
            />
          </div>
          <div className="md:mt-11 order-1 md:order-2">
            <h2 className="mb-3 text-2xl lg:text-3xl font-bold capitalize">
              {t(info?.portfolio_hero?.secondary_title)}
            </h2>
            <p className="text-[#737195]">
              {t(info?.portfolio_hero?.secondary_para)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
