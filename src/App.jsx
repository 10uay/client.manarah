import Home from "./pages/Home";
import {
  cookies,
  useEffect,
  useTranslation,
} from "@/utils/Imports";
import UpNavbar from "./components/UpNavbar";
import i18n from "./i18n";
import NavbarWithMegaMenu from "./components/NavbarWithMegaMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact_us from "./pages/Contact_us";
import Solution from "./pages/Solutions/Solution";
import Service from "./pages/Services/Service";
import useFetchSolutions from "@/utils/custom-hook/useFetchSolutions";
import useFetchServices from "@/utils/custom-hook/useFetchServices";
import useFetchSystems from "@/utils/custom-hook/useFetchSystems";
import useFetchPortfolio from "@/utils/custom-hook/useFetchPortfolio";
import useFetchBlog from "@/utils/custom-hook/useFetchBlog";
import Portfolio from "./pages/Portfolio/Portfolio";
import Work from "./pages/Portfolio/Work";
import SSS_Dashboard from "./pages/Admin-Dashboard/SSS_Dashboard";
import Portfolio_Dashboard from "./pages/Admin-Dashboard/Portfolio_Dashboard";
import System from "./pages/systems/System";
import Blog_Dashboard from "./pages/Admin-Dashboard/Blog_Dashboard";
import Article from "./pages/Blog/Article";
import Blog from "./pages/Blog/Blog";
import { useDispatch } from "react-redux";
import { allPosts } from "@/redux/post/postsSlice";
import About from "./pages/About/About";
import Footer from "./pages/Footer";
import { Skeleton } from "primereact/skeleton";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import PageNotFound from "./pages/PageNotFound";

function App() {
  // const domain = "http://localhost:3000";
  const domain = "https://api.manarah-alabtkar.com";

  const { t } = useTranslation();
  const lang = cookies.get("i18next") || "en";
  const dispatch = useDispatch();

  const { solutions, loadingSolutions } = useFetchSolutions(domain);
  const { services, loadingServices } = useFetchServices(domain);
  const { systems, loadingSystems } = useFetchSystems(domain);
  const { portfolio, loadingPortfolio } = useFetchPortfolio(domain);
  const { blog, loadingBlog } = useFetchBlog(domain);
  // const { posts } = useSelector((state) => state.posts);
  if (blog) {
    dispatch(allPosts(blog));
  }

  useEffect(() => {
    window.document.dir = i18n.dir();
  }, [lang]);


  return (
    <>
      <BrowserRouter>
        {loadingSolutions ||
        loadingServices ||
        loadingSystems ||
        loadingPortfolio ||
        loadingBlog ? (
          <>
            <div className="card container mx-auto">
              <div className="border-round border-1 surface-border p-4 surface-card">
                <div className="w-full mb-16">
                  <Skeleton height="3rem"></Skeleton>
                </div>
                <div className="flex mb-3 justify-center">
                  <div>
                    <Skeleton width="10rem" className="mb-2"></Skeleton>
                    <Skeleton width="5rem" className="mb-2"></Skeleton>
                    <Skeleton height=".5rem"></Skeleton>
                  </div>
                </div>
                <Skeleton width="100%" height="200px"></Skeleton>
                <div className="flex justify-center mt-3">
                  <Skeleton width="8rem" height="2rem"></Skeleton>
                </div>
              </div>
            </div>

            <div className="card container mx-auto">
              <div className="border-round border-1 surface-border p-4 surface-card">
                <div className="flex justify-center mb-3">
                  <div>
                    <Skeleton width="10rem" className="mb-2"></Skeleton>
                    <Skeleton height="1.5rem"></Skeleton>
                  </div>
                </div>
                <Skeleton width="100%" height="100px"></Skeleton>
                <div className="flex justify-center mt-3">
                  <Skeleton
                    width="4rem"
                    height="2rem"
                    className="me-3"
                  ></Skeleton>
                  <Skeleton width="4rem" height="2rem"></Skeleton>
                </div>
                <div className="w-full mt-7">
                  <Skeleton height="10rem"></Skeleton>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <header>
              <UpNavbar hide={true} />
              <NavbarWithMegaMenu
                t={t}
                services={services}
                solutions={solutions}
                systems={systems}
                domain={domain}
              />
            </header>
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    services={services}
                    domain={domain}
                    portfolio={portfolio}
                  />
                }
              />
              <Route path="/contact-us" element={<Contact_us />} />

              <Route
                path="/about"
                element={<About services={services} domain={domain} t={t} />}
              />

              {/* services */}
              <Route path="/services">
                {services &&
                  services.map(({ path, data }, index) => (
                    <Route
                      path={path}
                      element={<Service data={data} domain={domain} />}
                      key={index}
                    />
                  ))}
              </Route>

              {/* solutions */}
              <Route path="/solutions">
                {solutions &&
                  solutions.map(({ path, data }, index) => (
                    <Route
                      path={path}
                      element={<Solution data={data} domain={domain} />}
                      key={index}
                    />
                  ))}
              </Route>

              {/* systems */}
              <Route path="/systems">
                {systems &&
                  systems.map(({ path, data }, index) => (
                    <Route
                      path={path}
                      element={<System data={data} domain={domain} />}
                      key={index}
                    />
                  ))}
              </Route>

              {/* portfolio */}
              <Route
                path="/portfolio"
                element={<Portfolio portfolio={portfolio} domain={domain} />}
              />
              <Route path="/portfolio">
                {portfolio &&
                  portfolio.map((work, index) => (
                    <Route
                      key={index}
                      path={work.path}
                      element={<Work info={work} domain={domain} />}
                    />
                  ))}
              </Route>

              {/* blog */}
              <Route path="/blog" element={<Blog domain={domain} />} />
              {blog && (
                <Route path="/blog">
                  {blog.map((article, index) => (
                    <Route
                      key={index}
                      path={article.slug}
                      element={<Article info={article} domain={domain} />}
                    />
                  ))}
                </Route>
              )}

              {/* dashboards */}
              <Route path="/admin-dashboard-H9S8FFPHG3WO94CYTVN39ONTY9W38TY983O">
                <Route
                  path="services-solutions-systems"
                  element={<SSS_Dashboard domain={domain} />}
                />
                <Route
                  path="portfolio"
                  element={<Portfolio_Dashboard domain={domain} />}
                />
                <Route
                  path="blog"
                  element={<Blog_Dashboard domain={domain} />}
                />
              </Route>

              {/* page not found */}
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
            {/* downFooter */}
            <p className="py-3 text-sm text-center text-white bg-main_color mt-2">
              © 2022 Manarah Al Abtkar. All Rights Reserved
            </p>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
