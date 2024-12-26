import { useTranslation, Link, useState } from "@/utils/Imports";
import "./Portfolio_Pagination.css";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Pagination } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@aws-amplify/ui-react/styles/reset.layer.css"; // global CSS reset
import "@aws-amplify/ui-react/styles/base.layer.css"; // base styling needed for Amplify UI
import "@aws-amplify/ui-react/styles/button.layer.css"; // component specific styles
import BoxReveal from "@/components/magicui/box-reveal";

export default function Portfolio_Pagination({ portfolio, domain }) {
  const { t } = useTranslation();
  const totalPages = portfolio?.length / 3;
  const [currentPageIndex, setCurrentPageIndex] = useState(1);

  const handleNextPage = () => {
    setCurrentPageIndex(currentPageIndex + 1);
  };
  const handlePreviousPage = () => {
    setCurrentPageIndex(currentPageIndex - 1);
  };
  const handleOnChange = (newPageIndex) => {
    setCurrentPageIndex(newPageIndex);
  };

  return (
    <div
      className="container mx-auto py-5 px-3 md:py-11 overflow-hidden"
      id="portfolios_content"
    >
      {portfolio &&
        portfolio
          .slice((currentPageIndex - 1) * 3, currentPageIndex * 3)
          ?.map(
            (
              {
                title,
                para,
                downloads,
                platforms,
                region,
                technologies,
                path,
                main_img,
              },
              index
            ) => (
              <div className="project_card py-7 lg:py-11 last:pb-0" key={index}>
                <div className="project_card_content">
                  <div>
                    <img
                      src={`${domain}/${main_img}`}
                      width="500"
                      height="500"
                      alt="main image for work"
                      sizes="(max-width: 640px) 350px, (max-width: 1024px) 400px, 500px"
                      className="max-h-[500px] object-contain aspect-[3/4] animated wow zoomIn animated"
                    />
                  </div>
                  <div className="project_details">
                    <h3 className="animated wow fadeInUp animated mb-5">
                      <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
                        {t(title)}{" "}
                      </BoxReveal>
                    </h3>
                    <p className="animated wow fadeInUp animated mb-5">
                      {t(para)}
                    </p>
                    <div className="project__details animated wow fadeInUp animated">
                      <div className="grid grid-cols-2 gap-5 mb-4">
                        <div className="animated wow fadeInUp animated">
                          <h4>{t("downloads-word")}</h4>
                          <p>{`${downloads}k`}</p>
                        </div>
                        <div className="animated wow fadeInUp animated">
                          <h4>{t("region-word")}</h4>
                          <p>
                            <img
                              src={`${domain}/${region?.flag}`}
                              width="20"
                              height="20"
                              alt="Flag"
                              align="center"
                            />
                            {t(region?.name)}
                          </p>
                        </div>
                        <div className="col-span-2 md:col-span-1 animated wow fadeInUp animated">
                          <h4>
                            {t("platforms-word")}
                            <br />
                          </h4>
                          <p>{t(platforms)}</p>
                        </div>
                        <div className="animated wow fadeInUp animated">
                          <h4>
                            {t("technology-word")}
                            <br />
                          </h4>

                          <AvatarCircles
                            numPeople={2}
                            avatarUrls={technologies.icons}
                            domain={domain}
                          />
                        </div>
                      </div>
                      <Link
                        to={`/portfolio/${path}`}
                        className="mt-11 flex items-center text-primary font-medium text-lg gap-2 !text-main_color w-fit"
                        aria-label="More info"
                      >
                        {t("read-more")}
                        <FaArrowUpRightFromSquare className="!text-main_color" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}

      <div className="!mt-10">
        <Pagination
          currentPage={currentPageIndex}
          totalPages={totalPages}
          onNext={handleNextPage}
          onPrevious={handlePreviousPage}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
}
