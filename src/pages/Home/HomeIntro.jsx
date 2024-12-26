import "./HomeIntro.css";
import WhatsAppButton from "../../components/WhatsAppButton";
import { useTranslation } from "../../utils/Imports";
// import FlickeringGrid from "@/components/magicui/flickering-grid";

export default function HomeIntro() {
  const { t } = useTranslation();
  return (
    <div className="relative  rounded-lg w-full bg-background overflow-hidden ">
      <div data-v-81637d25="" className="home_intro text-center">
        <h1 data-v-81637d25="">
          {t("At-Al-Amanara-we-turn-your-ideas-nto-reality")}
        </h1>
        <p data-v-81637d25="">{t("Through-creativity-and-technology")}</p>
        <div data-v-81637d25="" className="home_intro_details">
          <div data-v-81637d25="">
            <WhatsAppButton text="contact-us" />
          </div>
        </div>
      </div>
    </div>
  );
}
