import { useTranslation } from "@/utils/Imports";

export default function Portfolio_Section({ info }) {
  const { t } = useTranslation();

  return (
    <div className="bg-[url(/public/images/background.webp)] bg-cover px-3 overflow-hidden">
      <div className="container mx-auto py-11">
        <h2 className="mb-12 text-3xl lg:text-4xl font-bold capitalize">
          {t("some-facts-about")}
          <span className="text-[#339989] block">{t(info?.title)}</span>
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3">
          <div className="text-center leading-10 mb-5">
            <h3 className="font-bold text-3xl">
              {info?.portfolio_section?.found_in}
            </h3>
            <p className="text-[#737195]">{t("founded-in")}</p>
          </div>
          <div className="text-center leading-10 mb-5">
            <h3 className="font-bold text-3xl">{t(info?.region?.name)}</h3>
            <p className="text-[#737195]">{t("location")}</p>
          </div>
          <div className="text-center leading-10 mb-5">
            <h3 className="font-bold text-3xl">{info?.downloads}.000</h3>
            <p className="text-[#737195]">{t("downloads")}</p>
          </div>
          <div className="text-center leading-10 mb-5">
            <h3 className="font-bold text-3xl">
              {info?.portfolio_section?.ratings}
            </h3>
            <p className="text-[#737195]">{t("ratings")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
