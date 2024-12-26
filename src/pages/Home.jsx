import Header from "./Home/Header";
import M_Home_SectionOne from "../components/M_Home_SectionOne";
import M_Home_SectionTwo from "@/components/M_Home_SectionTwo";
import M_Home_SectionThree from "@/components/M_Home_SectionThree";
import M_Home_Technologies from "@/components/M_Home_Technologies";
import M_Home_Technologies_Two from "@/components/M_Home_Technologies_Two";
import M_Work_With from "@/components/M_components/M_Work_With";
import Blog_Intro from "./Blog/components/Blog_Intro";
import MainButton from "@/components/MainButton";
import { Link } from "react-router-dom";
import SendARequest from "@/components/SendARequest";
import {
  useTranslation,
  FaWhatsapp,
  MdOutlineAlternateEmail,
} from "@/utils/Imports";




export default function Home({ services, portfolio, domain }) {
  const { t } = useTranslation();

  return (
    <div className="px-2">
      <Header />
      <M_Home_SectionOne />
      <M_Home_SectionTwo services={services} domain={domain} />
      <M_Home_SectionThree portfolio={portfolio} domain={domain} />
      <M_Home_Technologies />
      <M_Home_Technologies_Two />
      <div className="mb-14">
        <M_Work_With />
      </div>
      <Blog_Intro domain={domain} />
      <Link to="/blog" className="w-fit flex justify-center items-center  lg:text-start mx-auto container text-center mb-14">
        <MainButton text="read-more" />
      </Link>
      <div className="container mx-auto">
        <SendARequest t={t} />
      </div>

      {/*  */}
      {/*  */}
      <div className="fixed bottom-4 right-2 flex flex-col gap-5 z-50">
        <div className="relative flex h-full w-full flex-col rounded-full items-center justify-center overflow-hidden border bg-background md:shadow-xl">
          <a
            aria-label="whatsapp"
            target="_blank"
            href="https://wa.me/+966500473509"
            className="pulse bg-[#25d366] rounded-full p-2 text-white"
          >
            <FaWhatsapp className="text-3xl " />
          </a>
        </div>

        <div className="relative flex h-full w-full flex-col rounded-full items-center justify-center overflow-hidden border bg-background md:shadow-xl">
          <a
            aria-label="mail"
            href="mailto:manarahalabtkar@gmail.com"
            className="pulse bg-secondary_color rounded-full p-2 text-white"
          >
            <MdOutlineAlternateEmail className="text-3xl " />
          </a>
        </div>
      </div>
    </div>
  );
}
