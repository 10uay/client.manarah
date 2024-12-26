import { useTranslation, Link } from "@/utils/Imports";


export default function PageNotFound() {
  const { t } = useTranslation();

  return (
    <div className="h-[90vh] bg-white items-center flex justify-center px-5 lg:px-0">
      <div className="w-[415px] text-center flex-col items-center justify-center mx-auto gap-[100px]">
        <div className="mb-8 md:mb-[56px]">
          <div className="max-w-[412px] w-full h-[160px] relative flex justify-center items-center mx-auto">
            <img src="/images/page_not_found.png" alt="404" />
          </div>
        </div>
        <div>
          <h3 className="text-4xl md:text-[56px] leading-[64px] text-[#1A1C16]">
            {t("page-not-found")}
          </h3>
        </div>
        <div className="flex flex-col gap-6 mt-3">
          <div className="text-center">
            <p className="text-base leading-6 tracking-wider font-sans">
              {t("the-page-you-are-looking-for-might-have-been-removed")}
            </p>
          </div>
          <div>
            <Link to='/'>
              <button className="bg-main_color text-white font-sans max-w-[146px] w-full h-[48px] rounded-[100px] font-medium text-sm">
                {t("home-page")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
