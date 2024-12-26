import M_About_SectionThree from "@/components/M_About_SectionThree";
import M_About_SectionTwo from "@/components/M_About_SectionTwo";
import M_Home_SectionOne from "@/components/M_Home_SectionOne";
import M_Home_Technologies_Two from "@/components/M_Home_Technologies_Two";
import M_Work_With_About from "./M_Work_With_About";
import Why_Do_You_Choose_Us from "./Why_Do_You_Choose_Us";
import M_Home_SectionTwo from "@/components/M_Home_SectionTwo";
import Contact_us_Intro from "../Contact-us/Contact_us_Intro";
import Contact_us_locations from "../Contact-us/Contact_us_locations";

export default function About({ services, domain, t }) {
  return (
    <div className="px-2">
      <M_Home_SectionOne />
      <M_About_SectionTwo />
      <M_Home_Technologies_Two domain={domain} />
      <div className="mt-32">
        <M_About_SectionThree />
      </div>
      <div className="my-12">
        <M_Work_With_About />
      </div>
      <Why_Do_You_Choose_Us />
      <M_Home_SectionTwo services={services} domain={domain} />
      <Contact_us_Intro t={t} />
      <Contact_us_locations t={t} />
    </div>
  );
}
