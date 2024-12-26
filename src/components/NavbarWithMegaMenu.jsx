import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect, Link, PropTypes } from "../utils/Imports";
import UpNavbar from "./UpNavbar";
import WhatsAppButton from "./WhatsAppButton";

const services_categories = [
  "design-&-devlopment",
  "hosting-services",
  "digital-marketing-services",
  "additional-services",
];

const solutions_categories = [
  "e-commerce-solution",
  "pickup-solutions",
  "ride-hailing-solutions",
  "social-media-solutions",
];

const systems_categories = ["comprehensive-business-systems"];

function NavListMenu({ t, sectionListMenuItems, name, setOpenNav, domain }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories =
    name === "navbar-services"
      ? services_categories
      : name === "navbar-solutions"
      ? solutions_categories
      : name === "navbar-systems"
      ? systems_categories
      : null;

  const renderItems =
    categories?.map((SSS_category, categoryIndex) => (
      <div key={categoryIndex} className="lg:mb-0 mb-6">
        <div className="text-2xl text-black font-bold capitalize p-3 mb-0">
          {t(SSS_category)}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-0">
          {sectionListMenuItems &&
            [...sectionListMenuItems].map(
              (
                { classification, category, title_in_nav, icon_in_nav, path },
                itemIndex
              ) =>
                SSS_category === category && (
                  <MenuItem
                    className="rounded-lg"
                    key={`${categoryIndex}-${itemIndex}`}
                    title={t(name)}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMenuOpen(false);
                      setOpenNav(false);
                    }}
                  >
                    <Link
                      to={`/${classification}/${path}`}
                      className="flex items-center gap-3"
                    >
                      <div className="flex items-center justify-center rounded-lg !bg-gray-100 ">
                        {icon_in_nav && (
                          <img
                            src={`${domain}/${icon_in_nav}`}
                            alt={title_in_nav}
                            width="32px"
                            height="32px"
                            className="!h-8 !w-8 text-black "
                          />
                        )}
                      </div>
                      <div className="text-gray-700 hover:text-black ">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="flex items-center text-[17px] text-nowrap"
                        >
                          {t(title_in_nav)}
                        </Typography>
                      </div>
                    </Link>
                  </MenuItem>
                )
            )}
        </div>
      </div>
    )) || null;

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {t(name)}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <div className="grid grid-cols-1 gap-y-8 outline-none outline-0">
            {renderItems}
          </div>
        </MenuList>
      </Menu>
      <div className="block lg:hidden px-2">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({ t, services, solutions, systems, setOpenNav, domain }) {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="span"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/">
          <ListItem
            className="flex items-center gap-2 py-2 pr-4"
            onClick={() => setOpenNav(false)}
          >
            {t("navbar-home")}
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="span"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/about">
          <ListItem
            className="flex items-center gap-2 py-2 pr-4"
            onClick={() => setOpenNav(false)}
          >
            {t("navbar-about")}
          </ListItem>
        </Link>
      </Typography>

      {/* Services List Menu */}
      <NavListMenu
        t={t}
        sectionListMenuItems={services}
        name="navbar-services"
        setOpenNav={setOpenNav}
        domain={domain}
      />
      {/* solutions List Menu */}
      <NavListMenu
        t={t}
        sectionListMenuItems={solutions}
        name="navbar-solutions"
        setOpenNav={setOpenNav}
        domain={domain}
      />
      {/* systems List Menu */}
      <NavListMenu
        t={t}
        sectionListMenuItems={systems}
        name="navbar-systems"
        setOpenNav={setOpenNav}
        domain={domain}
      />

      <Typography
        as="span"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/portfolio">
          <ListItem
            className="flex items-center gap-2 py-2 pr-4"
            onClick={() => setOpenNav(false)}
          >
            {t("navbar-portfolio")}
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="span"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/blog">
          <ListItem
            className="flex items-center gap-2 py-2 pr-4"
            onClick={() => setOpenNav(false)}
          >
            {t("navbar-blog")}
          </ListItem>
        </Link>
      </Typography>
      <Link to="/contact-us">
        <Typography
          as="span"
          variant="small"
          color="blue-gray"
          className="font-medium"
        >
          <ListItem
            className="flex items-center gap-2 py-2 pr-4"
            onClick={() => setOpenNav(false)}
          >
            {t("navbar-contact")}
          </ListItem>
        </Typography>
      </Link>
    </List>
  );
}

// prop types validation
NavListMenu.propTypes = {
  t: PropTypes.func.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      classification: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title_in_nav: PropTypes.string.isRequired,
      icon_in_nav: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ),
  solutions: PropTypes.arrayOf(
    PropTypes.shape({
      classification: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title_in_nav: PropTypes.string.isRequired,
      icon_in_nav: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ),
  systems: PropTypes.arrayOf(
    PropTypes.shape({
      classification: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title_in_nav: PropTypes.string.isRequired,
      icon_in_nav: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ),
  sectionListMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      classification: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title_in_nav: PropTypes.string.isRequired,
      icon_in_nav: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  setOpenNav: PropTypes.func.isRequired,
  domain: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
NavList.propTypes = {
  t: PropTypes.func.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      classification: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title_in_nav: PropTypes.string.isRequired,
      icon_in_nav: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ),
  solutions: PropTypes.arrayOf(
    PropTypes.shape({
      classification: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title_in_nav: PropTypes.string.isRequired,
      icon_in_nav: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ),
  systems: PropTypes.arrayOf(
    PropTypes.shape({
      classification: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title_in_nav: PropTypes.string.isRequired,
      icon_in_nav: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ),
  setOpenNav: PropTypes.func.isRequired,
  domain: PropTypes.string.isRequired,
};
NavbarWithMegaMenu.propTypes = {
  t: PropTypes.func.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      classification: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title_in_nav: PropTypes.string.isRequired,
      icon_in_nav: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ),
  solutions: PropTypes.arrayOf(
    PropTypes.shape({
      classification: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title_in_nav: PropTypes.string.isRequired,
      icon_in_nav: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ),
  systems: PropTypes.arrayOf(
    PropTypes.shape({
      classification: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      title_in_nav: PropTypes.string.isRequired,
      icon_in_nav: PropTypes.string,
      path: PropTypes.string.isRequired,
    })
  ),
  domain: PropTypes.string.isRequired,
};

export default function NavbarWithMegaMenu({
  t,
  services,
  solutions,
  systems,
  domain,
}) {
  // console.log(services);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:mb-2 mb-1">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography variant="h6" className="mr-4 cursor-pointer lg:ml-2">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="manarah alabtkar"
              className="lg:w-10 w-8"
            />
          </Link>
        </Typography>
        <div className="hidden lg:block">
          <NavList
            t={t}
            services={services}
            solutions={solutions}
            systems={systems}
            setOpenNav={setOpenNav}
            domain={domain}
          />
        </div>
        <div className="hidden gap-2 lg:flex">
          <WhatsAppButton t={t} text="get-a-Quote" />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList
          t={t}
          services={services}
          solutions={solutions}
          systems={systems}
          domain={domain}
          setOpenNav={setOpenNav}
        />
        <div className="mb-6 md:mb-0">
          <UpNavbar hide={false} />
        </div>
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <WhatsAppButton text="get-a-Quote" />
        </div>
      </Collapse>
    </Navbar>
  );
}
