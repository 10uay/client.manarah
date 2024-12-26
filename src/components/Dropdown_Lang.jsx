import React, { useState } from "react";
import { Dropdown } from "flowbite-react"; // Assuming you've imported this correctly
import { useTranslation } from "@/utils/Imports"; // Adjust the import path as needed
import "./Dropdown_Lang.css";
import Cookies from "js-cookie";

const languageLabels = {
  en: "English",
  ar: "العربية",
  de: "Deutsche",
  // Add more languages here if needed
};

const Dropdown_Lang = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(Cookies.get("i18next") || "en");

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="text-main_color me-5 Dropdown_Lang">
      <Dropdown label="Language" inline>
        {Object.keys(languageLabels).map(
          (langCode) =>
            // Only show options for languages other than the current one
            langCode !== language && (
              <Dropdown.Item
                key={langCode}
                onClick={() => handleChangeLanguage(langCode)}
              >
                {languageLabels[langCode]}
              </Dropdown.Item>
            )
        )}
      </Dropdown>
    </div>
  );
};

export default Dropdown_Lang;
