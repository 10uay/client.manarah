import { Link, useLocation, useEffect, useTranslation } from "@/utils/Imports";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="mx-auto w-full overflow-hidden mt-16">
      <div className="footer_section bg-third px-1">
        <div className=" py-16 lg:py-14 px-2 border-main_color border-2">
          <div className="grid grid-cols-3 gap-5 container mx-auto">
            {/* logo */}
            <div className="about_section flex items-center justify-center mx-auto lg:mx-0">
              <div className="mb-3 ">
                <Link to="/">
                  <img
                    format="png"
                    src="/images/logo.png"
                    alt="manarah Al-Abtkar"
                    className="w-52"
                  />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 col-span-3 lg:col-span-2 xl:col-span-1 lg:text-start text-center gap-5">
              <div className="access_links">
                <h3 className="top_title !text-main_color">
                  {t("quick-access")}
                </h3>
                <ul className="space-y-3">
                  <li className="capitalize">
                    <Link
                      to="/services/web-development"
                      aria-label="Web development"
                    >
                      {t("services-web-development-title-in-nav")}
                    </Link>
                  </li>
                  <li className="capitalize">
                    <Link
                      to="/services/digital-marketing"
                      aria-label="Digital Marketing"
                    >
                      {t(
                        "services-digital-marketing-services-digital-marketing-title-in-nav"
                      )}
                    </Link>
                  </li>
                  <li className="capitalize">
                    <Link
                      to="/services/cloud-hosting"
                      aria-label="cloud hosting"
                    >
                      {t("services-cloud-services-cloud-hosting-title-in-nav")}
                    </Link>
                  </li>
                  <li className="capitalize">
                    <Link
                      to="/services/technical-analysis"
                      aria-label="technical analysis"
                    >
                      {t(
                        "services-additional-services-technical-analysis-title-in-nav"
                      )}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="access_links">
                <h3 className="top_title !text-main_color">
                  {t("main-links")}
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/about"
                      className="router-link-exact-active"
                      title="About"
                      aria-current="page"
                    >
                      {t("navbar-about")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/portfolio" title="Portfolio">
                      {t("navbar-portfolio")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us" title="Contact">
                      {t("navbar-contact")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" title="Blog">
                      {t("navbar-blog")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-3 lg:col-span-1 lg:text-start text-center mt-10 lg:mt-0 ">
              <h3 className="top_title !text-main_color">
                {t("subscribe-for-latest-updates")}
              </h3>
              <p>{t("make-the-right-business-move")}</p>
              <div>
                <form className="my-4">
                  <div className="flex items-center w-full subscribe_form border-2">
                    <div className="input_wrapper flex-1 py-2">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder={t("your-email-address")}
                        className="font-light border-[#D7DAEA] w-[250px] rounded-xl !outline-none !border-none ml-3"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-[120px] rounded-full text-white px-4 !bg-main_color hidden lg:block"
                    >
                      {t("subscribe")}
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-[120px] rounded-full text-white px-4 !bg-main_color block lg:hidden py-4 mx-auto mt-3"
                  >
                    {t("subscribe")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
