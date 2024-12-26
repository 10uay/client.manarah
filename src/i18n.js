import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import HttpBackend from "i18next-http-backend";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const domain = "https://api.manarah-alabtkar.com";
  // const domain = "http://localhost:3000";


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .use(HttpBackend)
  .init({
    // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
    supportedLngs: ["en", "ar", "de"],
    // fallbackLng: "en", // Default language
    detection: {
      order: [
        "cookie",
        "localStorage",
        "sessionStorage",
        "htmlTag",
        "querystring",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie", "localStorage"],
    },
    backend: {
      // loadPath: "/locale/{{lng}}/translation.json",
      loadPath: `${domain}/locales/{{lng}}/translation.json`, // URL to fetch translations
      
    },
    // ns: ["translation"], // Add this line to set the default namespace
    // defaultNS: "translation", // Add this line to set the default namespace
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
