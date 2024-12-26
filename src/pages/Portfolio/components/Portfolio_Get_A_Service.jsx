import WhatsAppButton from "@/components/WhatsAppButton";
import { useTranslation } from "@/utils/Imports";
import { useEffect, useState } from "react";
import './Portfolio_Get_A_Service.css'
export default function Portfolio_Get_A_Service() {
  const { t, i18n } = useTranslation();
  const [dir, setDir] = useState('ltr')

  useEffect(() => {
    setDir(i18n.dir());
    // console.log(dir);
  }, [i18n.dir()]);

  return (
    <div className="container mx-auto rounded-2xl bg-[url(/images/background.webp)] bg-cover bg-no-repeat p-7 lg:pe-14 mb-20">
      <div
        className={`container grid grid-cols-3 bg-[url(/images/black-logo.png)] bg-no-repeat ${
          dir === "rtl" ? "lg:bg-left" : "lg:bg-right"
        } bg-contain py-[90px] Portfolio_Get_A_Service`}
        style={{ backgroundSize: "300px 315px" }} // Adjust size as needed
      >
        <div className="xl:col-span-2 lg:col-span-2 md:col-span-3 col-span-3 m-auto text-center">
          <h2 className="text-4xl leading-[2.2rem] lg:text-5xl font-bold mb-3 lg:leading-[3.5rem] text-text">
            {t("get-your-business")}
          </h2>
          <div className="flex mt-8 justify-center">
            <WhatsAppButton text="get-started" />
          </div>
        </div>
      </div>
    </div>
  );
}
