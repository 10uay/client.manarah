import {
  useEffect,
  useState,
  useRef,
  Label,
  Textarea,
  TextInput,
  CircularProgressbar,
  axios,
} from "@/utils/Imports";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import "react-circular-progressbar/dist/styles.css";

export default function Portfolio_Dashboard({ domain }) {
  //
  const [imagePercent, setImagePercent] = useState();
  const fileRef = useRef(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imageUploadError, setImageUploadError] = useState(false);
  //

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [translationEN, setTranslationEN] = useState({});
  const [translationAR, setTranslationAR] = useState({});
  const [translationDE, setTranslationDE] = useState({});

  // title
  const [translationTitleEN, setTranslationTitleEN] = useState({});
  const [translationTitleAR, setTranslationTitleAR] = useState({});
  const [translationTitleDE, setTranslationTitleDE] = useState({});

  // para
  const [translationParaEN, setTranslationParaEN] = useState({});
  const [translationParaAR, setTranslationParaAR] = useState({});
  const [translationParaDE, setTranslationParaDE] = useState({});

  // region name
  const [translationRegion_NameEN, setTranslationRegion_NameEN] = useState({});
  const [translationRegion_NameAR, setTranslationRegion_NameAR] = useState({});
  const [translationRegion_NameDE, setTranslationRegion_NameDE] = useState({});

  // platforms
  const [translationPlatformsEN, setTranslationPlatformsEN] = useState({});
  const [translationPlatformsAR, setTranslationPlatformsAR] = useState({});
  const [translationPlatformsDE, setTranslationPlatformsDE] = useState({});

  // portfolio_hero secondary_title
  const [
    translationPortfolio_hero_secondary_titleEN,
    setTranslationPortfolio_hero_secondary_titleEN,
  ] = useState({});
  const [
    translationPortfolio_hero_secondary_titleAR,
    setTranslationPortfolio_hero_secondary_titleAR,
  ] = useState({});
  const [
    translationPortfolio_hero_secondary_titleDE,
    setTranslationPortfolio_hero_secondary_titleDE,
  ] = useState({});

  // portfolio_hero secondary_para
  const [
    translationPortfolio_hero_secondary_paraEN,
    setTranslationPortfolio_hero_secondary_paraEN,
  ] = useState({});
  const [
    translationPortfolio_hero_secondary_paraAR,
    setTranslationPortfolio_hero_secondary_paraAR,
  ] = useState({});
  const [
    translationPortfolio_hero_secondary_paraDE,
    setTranslationPortfolio_hero_secondary_paraDE,
  ] = useState({});

  // Second_slider title
  const [
    translationSecond_slider_titleEN,
    setTranslationSecond_slider_titleEN,
  ] = useState({});
  const [
    translationSecond_slider_titleAR,
    setTranslationSecond_slider_titleAR,
  ] = useState({});
  const [
    translationSecond_slider_titleDE,
    setTranslationSecond_slider_titleDE,
  ] = useState({});

  // Second_slider para
  const [translationSecond_slider_paraEN, setTranslationSecond_slider_paraEN] =
    useState({});
  const [translationSecond_slider_paraAR, setTranslationSecond_slider_paraAR] =
    useState({});
  const [translationSecond_slider_paraDE, setTranslationSecond_slider_paraDE] =
    useState({});

  // Second slider features name one
  const [
    translationSecond_slider_features_name_oneEN,
    setTranslationSecond_slider_features_name_oneEN,
  ] = useState({});
  const [
    translationSecond_slider_features_name_oneAR,
    setTranslationSecond_slider_features_name_oneAR,
  ] = useState({});
  const [
    translationSecond_slider_features_name_oneDE,
    setTranslationSecond_slider_features_name_oneDE,
  ] = useState({});

  // Second slider features name two
  const [
    translationSecond_slider_features_name_twoEN,
    setTranslationSecond_slider_features_name_twoEN,
  ] = useState({});
  const [
    translationSecond_slider_features_name_twoAR,
    setTranslationSecond_slider_features_name_twoAR,
  ] = useState({});
  const [
    translationSecond_slider_features_name_twoDE,
    setTranslationSecond_slider_features_name_twoDE,
  ] = useState({});

  // Second slider features name three
  const [
    translationSecond_slider_features_name_threeEN,
    setTranslationSecond_slider_features_name_threeEN,
  ] = useState({});
  const [
    translationSecond_slider_features_name_threeAR,
    setTranslationSecond_slider_features_name_threeAR,
  ] = useState({});
  const [
    translationSecond_slider_features_name_threeDE,
    setTranslationSecond_slider_features_name_threeDE,
  ] = useState({});

  // Second slider features name four
  const [
    translationSecond_slider_features_name_fourEN,
    setTranslationSecond_slider_features_name_fourEN,
  ] = useState({});
  const [
    translationSecond_slider_features_name_fourAR,
    setTranslationSecond_slider_features_name_fourAR,
  ] = useState({});
  const [
    translationSecond_slider_features_name_fourDE,
    setTranslationSecond_slider_features_name_fourDE,
  ] = useState({});

  // First_slider title
  const [translationFirst_slider_titleEN, setTranslationFirst_slider_titleEN] =
    useState({});
  const [translationFirst_slider_titleAR, setTranslationFirst_slider_titleAR] =
    useState({});
  const [translationFirst_slider_titleDE, setTranslationFirst_slider_titleDE] =
    useState({});

  // First_slider para
  const [translationFirst_slider_paraEN, setTranslationFirst_slider_paraEN] =
    useState({});
  const [translationFirst_slider_paraAR, setTranslationFirst_slider_paraAR] =
    useState({});
  const [translationFirst_slider_paraDE, setTranslationFirst_slider_paraDE] =
    useState({});

  // First slider features name one
  const [
    translationFirst_slider_features_name_oneEN,
    setTranslationFirst_slider_features_name_oneEN,
  ] = useState({});
  const [
    translationFirst_slider_features_name_oneAR,
    setTranslationFirst_slider_features_name_oneAR,
  ] = useState({});
  const [
    translationFirst_slider_features_name_oneDE,
    setTranslationFirst_slider_features_name_oneDE,
  ] = useState({});

  // First slider features name two
  const [
    translationFirst_slider_features_name_twoEN,
    setTranslationFirst_slider_features_name_twoEN,
  ] = useState({});
  const [
    translationFirst_slider_features_name_twoAR,
    setTranslationFirst_slider_features_name_twoAR,
  ] = useState({});
  const [
    translationFirst_slider_features_name_twoDE,
    setTranslationFirst_slider_features_name_twoDE,
  ] = useState({});

  // First slider features name three
  const [
    translationFirst_slider_features_name_threeEN,
    setTranslationFirst_slider_features_name_threeEN,
  ] = useState({});
  const [
    translationFirst_slider_features_name_threeAR,
    setTranslationFirst_slider_features_name_threeAR,
  ] = useState({});
  const [
    translationFirst_slider_features_name_threeDE,
    setTranslationFirst_slider_features_name_threeDE,
  ] = useState({});

  // First slider features name four
  const [
    translationFirst_slider_features_name_fourEN,
    setTranslationFirst_slider_features_name_fourEN,
  ] = useState({});
  const [
    translationFirst_slider_features_name_fourAR,
    setTranslationFirst_slider_features_name_fourAR,
  ] = useState({});
  const [
    translationFirst_slider_features_name_fourDE,
    setTranslationFirst_slider_features_name_fourDE,
  ] = useState({});

  // technologies title
  const [translationTechnologies_titleEN, setTranslationTechnologies_titleEN] =
    useState({});
  const [translationTechnologies_titleAR, setTranslationTechnologies_titleAR] =
    useState({});
  const [translationTechnologies_titleDE, setTranslationTechnologies_titleDE] =
    useState({});
  // technologies para
  const [translationTechnologies_paraEN, setTranslationTechnologies_paraEN] =
    useState({});
  const [translationTechnologies_paraAR, setTranslationTechnologies_paraAR] =
    useState({});
  const [translationTechnologies_paraDE, setTranslationTechnologies_paraDE] =
    useState({});

  //
  // mian functions
  const handelObject = async () => {
    try {
      const response = await fetch(`${domain}/api/portfolio/upload-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });
      if (!response.ok) {
        throw new Error("Error uploading the file");
      }
      if (response.ok) {
        console.log("the Data in object has been sent");
      }
    } catch (error) {
      console.error("Error uploading the file (catch)", error);
    }
  };

  const [object, setObject] = useState({
    classification: "portfolio",
    title: "",
    para: "",
    main_img: "",
    downloads: 0,
    region: {
      name: "",
      flag: "",
    },
    platforms: "",
    path: "",
    portfolio_hero: {
      secondary_title: "",
      secondary_para: "",
      secondary_img: "",
    },
    first_slider: {
      title: "",
      para: "",
      features: [
        { name: "", icon: "" },
        { name: "", icon: "" },
        { name: "", icon: "" },
        { name: "", icon: "" },
      ],
      images: [],
    },
    portfolio_section: {
      ratings: 5,
      found_in: 2022,
    },
    second_slider: {
      title: "",
      para: "",
      features: [
        { name: "", icon: "" },
        { name: "", icon: "" },
        { name: "", icon: "" },
        { name: "", icon: "" },
      ],
      images: [],
    },
    technologies: {
      title: "",
      para: "",
      icons: [],
    },
  });

  console.log(object);

  const sanitizeTranslations = (translations) => {
    const sanitized = {};
    for (const key in translations) {
      if (key.trim() !== "") {
        sanitized[key] = translations[key];
      }
    }
    return sanitized;
  };

  useEffect(() => {
    const sanitizedTranslationEN = sanitizeTranslations({
      [object.title]: translationTitleEN,
      [object.para]: translationParaEN,
      [object.region.name]: translationRegion_NameEN,
      [object.platforms]: translationPlatformsEN,
      [object.portfolio_hero.secondary_title]:
        translationPortfolio_hero_secondary_titleEN,
      [object.portfolio_hero.secondary_para]:
        translationPortfolio_hero_secondary_paraEN,
      [object.first_slider.title]: translationFirst_slider_titleEN,
      [object.first_slider.para]: translationFirst_slider_paraEN,
      [object.first_slider.features[0].name]:
        translationFirst_slider_features_name_oneEN,
      [object.first_slider.features[1].name]:
        translationFirst_slider_features_name_twoEN,
      [object.first_slider.features[2].name]:
        translationFirst_slider_features_name_threeEN,
      [object.first_slider.features[3].name]:
        translationFirst_slider_features_name_fourEN,
      [object.second_slider.title]: translationSecond_slider_titleEN,
      [object.second_slider.para]: translationSecond_slider_paraEN,
      [object.second_slider.features[0].name]:
        translationSecond_slider_features_name_oneEN,
      [object.second_slider.features[1].name]:
        translationSecond_slider_features_name_twoEN,
      [object.second_slider.features[2].name]:
        translationSecond_slider_features_name_threeEN,
      [object.second_slider.features[3].name]:
        translationSecond_slider_features_name_fourEN,
      [object.technologies.title]: translationTechnologies_titleEN,
      [object.technologies.para]: translationTechnologies_paraEN,
    });

    const sanitizedTranslationAR = sanitizeTranslations({
      [object.title]: translationTitleAR,
      [object.para]: translationParaAR,
      [object.region.name]: translationRegion_NameAR,
      [object.platforms]: translationPlatformsAR,
      [object.portfolio_hero.secondary_title]:
        translationPortfolio_hero_secondary_titleAR,
      [object.portfolio_hero.secondary_para]:
        translationPortfolio_hero_secondary_paraAR,
      [object.first_slider.title]: translationFirst_slider_titleAR,
      [object.first_slider.para]: translationFirst_slider_paraAR,
      [object.first_slider.features[0].name]:
        translationFirst_slider_features_name_oneAR,
      [object.first_slider.features[1].name]:
        translationFirst_slider_features_name_twoAR,
      [object.first_slider.features[2].name]:
        translationFirst_slider_features_name_threeAR,
      [object.first_slider.features[3].name]:
        translationFirst_slider_features_name_fourAR,
      [object.second_slider.title]: translationSecond_slider_titleAR,
      [object.second_slider.para]: translationSecond_slider_paraAR,
      [object.second_slider.features[0].name]:
        translationSecond_slider_features_name_oneAR,
      [object.second_slider.features[1].name]:
        translationSecond_slider_features_name_twoAR,
      [object.second_slider.features[2].name]:
        translationSecond_slider_features_name_threeAR,
      [object.second_slider.features[3].name]:
        translationSecond_slider_features_name_fourAR,
      [object.technologies.title]: translationTechnologies_titleAR,
      [object.technologies.para]: translationTechnologies_paraAR,
    });

    const sanitizedTranslationDE = sanitizeTranslations({
      [object.title]: translationTitleDE,
      [object.para]: translationParaDE,
      [object.region.name]: translationRegion_NameDE,
      [object.platforms]: translationPlatformsDE,
      [object.portfolio_hero.secondary_title]:
        translationPortfolio_hero_secondary_titleDE,
      [object.portfolio_hero.secondary_para]:
        translationPortfolio_hero_secondary_paraDE,
      [object.first_slider.title]: translationFirst_slider_titleDE,
      [object.first_slider.para]: translationFirst_slider_paraDE,
      [object.first_slider.features[0].name]:
        translationFirst_slider_features_name_oneDE,
      [object.first_slider.features[1].name]:
        translationFirst_slider_features_name_twoDE,
      [object.first_slider.features[2].name]:
        translationFirst_slider_features_name_threeDE,
      [object.first_slider.features[3].name]:
        translationFirst_slider_features_name_fourDE,
      [object.second_slider.title]: translationSecond_slider_titleDE,
      [object.second_slider.para]: translationSecond_slider_paraDE,
      [object.second_slider.features[0].name]:
        translationSecond_slider_features_name_oneDE,
      [object.second_slider.features[1].name]:
        translationSecond_slider_features_name_twoDE,
      [object.second_slider.features[2].name]:
        translationSecond_slider_features_name_threeDE,
      [object.second_slider.features[3].name]:
        translationSecond_slider_features_name_fourDE,
      [object.technologies.title]: translationTechnologies_titleDE,
      [object.technologies.para]: translationTechnologies_paraDE,
    });

    setTranslationEN(sanitizedTranslationEN);
    setTranslationAR(sanitizedTranslationAR);
    setTranslationDE(sanitizedTranslationDE);
  }, [
    object,
    translationTitleEN,
    translationParaEN,
    translationRegion_NameEN,
    translationPlatformsEN,
    translationPortfolio_hero_secondary_titleEN,
    translationPortfolio_hero_secondary_paraEN,
    translationFirst_slider_titleEN,
    translationFirst_slider_paraEN,
    translationFirst_slider_features_name_oneEN,
    translationFirst_slider_features_name_twoEN,
    translationFirst_slider_features_name_threeEN,
    translationFirst_slider_features_name_fourEN,
    translationSecond_slider_titleEN,
    translationSecond_slider_paraEN,
    translationSecond_slider_features_name_oneEN,
    translationSecond_slider_features_name_twoEN,
    translationSecond_slider_features_name_threeEN,
    translationSecond_slider_features_name_fourEN,
    translationTechnologies_titleEN,
    translationTechnologies_paraEN,
    translationTitleAR,
    translationParaAR,
    translationRegion_NameAR,
    translationPlatformsAR,
    translationPortfolio_hero_secondary_titleAR,
    translationPortfolio_hero_secondary_paraAR,
    translationFirst_slider_titleAR,
    translationFirst_slider_paraAR,
    translationFirst_slider_features_name_oneAR,
    translationFirst_slider_features_name_twoAR,
    translationFirst_slider_features_name_threeAR,
    translationFirst_slider_features_name_fourAR,
    translationSecond_slider_titleAR,
    translationSecond_slider_paraAR,
    translationSecond_slider_features_name_oneAR,
    translationSecond_slider_features_name_twoAR,
    translationSecond_slider_features_name_threeAR,
    translationSecond_slider_features_name_fourAR,
    translationTechnologies_titleAR,
    translationTechnologies_paraAR,
    translationTitleDE,
    translationParaDE,
    translationRegion_NameDE,
    translationPlatformsDE,
    translationPortfolio_hero_secondary_titleDE,
    translationPortfolio_hero_secondary_paraDE,
    translationFirst_slider_titleDE,
    translationFirst_slider_paraDE,
    translationFirst_slider_features_name_oneDE,
    translationFirst_slider_features_name_twoDE,
    translationFirst_slider_features_name_threeDE,
    translationFirst_slider_features_name_fourDE,
    translationSecond_slider_titleDE,
    translationSecond_slider_paraDE,
    translationSecond_slider_features_name_oneDE,
    translationSecond_slider_features_name_twoDE,
    translationSecond_slider_features_name_threeDE,
    translationSecond_slider_features_name_fourDE,
    translationTechnologies_titleDE,
    translationTechnologies_paraDE,
  ]);

  const handelTranslate = async () => {
    try {
      const responseEN = await fetch(`${domain}/locales/en/translation.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          translation: translationEN,
        }),
      });
      if (!responseEN.ok) {
        throw new Error("Error uploading the translation (EN)");
      }
      console.log("The data in translation has been sent (EN)");

      const responseAR = await fetch(`${domain}/locales/ar/translation.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          translation: translationAR,
        }),
      });
      if (!responseAR.ok) {
        throw new Error("Error uploading the translation (AR)");
      }
      console.log("The data in translation has been sent (AR)");

      const responseDE = await fetch(`${domain}/locales/de/translation.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          translation: translationDE,
        }),
      });
      if (!responseDE.ok) {
        setError("There are two or more names with the same content!");
        setSuccess("");
        throw new Error("Error uploading the translation (DE)");
      }
      console.log("The data in translation has been sent (DE)");
      setError("");
      setSuccess("Translation data has been sent successfully!");
    } catch (error) {
      console.error("Error uploading the translation", error);
      setSuccess("");
      setError(error.message);
    }
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();
    handelObject();
    handelTranslate();
  };

  const handleUploadImage_region_flag = async (e) => {
    e.preventDefault();
    const images = e.target.files;
    const formData = new FormData();
    for (const file of images) {
      formData.append("images", file);
    }

    setImageUploadError(false);
    setUploadingImg(true);

    try {
      const res = await axios.post(`${domain}/api/images/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percent = Math.round((loaded * 100) / total);
          setImagePercent(percent);
        },
      });
      setUploadingImg(false);
      // Update state with uploaded image URLs
      const uploadedUrls = res.data.files;
      if (uploadedUrls.length === 1) {
        setObject((prevObject) => ({
          ...prevObject,
          region: {
            ...prevObject.region,
            flag: uploadedUrls[0],
          },
        }));
      }
      console.log(res.data.files);
    } catch (err) {
      if (err) {
        setUploadingImg(false);
        setImageUploadError(true);
      }
    }
  };

  const handleUploadImage_main_img = async (e) => {
    e.preventDefault();
    const images = e.target.files;
    const formData = new FormData();
    for (const file of images) {
      formData.append("images", file);
    }

    setImageUploadError(false);
    setUploadingImg(true);

    try {
      const res = await axios.post(`${domain}/api/images/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percent = Math.round((loaded * 100) / total);
          setImagePercent(percent);
        },
      });
      setUploadingImg(false);
      // Update state with uploaded image URLs
      const uploadedUrls = res.data.files;
      if (uploadedUrls.length === 1) {
        setObject((prevObject) => ({
          ...prevObject,
          main_img: uploadedUrls[0],
        }));
      }
      console.log(res.data.files);
    } catch (err) {
      if (err) {
        setUploadingImg(false);
        setImageUploadError(true);
      }
    }
  };

  // icons of technologies
  const handleUploadImages_technologies_icons = async (e) => {
    e.preventDefault();
    const images = e.target.files;
    const formData = new FormData();
    for (const file of images) {
      formData.append("images", file);
    }

    setImageUploadError(false);
    setUploadingImg(true);

    try {
      const res = await axios.post(`${domain}/api/images/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percent = Math.round((loaded * 100) / total);
          setImagePercent(percent);
        },
      });
      setUploadingImg(false);
      // Update state with uploaded image URLs
      const uploadedUrls = res.data.files;
      if (uploadedUrls.length > 1) {
        setObject((prevObject) => ({
          ...prevObject,
          technologies: {
            ...prevObject.technologies,
            icons: uploadedUrls,
          },
        }));
      }
      console.log(res.data.files);
    } catch (err) {
      if (err) {
        setUploadingImg(false);
        setImageUploadError(true);
      }
    }
  };

  const handleUploadImage_portfolio_hero_secondary_img = async (e) => {
    e.preventDefault();
    const images = e.target.files;
    const formData = new FormData();
    for (const file of images) {
      formData.append("images", file);
    }

    setImageUploadError(false);
    setUploadingImg(true);

    try {
      const res = await axios.post(`${domain}/api/images/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percent = Math.round((loaded * 100) / total);
          setImagePercent(percent);
        },
      });
      setUploadingImg(false);
      // Update state with uploaded image URLs
      const uploadedUrls = res.data.files;
      if (uploadedUrls.length === 1) {
        setObject((prevObject) => ({
          ...prevObject,
          portfolio_hero: {
            ...prevObject.portfolio_hero,
            secondary_img: uploadedUrls[0],
          },
        }));
      }
      console.log(res.data.files);
    } catch (err) {
      if (err) {
        setUploadingImg(false);
        setImageUploadError(true);
      }
    }
  };

  const handleUploadImage_dropzone_file_first_slider_features_icon = async (
    e,
    index
  ) => {
    e.preventDefault();
    const images = e.target.files;
    const formData = new FormData();
    for (const file of images) {
      formData.append("images", file);
    }

    setImageUploadError(false);
    setUploadingImg(true);

    try {
      const res = await axios.post(`${domain}/api/images/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percent = Math.round((loaded * 100) / total);
          setImagePercent(percent);
        },
      });
      setUploadingImg(false);
      // Update state with uploaded image URLs
      const uploadedUrls = res.data.files;
      if (uploadedUrls.length === 1) {
        setObject((prevObject) => ({
          ...prevObject,
          first_slider: {
            ...prevObject.first_slider,
            features: prevObject.first_slider.features.map((feature, i) =>
              i === index ? { ...feature, icon: uploadedUrls[0] } : feature
            ),
          },
        }));
      }
      console.log(res.data.files);
    } catch (err) {
      if (err) {
        setUploadingImg(false);
        setImageUploadError(true);
      }
    }
  };

  const handleUploadImages_first_slider_images = async (e) => {
    e.preventDefault();
    const images = e.target.files;
    const formData = new FormData();
    for (const file of images) {
      formData.append("images", file);
    }

    setImageUploadError(false);
    setUploadingImg(true);

    try {
      const res = await axios.post(`${domain}/api/images/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percent = Math.round((loaded * 100) / total);
          setImagePercent(percent);
        },
      });
      setUploadingImg(false);
      // Update state with uploaded image URLs
      const uploadedUrls = res.data.files;
      if (uploadedUrls.length > 1) {
        setObject((prevObject) => ({
          ...prevObject,
          first_slider: {
            ...prevObject.first_slider,
            images: uploadedUrls,
          },
        }));
      }
      console.log(res.data.files);
    } catch (err) {
      if (err) {
        setUploadingImg(false);
        setImageUploadError(true);
      }
    }
  };

  const handleUploadImage_dropzone_file_second_slider_features_icon = async (
    e,
    index
  ) => {
    e.preventDefault();
    const images = e.target.files;
    const formData = new FormData();
    for (const file of images) {
      formData.append("images", file);
    }

    setImageUploadError(false);
    setUploadingImg(true);

    try {
      const res = await axios.post(`${domain}/api/images/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percent = Math.round((loaded * 100) / total);
          setImagePercent(percent);
        },
      });
      setUploadingImg(false);
      // Update state with uploaded image URLs
      const uploadedUrls = res.data.files;
      if (uploadedUrls.length === 1) {
        setObject((prevObject) => ({
          ...prevObject,
          second_slider: {
            ...prevObject.second_slider,
            features: prevObject.second_slider.features.map((feature, i) =>
              i === index ? { ...feature, icon: uploadedUrls[0] } : feature
            ),
          },
        }));
      }
      console.log(res.data.files);
    } catch (err) {
      if (err) {
        setUploadingImg(false);
        setImageUploadError(true);
      }
    }
  };

  const handleUploadImages_second_slider_images = async (e) => {
    e.preventDefault();
    const images = e.target.files;
    const formData = new FormData();
    for (const file of images) {
      formData.append("images", file);
    }

    setImageUploadError(false);
    setUploadingImg(true);

    try {
      const res = await axios.post(`${domain}/api/images/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percent = Math.round((loaded * 100) / total);
          setImagePercent(percent);
        },
      });
      setUploadingImg(false);
      // Update state with uploaded image URLs
      const uploadedUrls = res.data.files;
      if (uploadedUrls.length > 1) {
        setObject((prevObject) => ({
          ...prevObject,
          second_slider: {
            ...prevObject.second_slider,
            images: uploadedUrls,
          },
        }));
      }
      console.log(res.data.files);
    } catch (err) {
      if (err) {
        setUploadingImg(false);
        setImageUploadError(true);
      }
    }
  };

  console.log(object);

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mx-auto flex flex-col gap-10 mt-20">
        {/* title */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div>
            <div className="w-72">
              <div className="mb-2 block w-full">
                <Label
                  htmlFor="title"
                  value="title"
                  style={{
                    fontSize: "16px",
                  }}
                />
              </div>
              <TextInput
                id="title"
                style={{
                  fontSize: "16px",
                }}
                onChange={(e) =>
                  setObject((object) => ({
                    ...object,
                    title: e.target.value,
                  }))
                }
                type="text"
                sizing="sm"
                placeholder="please-type-like-this"
              />
            </div>
          </div>

          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="title-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="title-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationTitleEN(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="title-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="title-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationTitleAR(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="title-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="title-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationTitleDE(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>
        <hr />

        {/* para */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div>
            <div className="w-72">
              <div className="mb-2 block w-full">
                <Label
                  htmlFor="para"
                  value="para"
                  style={{
                    fontSize: "16px",
                  }}
                />
              </div>
              <TextInput
                id="para"
                style={{
                  fontSize: "16px",
                }}
                onChange={(e) =>
                  setObject((object) => ({
                    ...object,
                    para: e.target.value,
                  }))
                }
                type="text"
                sizing="sm"
                placeholder="please-type-like-this"
              />
            </div>
          </div>

          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="para-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="para-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationParaEN(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="para-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="para-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationParaAR(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="para-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="para-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationParaDE(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>
        <hr />

        {/* main_img */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="main-img-in-portfolio"
              hidden
              ref={fileRef}
              accept="image/*"
              onChange={handleUploadImage_main_img}
            />
          </form>
          <Label
            htmlFor="main-img-in-portfolio"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the main
                image in portfolio
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object.main_img && (
              <img
                src={`${domain}/${object.main_img}`}
                alt="main-img-in-portfolio"
                className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                onClick={() => fileRef.current.click()}
              />
            )}
          </div>
        </div>
        <hr />

        {/* portfolio_hero */}
        {/* portfolio_hero secondary_title */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div>
            <div className="w-72">
              <div className="mb-2 block w-full">
                <Label
                  htmlFor="portfolio-hero-secondary-title"
                  value="portfolio-hero-secondary-title"
                  style={{
                    fontSize: "16px",
                  }}
                />
              </div>
              <TextInput
                id="portfolio-hero-secondary-title"
                style={{
                  fontSize: "16px",
                }}
                onChange={(e) =>
                  setObject((object) => ({
                    ...object,
                    portfolio_hero: {
                      ...object.portfolio_hero,
                      secondary_title: e.target.value,
                    },
                  }))
                }
                type="text"
                sizing="sm"
                placeholder="please-type-like-this"
              />
            </div>
          </div>

          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="portfolio-hero-secondary-title-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="portfolio-hero-secondary-title-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationPortfolio_hero_secondary_titleEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="portfolio-hero-secondary-title-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="portfolio-hero-secondary-title-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationPortfolio_hero_secondary_titleAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="portfolio-hero-secondary-title-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="portfolio-hero-secondary-title-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationPortfolio_hero_secondary_titleDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* portfolio_hero secondary_para */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div>
            <div className="w-72">
              <div className="mb-2 block w-full">
                <Label
                  htmlFor="portfolio-hero-secondary-para"
                  value="portfolio-hero-secondary-para"
                  style={{
                    fontSize: "16px",
                  }}
                />
              </div>
              <TextInput
                id="portfolio-hero-secondary-para"
                style={{
                  fontSize: "16px",
                }}
                onChange={(e) =>
                  setObject((object) => ({
                    ...object,
                    portfolio_hero: {
                      ...object.portfolio_hero,
                      secondary_para: e.target.value,
                    },
                  }))
                }
                type="text"
                sizing="sm"
                placeholder="please-type-like-this"
              />
            </div>
          </div>

          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="portfolio-hero-secondary-para-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="portfolio-hero-secondary-para-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationPortfolio_hero_secondary_paraEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="portfolio-hero-secondary-para-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="portfolio-hero-secondary-para-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationPortfolio_hero_secondary_paraAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="portfolio-hero-secondary-para-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="portfolio-hero-secondary-para-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationPortfolio_hero_secondary_paraDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* portfolio_hero secondary_img */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="dropzone-file-portfolio-hero-secondary-img-xzzx"
              hidden
              ref={fileRef}
              accept="image/*"
              onChange={handleUploadImage_portfolio_hero_secondary_img}
            />
          </form>
          <Label
            htmlFor="dropzone-file-portfolio-hero-secondary-img-xzzx"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the
                secondary image in portfolio
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object.portfolio_hero.secondary_img && (
              <img
                src={`${domain}/${object.portfolio_hero.secondary_img}`}
                alt="dropzone-file-portfolio-hero-secondary-img-xzzx"
                className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                onClick={() => fileRef.current.click()}
              />
            )}
          </div>
        </div>
        <hr />

        {/* path */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div>
            <div className="w-72">
              <div className="mb-2 block w-full">
                <Label
                  htmlFor="path"
                  value="the path"
                  style={{
                    fontSize: "16px",
                  }}
                />
              </div>
              <TextInput
                id="path"
                style={{
                  fontSize: "16px",
                }}
                onChange={(e) =>
                  setObject((object) => ({
                    ...object,
                    path: e.target.value,
                  }))
                }
                type="text"
                sizing="sm"
                placeholder="like: path-path"
              />
            </div>
          </div>
        </div>
        <hr />

        {/*  */}
        {/*technologies */}
        {/* technologies title */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="technologies-title"
                value="technologies-title"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="technologies-title"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  technologies: {
                    ...object.technologies,
                    title: e.target.value,
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="technologies-title-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="technologies-title-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationTechnologies_titleEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="technologies-title-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="technologies-title-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationTechnologies_titleAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="technologies-title-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="technologies-title-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationTechnologies_titleDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* technologies para */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="technologies-para"
                value="technologies-para"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="technologies-para"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  technologies: {
                    ...object.technologies,
                    para: e.target.value,
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="technologies-para-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="technologies-para-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationTechnologies_paraEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="technologies-para-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="technologies-para-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationTechnologies_paraAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="technologies-para-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="technologies-para-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationTechnologies_paraDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* technologies icons */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="dropzone-file-portfolio-technologies-icons-zz-icons"
              hidden
              multiple
              ref={fileRef}
              accept="image/*"
              onChange={handleUploadImages_technologies_icons}
            />
          </form>
          <Label
            htmlFor="dropzone-file-portfolio-technologies-icons-zz-icons"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the icons
                in technologies
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object.technologies.icons && (
              <>
                {object.technologies.icons.map((icon, index) => (
                  <img
                    key={index}
                    src={`${domain}/${icon}`}
                    alt="dropzone-file-portfolio-technologies-icons-zz-icons"
                    className={`object-contain w-full h-full mx-auto
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <hr />

        {/* downloads */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div>
            <div className="w-72">
              <div className="mb-2 block w-full">
                <Label
                  htmlFor="downloads"
                  value="number-of-downloads"
                  style={{
                    fontSize: "16px",
                  }}
                />
              </div>
              <TextInput
                id="downloads"
                style={{
                  fontSize: "16px",
                }}
                onChange={(e) =>
                  setObject((object) => ({
                    ...object,
                    downloads: e.target.value,
                  }))
                }
                type="number"
                sizing="sm"
                placeholder="please type the number of downloads"
              />
            </div>
          </div>
        </div>
        <hr />

        {/* region (name & flag)*/}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          {/* name */}
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="region-name"
                value="name-of-the-region"
                style={{
                  fontSize: "16px",
                }}
              />
            </div>
            <TextInput
              id="region-name"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  region: {
                    ...object.region,
                    name: e.target.value,
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="region-name-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="region-name-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationRegion_NameEN(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="region-name-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="region-name-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationRegion_NameAR(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="region-name-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="region-name-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationRegion_NameDE(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>

          {/* flag */}
          <div className="flex w-fit items-center justify-center">
            <form action="" className="hidden">
              <input
                type="file"
                id="main-img-in-portfolio-first_slider_features_icon-one-xz-1"
                hidden
                ref={fileRef}
                accept="image/*"
                onChange={handleUploadImage_region_flag}
              />
            </form>
            <Label
              htmlFor="main-img-in-portfolio-first_slider_features_icon-one-xz-1"
              className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center">
                <svg
                  className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> the
                  flag in portfolio
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
              </div>
            </Label>
            <div className="relative w-40 h-40 mx-auto p-5">
              {uploadingImg && (
                <CircularProgressbar
                  value={imagePercent}
                  text={`${imagePercent}%`}
                  strokeWidth={5}
                  styles={{
                    root: {
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: "0",
                      left: "0",
                      zIndex: "44",
                    },
                    path: {
                      stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                    },
                  }}
                />
              )}
              {object.region.flag && (
                <img
                  src={`${domain}/${object.region.flag}`}
                  alt="main-img-in-portfolio-first_slider_features_icon-one-xz-1"
                  className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                  onClick={() => fileRef.current.click()}
                />
              )}
            </div>
          </div>
        </div>
        <hr />

        {/* platforms */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="platforms"
                value="the-platforms"
                style={{
                  fontSize: "16px",
                }}
              />
            </div>
            <TextInput
              id="platforms"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  platforms: e.target.value,
                }))
              }
              type="text"
              sizing="sm"
              placeholder="please type the platforms"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="platforms-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="platforms-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationPlatformsEN(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="platforms-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="platforms-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationPlatformsAR(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="platforms-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="platforms-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) => setTranslationPlatformsDE(e.target.value)}
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>
        <hr />

        {/*  */}
        {/* first_slider */}
        {/* first_slider title */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="first-slider-title"
                value="first-slider-title"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="first-slider-title"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  first_slider: {
                    ...object.first_slider,
                    title: e.target.value,
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-title-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-title-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_titleEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-title-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-title-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_titleAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-title-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-title-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_titleDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* first_slider para */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="first-slider-para"
                value="first-slider-paragraph"
                style={{ fontSize: "16px" }}
              />
            </div>
            <Textarea
              id="first-slider-para"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  first_slider: {
                    ...object.first_slider,
                    para: e.target.value,
                  },
                }))
              }
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-title-para-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-para-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_paraEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-para-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-para-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_paraAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-para-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-para-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_paraDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* first_slider features name one*/}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="first-slider-feature-name-one"
                value="first-slider-feature-name-one"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="first-slider-feature-name-one"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  first_slider: {
                    ...object.first_slider,
                    features: object.first_slider.features.map((feature, i) =>
                      i === 0 ? { ...feature, name: e.target.value } : feature
                    ),
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-one-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-one-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_oneEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-one-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-one-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_oneAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-one-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-one-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_oneDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* first_slider features icon one */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="main-img-in-portfolio-first_slider_features_icon-one-xz-1-1-1"
              hidden
              ref={fileRef}
              accept="image/*"
              onChange={(e) =>
                handleUploadImage_dropzone_file_first_slider_features_icon(e, 0)
              }
            />
          </form>
          <Label
            htmlFor="main-img-in-portfolio-first_slider_features_icon-one-xz-1-1-1"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the icon
                one in portfolio first slider
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object.first_slider.features[0].icon && (
              <img
                src={`${domain}/${object.first_slider.features[0].icon}`}
                alt="main-img-in-portfolio-first_slider_features_icon-one-xz-1-1-1"
                className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                onClick={() => fileRef.current.click()}
              />
            )}
          </div>
        </div>

        {/* first_slider features name two */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="first-slider-feature-name-two"
                value="first-slider-feature-name-two"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="first-slider-feature-name-two"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  first_slider: {
                    ...object.first_slider,
                    features: object.first_slider.features.map((feature, i) =>
                      i === 1 ? { ...feature, name: e.target.value } : feature
                    ),
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-two-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-two-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_twoEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-two-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-two-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_twoAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-two-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-two-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_twoDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* first_slider features icon two */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="main-img-in-portfolio-first_slider_features_icon-one-xz-2"
              hidden
              ref={fileRef}
              accept="image/*"
              onChange={(e) =>
                handleUploadImage_dropzone_file_first_slider_features_icon(e, 1)
              }
            />
          </form>
          <Label
            htmlFor="main-img-in-portfolio-first_slider_features_icon-one-xz-2"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the icon
                two in portfolio first slider
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object.first_slider.features[1].icon && (
              <img
                src={`${domain}/${object.first_slider.features[1].icon}`}
                alt="main-img-in-portfolio-first_slider_features_icon-one-xz-2"
                className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                onClick={() => fileRef.current.click()}
              />
            )}
          </div>
        </div>

        {/* first_slider features name three */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="first-slider-feature-name-three"
                value="first-slider-feature-name-three"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="first-slider-feature-name-three"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  first_slider: {
                    ...object.first_slider,
                    features: object.first_slider.features.map((feature, i) =>
                      i === 2 ? { ...feature, name: e.target.value } : feature
                    ),
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-three-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-three-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_threeEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-three-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-three-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_threeAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-three-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-three-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_threeDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* first_slider features icon three */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="main-img-in-portfolio-first_slider_features_icon-one-xz-3"
              hidden
              ref={fileRef}
              accept="image/*"
              onChange={(e) =>
                handleUploadImage_dropzone_file_first_slider_features_icon(e, 2)
              }
            />
          </form>
          <Label
            htmlFor="main-img-in-portfolio-first_slider_features_icon-one-xz-3"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the icon
                three in portfolio first slider
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object.first_slider.features[2].icon && (
              <img
                src={`${domain}/${object.first_slider.features[2].icon}`}
                alt="main-img-in-portfolio-first_slider_features_icon-one-xz-3"
                className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                onClick={() => fileRef.current.click()}
              />
            )}
          </div>
        </div>

        {/* first_slider features name four */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="first-slider-feature-name-four"
                value="first-slider-feature-name-four"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="first-slider-feature-name-four"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  first_slider: {
                    ...object.first_slider,
                    features: object.first_slider.features.map((feature, i) =>
                      i === 3 ? { ...feature, name: e.target.value } : feature
                    ),
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-four-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-four-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_fourEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-four-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-four-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_fourAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="first-slider-features-name-four-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="first-slider-features-name-four-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationFirst_slider_features_name_fourDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* first_slider features icon four */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="main-img-in-portfolio-first_slider_features_icon-one-xz-4"
              hidden
              ref={fileRef}
              accept="image/*"
              onChange={(e) =>
                handleUploadImage_dropzone_file_first_slider_features_icon(e, 3)
              }
            />
          </form>
          <Label
            htmlFor="main-img-in-portfolio-first_slider_features_icon-one-xz-4"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the four
                icon in first slider
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object.first_slider.features[3].icon && (
              <img
                src={`${domain}/${object.first_slider.features[3].icon}`}
                alt="main-img-in-portfolio-first_slider_features_icon-one-xz-4"
                className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                onClick={() => fileRef.current.click()}
              />
            )}
          </div>
        </div>

        {/* first_slider images */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="main-img-in-portfolio-first_slider_features_icon-one-images-array"
              hidden
              multiple
              ref={fileRef}
              accept="image/*"
              onChange={handleUploadImages_first_slider_images}
            />
          </form>
          <Label
            htmlFor="main-img-in-portfolio-first_slider_features_icon-one-images-array"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the
                images in first slider
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object?.first_slider?.images?.length > 0 && (
              <>
                {object.first_slider.images.map((img, index) => (
                  <img
                    src={`${domain}/${img}`}
                    key={index}
                    alt="main-img-in-portfolio-first_slider_features_icon-one-images-array"
                    className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                    onClick={() => fileRef.current.click()}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <hr />

        {/*  */}
        {/* portfolio_section */}
        {/* portfolio_section ratings */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div>
            <div className="w-72">
              <div className="mb-2 block w-full">
                <Label
                  htmlFor="portfolio-section-ratings"
                  value="portfolio-section-ratings"
                  style={{
                    fontSize: "16px",
                  }}
                />
              </div>
              <TextInput
                id="portfolio-section-ratings"
                style={{
                  fontSize: "16px",
                }}
                onChange={(e) =>
                  setObject((object) => ({
                    ...object,
                    portfolio_section: {
                      ...object.portfolio_section,
                      ratings: e.target.value,
                    },
                  }))
                }
                type="number"
                sizing="sm"
                placeholder="maximum number is 5"
              />
            </div>
          </div>
        </div>
        {/* portfolio_section found-in */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div>
            <div className="w-72">
              <div className="mb-2 block w-full">
                <Label
                  htmlFor="portfolio-section-found-in"
                  value="portfolio-section-found-in"
                  style={{
                    fontSize: "16px",
                  }}
                />
              </div>
              <TextInput
                id="portfolio-section-found-in"
                style={{
                  fontSize: "16px",
                }}
                onChange={(e) =>
                  setObject((object) => ({
                    ...object,
                    portfolio_section: {
                      ...object.portfolio_section,
                      found_in: e.target.value,
                    },
                  }))
                }
                type="number"
                sizing="sm"
                placeholder="like 2022"
              />
            </div>
          </div>
        </div>
        <hr />

        {/*  */}
        {/* second_slider */}
        {/* second_slider title */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="second-slider-title"
                value="second-slider-title"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="second-slider-title"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  second_slider: {
                    ...object.second_slider,
                    title: e.target.value,
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="second-slider-title-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="second-slider-title-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_titleEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-title-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-title-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_titleAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-title-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-title-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_titleDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* second_slider para */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="Second-slider-para"
                value="second-slider-para"
                style={{ fontSize: "16px" }}
              />
            </div>
            <Textarea
              id="Second-slider-para"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  second_slider: {
                    ...object.second_slider,
                    para: e.target.value,
                  },
                }))
              }
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="second-slider-title-para-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="second-slider-para-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_paraEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-para-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-para-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_paraAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-para-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-para-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_paraDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* Second_slider features name one*/}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="Second-slider-feature-name-one"
                value="second-slider-feature-name-one"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="Second-slider-feature-name-one"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  second_slider: {
                    ...object.second_slider,
                    features: object.second_slider.features.map((feature, i) =>
                      i === 0 ? { ...feature, name: e.target.value } : feature
                    ),
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-one-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-one-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_oneEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-one-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-one-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_oneAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-one-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-one-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_oneDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* second_slider features icon one */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="main-img-in-portfolio-second_slider_features_icon-one-icon-1"
              hidden
              ref={fileRef}
              accept="image/*"
              onChange={(e) =>
                handleUploadImage_dropzone_file_second_slider_features_icon(
                  e,
                  0
                )
              }
            />
          </form>
          <Label
            htmlFor="main-img-in-portfolio-second_slider_features_icon-one-icon-1"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the icon
                one in portfolio second slider
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object.second_slider.features[0].icon && (
              <img
                src={`${domain}/${object.second_slider.features[0].icon}`}
                alt="main-img-in-portfolio-second_slider_features_icon-one-icon-1"
                className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                onClick={() => fileRef.current.click()}
              />
            )}
          </div>
        </div>

        {/* Second_slider features name two */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="Second-slider-feature-name-two"
                value="second-slider-feature-name-two"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="Second-slider-feature-name-two"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  second_slider: {
                    ...object.second_slider,
                    features: object.second_slider.features.map((feature, i) =>
                      i === 1 ? { ...feature, name: e.target.value } : feature
                    ),
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-two-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-two-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_twoEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-two-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-two-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_twoAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-two-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-two-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_twoDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* Second_slider features icon two */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="main-img-in-portfolio-second_slider_features_icon-one-icon-2"
              hidden
              ref={fileRef}
              accept="image/*"
              onChange={(e) =>
                handleUploadImage_dropzone_file_second_slider_features_icon(
                  e,
                  1
                )
              }
            />
          </form>
          <Label
            htmlFor="main-img-in-portfolio-second_slider_features_icon-one-icon-2"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the icon
                two in portfolio second slider
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object.second_slider.features[1].icon && (
              <img
                src={`${domain}/${object.second_slider.features[1].icon}`}
                alt="main-img-in-portfolio-second_slider_features_icon-one-icon-2"
                className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                onClick={() => fileRef.current.click()}
              />
            )}
          </div>
        </div>

        {/* Second_slider features name three */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="Second-slider-feature-name-three"
                value="second-slider-feature-name-three"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="Second-slider-feature-name-three"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  second_slider: {
                    ...object.second_slider,
                    features: object.second_slider.features.map((feature, i) =>
                      i === 2 ? { ...feature, name: e.target.value } : feature
                    ),
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-three-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-three-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_threeEN(
                  e.target.value
                )
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-three-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-three-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_threeAR(
                  e.target.value
                )
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-three-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-three-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_threeDE(
                  e.target.value
                )
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* Second_slider features icon three */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="main-img-in-portfolio-second_slider_features_icon-one-icon-3"
              hidden
              ref={fileRef}
              accept="image/*"
              onChange={(e) =>
                handleUploadImage_dropzone_file_second_slider_features_icon(
                  e,
                  2
                )
              }
            />
          </form>
          <Label
            htmlFor="main-img-in-portfolio-second_slider_features_icon-one-icon-3"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the icon
                three in portfolio second slider
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object.second_slider.features[2].icon && (
              <img
                src={`${domain}/${object.second_slider.features[2].icon}`}
                alt="main-img-in-portfolio-second_slider_features_icon-one-icon-3"
                className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                onClick={() => fileRef.current.click()}
              />
            )}
          </div>
        </div>

        {/* Second_slider features name four */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <div className="w-72">
            <div className="mb-2 block w-full">
              <Label
                htmlFor="Second-slider-feature-name-four"
                value="second-slider-feature-name-four"
                style={{ fontSize: "16px" }}
              />
            </div>
            <TextInput
              id="Second-slider-feature-name-four"
              style={{ fontSize: "16px" }}
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  second_slider: {
                    ...object.second_slider,
                    features: object.second_slider.features.map((feature, i) =>
                      i === 3 ? { ...feature, name: e.target.value } : feature
                    ),
                  },
                }))
              }
              type="text"
              sizing="sm"
              placeholder="Please-type-the-this"
            />
          </div>
          {/* in en */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-four-myTextarea-EN"
              value="Enter your sentence in English:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-four-myTextarea-EN"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_fourEN(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in ar */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-four-myTextarea-AR"
              value="Enter your sentence in Arabic:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-four-myTextarea-AR"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_fourAR(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
          {/* in de */}
          <div className="flex flex-col gap-2 w-72">
            <Label
              htmlFor="Second-slider-features-name-four-myTextarea-DE"
              value="Enter your sentence in Dautch:"
              style={{
                fontSize: "16px",
              }}
            />
            <Textarea
              id="Second-slider-features-name-four-myTextarea-DE"
              style={{
                fontSize: "16px",
              }}
              onChange={(e) =>
                setTranslationSecond_slider_features_name_fourDE(e.target.value)
              }
              sizing="sm"
              placeholder="please type your sentence..."
            />
          </div>
        </div>

        {/* Second_slider features icon four */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="main-img-in-portfolio-second_slider_features_icon-one-icon-4"
              hidden
              ref={fileRef}
              accept="image/*"
              onChange={(e) =>
                handleUploadImage_dropzone_file_second_slider_features_icon(
                  e,
                  3
                )
              }
            />
          </form>
          <Label
            htmlFor="main-img-in-portfolio-second_slider_features_icon-one-icon-4"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the icon
                four in portfolio second slider
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object.second_slider.features[3].icon && (
              <img
                src={`${domain}/${object.second_slider.features[3].icon}`}
                alt="main-img-in-portfolio-second_slider_features_icon-one-icon-4"
                className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                onClick={() => fileRef.current.click()}
              />
            )}
          </div>
        </div>

        {/* Second_slider images */}
        <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
          <form action="" className="hidden">
            <input
              type="file"
              id="main-img-in-portfolio-Second_slider_features_icon-one-images-array"
              hidden
              multiple
              ref={fileRef}
              accept="image/*"
              onChange={handleUploadImages_second_slider_images}
            />
          </form>
          <Label
            htmlFor="main-img-in-portfolio-Second_slider_features_icon-one-images-array"
            className="flex p-5 h-fit w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center">
              <svg
                className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> the
                images in portfolio second slider
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">PNG</p>
            </div>
          </Label>
          <div className="relative w-40 h-40 mx-auto p-5">
            {uploadingImg && (
              <CircularProgressbar
                value={imagePercent}
                text={`${imagePercent}%`}
                strokeWidth={5}
                styles={{
                  root: {
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "44",
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${imagePercent / 100})`,
                  },
                }}
              />
            )}
            {object?.second_slider?.images?.length > 0 && (
              <>
                {object.second_slider.images.map((img, index) => (
                  <img
                    src={`${domain}/${img}`}
                    key={index}
                    alt="main-img-in-portfolio-Second_slider_features_icon-one-images-array"
                    className={`object-contain w-full h-full  mx-auto cursor-pointer
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                    onClick={() => fileRef.current.click()}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <hr />

        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}

        {error && (
          <div>
            <Alert color="failure" icon={HiInformationCircle}>
              <span className="font-medium">Info alert!</span> {error}
            </Alert>
          </div>
        )}
        {success && (
          <Alert color="info">
            <span className="font-medium">Info alert!</span> {success}
          </Alert>
        )}
        <div className="mb-10 w-fit  mx-auto container">
          <button
            type="submit"
            className="relative whitespace-nowrap  inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white"
          >
            <span className="relative px-20 uppercase py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              submit
            </span>
          </button>
        </div>
      </div>
    </form>
  );
}
