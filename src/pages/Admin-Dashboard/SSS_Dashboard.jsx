import {
  Dropdown,
  Label,
  Textarea,
  TextInput,
  useState,
  useEffect,
  useRef,
  CircularProgressbar,
  axios,
} from "@/utils/Imports";
import { Alert } from "flowbite-react";

import Model_M_Intro_One from "./Models/Model_M_Intro_One";
import Model_M_Section_One from "./Models/Model_M_Section_One";
import Model_M_DBMS from "./Models/Model_M_DBMS";
import Model_M_Slider from "./Models/Model_M_Slider";
import Model_M_Steps from "./Models/Model_M_Steps";
import Model_M_Questions from "./Models/Model_M_Questions";
import Model_M_Get_A_Service from "./Models/Model_M_Get_A_Service";
import Model_M_Benefits from "./Models/Model_M_Benefits";
import Model_M_Section_Two from "./Models/Model_M_Section_Two";
import Model_M_Intro_Two from "./Models/Model_M_Intro_Two";
import Model_M_Section_Three from "./Models/Model_M_Section_Three";
import Model_M_Intro_Four from "./Models/Model_M_Intro_Four";
import Model_M_Intro_Three from "./Models/Model_M_Intro_Three";
import Model_M_Intro_Five from "./Models/Model_M_Intro_Five";
import Model_M_Game from "./Models/Model_M_Game";
import Model_M_Slider_Images from "./Models/Model_M_Slider_Images";

import "react-circular-progressbar/dist/styles.css";

export default function SSS_Dashboard({ domain }) {
  const [imagePercent, setImagePercent] = useState();
  const fileRef = useRef(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imageUploadError, setImageUploadError] = useState(false);

  //
  const [solutionsComponents, setSolutionsComponents] = useState({
    M_Intro_One: false,
    M_Intro_Three: false,
    M_Intro_Four: false,
    M_Intro_Five: false,
    M_Steps: false,
    M_Work_With: false,
    M_Benefits: false,
    M_DBMS: false,
    M_Section_One: false,
    M_Section_Two: false,
    M_Game: false,
    M_Slider: false,
    M_Get_A_Service: false,
  });
  const solutions_Components = [
    "M_Intro_One",
    "M_Intro_Three",
    "M_Intro_Four",
    "M_Intro_Five",
    "M_Steps",
    "M_Work_With",
    "M_Benefits",
    "M_DBMS",
    "M_Section_One",
    "M_Section_Two",
    "M_Game",
    "M_Slider",
    "M_Get_A_Service",
  ];
  const [servicesComponents, setServicesComponents] = useState({
    M_Intro_One: false,
    M_Intro_Two: false,
    M_Intro_Four: false,
    M_Intro_Five: false,
    M_DBMS: false,
    M_Benefits: false,
    M_Section_One: false,
    M_Section_Two: false,
    M_Section_Three: false,
    M_Slider: false,
    M_Steps: false,
    M_Get_A_Service: false,
    M_Questions: false,
  });
  const services_Components = [
    "M_Intro_One",
    "M_Intro_Two",
    "M_Intro_Four",
    "M_DBMS",
    "M_Benefits",
    "M_Work_With",
    "M_Section_One",
    "M_Section_Two",
    "M_Section_Three",
    "M_Slider",
    "M_Steps",
    "M_Get_A_Service",
    "M_Questions",
  ];
  const [systemsComponents, setSystemsComponents] = useState({
    M_Intro_One: false,
    M_Intro_Two: false,
    M_Intro_Four: false,
    M_Benefits: false,
    M_Section_One: false,
    M_Section_Two: false,
    M_Slider: false,
    M_Steps: false,
    M_Get_A_Service: false,
    M_Slider_Images: false,
    M_Work_With: false,
  });
  const systems_Components = [
    "M_Intro_One",
    "M_Intro_Two",
    "M_Intro_Four",
    "M_Benefits",
    "M_Work_With",
    "M_Section_One",
    "M_Section_Two",
    "M_Slider_Images",
    "M_Slider",
    "M_Steps",
    "M_Get_A_Service",
  ];

  const [classification, setClassification] = useState("");
  const [category, setCategory] = useState("");

  const [data, setData] = useState({
    solutions_components: solutionsComponents,
    services_components: servicesComponents,
    systems_components: systemsComponents,

    M_Intro_One: {
      title: "",
      para: "",
      intro: false,
      img: "",
    },
    M_Intro_Two: {
      title: "",
      para: "",
    },
    M_Intro_Three: {
      title: "",
      para: "",
      img: "",
      wide_img: "",
    },
    M_Intro_Four: {
      title: "",
      para: "",
      img: "",
    },
    M_Intro_Five: {
      title: "",
      para: "",
      img: "",
    },
    M_Section_One: {
      title: "",
      para: "",
      services: [
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
      ],
      img: "",
    },
    M_Section_Two: {
      title: "",
      infos: [
        { title: "", para: "", icon: "" },
        { title: "", para: "", icon: "" },
        { title: "", para: "", icon: "" },
      ],
      img: "",
      dir: 1,
    },
    M_Section_Three: {
      title: "",
      para: "",
      features: [
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
      ],
      img: "",
      dir: 1,
    },
    M_DBMS: [
      {
        title: "",
        services: [
          { title: "", para: "" },
          { title: "", para: "" },
          { title: "", para: "" },
          { title: "", para: "" },
          { title: "", para: "" },
        ],
        img: "",
        dir: 1,
        Whatsapp_button: false,
        counter: false,
      },
      {
        title: "",
        services: [
          { title: "", para: "" },
          { title: "", para: "" },
          { title: "", para: "" },
          { title: "", para: "" },
          { title: "", para: "" },
        ],
        img: "",
        dir: 1,
        Whatsapp_button: false,
        counter: false,
      },
      {
        title: "",
        services: [
          { title: "", para: "" },
          { title: "", para: "" },
          { title: "", para: "" },
          { title: "", para: "" },
          { title: "", para: "" },
        ],
        img: "",
        dir: 1,
        Whatsapp_button: false,
        counter: false,
      },
    ],
    M_Slider: {
      title: "",
      para: "",
      cards: [
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
      ],
      bg_color: "",
    },
    M_Steps: [
      {
        title: "",
        para: "",
        steps: [
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
        ],
        img: "",
        dir: 1,
        whatsapp_button: true,
      },
      {
        title: "",
        para: "",
        steps: [
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
        ],
        img: "",
        dir: 1,
        whatsapp_button: true,
      },
      {
        title: "",
        para: "",
        steps: [
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
          { sentence: "" },
        ],
        img: "",
        dir: 1,
        whatsapp_button: true,
      },
    ],
    M_Questions: {
      title: "",
      questions: [
        { title: "", answer: "" },
        { title: "", answer: "" },
        { title: "", answer: "" },
        { title: "", answer: "" },
        { title: "", answer: "" },
      ],
    },
    M_Get_A_Service: {
      title: "",
      img: "",
      whatsapp_button: true,
    },
    M_Benefits: {
      title: "",
      para: "",
      benefits: [
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
        { title: "", para: "" },
      ],
      img: "",
      icons: false,
    },
    M_Game: {
      title: "",
      para: "",
      img: "",
    },
    M_Slider_Images: {
      title: "",
      imgs: [],
    },
  });

  const [object, setObject] = useState({
    classification: "",
    category: "",
    title_in_nav: "",
    icon_in_nav: "",
    path: "",
    data: data,
  });

  // object
  useEffect(() => {
    setObject((prevObject) => ({
      ...prevObject,
      classification: classification,
      category: category,
      data: data,
    }));
  }, [classification, category, data]);

  //
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  //
  // translation
  const [translationEN, setTranslationEN] = useState({});
  const [translationAR, setTranslationAR] = useState({});
  const [translationDE, setTranslationDE] = useState({});

  // title in nav
  const [titleInNavInEN, setTitleInNavInEN] = useState("");
  const [titleInNavInAR, setTitleInNavInAR] = useState("");
  const [titleInNavInDE, setTitleInNavInDE] = useState("");

  // _M_Intro_One
  const [translation_M_Intro_One_EN, setTranslation_M_Intro_One_EN] = useState(
    {}
  );
  const [translation_M_Intro_One_AR, setTranslation_M_Intro_One_AR] = useState(
    {}
  );
  const [translation_M_Intro_One_DE, setTranslation_M_Intro_One_DE] = useState(
    {}
  );

  // _M_Section_One
  const [translation_M_Section_One_EN, setTranslation_M_Section_One_EN] =
    useState({});
  const [translation_M_Section_One_AR, setTranslation_M_Section_One_AR] =
    useState({});
  const [translation_M_Section_One_DE, setTranslation_M_Section_One_DE] =
    useState({});

  // _M_DBMS
  const [translation_M_DBMS_EN, setTranslation_M_DBMS_EN] = useState({});
  const [translation_M_DBMS_AR, setTranslation_M_DBMS_AR] = useState({});
  const [translation_M_DBMS_DE, setTranslation_M_DBMS_DE] = useState({});

  // _Model_M_Slider
  const [translation_M_Slider_EN, setTranslation_M_Slider_EN] = useState({});
  const [translation_M_Slider_AR, setTranslation_M_Slider_AR] = useState({});
  const [translation_M_Slider_DE, setTranslation_M_Slider_DE] = useState({});

  // _Model_M_Steps
  const [translation_M_Steps_EN, setTranslation_M_Steps_EN] = useState({});
  const [translation_M_Steps_AR, setTranslation_M_Steps_AR] = useState({});
  const [translation_M_Steps_DE, setTranslation_M_Steps_DE] = useState({});

  // _Model_M_Questions
  const [translation_M_Questions_EN, setTranslation_M_Questions_EN] = useState(
    {}
  );
  const [translation_M_Questions_AR, setTranslation_M_Questions_AR] = useState(
    {}
  );
  const [translation_M_Questions_DE, setTranslation_M_Questions_DE] = useState(
    {}
  );

  // _Model_M_Get_A_Service
  const [translation_M_Get_A_Service_EN, setTranslation_M_Get_A_Service_EN] =
    useState({});
  const [translation_M_Get_A_Service_AR, setTranslation_M_Get_A_Service_AR] =
    useState({});
  const [translation_M_Get_A_Service_DE, setTranslation_M_Get_A_Service_DE] =
    useState({});

  // _Model_M_Benefits
  const [translation_M_Benefits_EN, setTranslation_M_Benefits_EN] = useState(
    {}
  );
  const [translation_M_Benefits_AR, setTranslation_M_Benefits_AR] = useState(
    {}
  );
  const [translation_M_Benefits_DE, setTranslation_M_Benefits_DE] = useState(
    {}
  );

  // _M_Section_Two
  const [translation_M_Section_Two_EN, setTranslation_M_Section_Two_EN] =
    useState({});
  const [translation_M_Section_Two_AR, setTranslation_M_Section_Two_AR] =
    useState({});
  const [translation_M_Section_Two_DE, setTranslation_M_Section_Two_DE] =
    useState({});

  // _M_Intro_Two
  const [translation_M_Intro_Two_EN, setTranslation_M_Intro_Two_EN] = useState(
    {}
  );
  const [translation_M_Intro_Two_AR, setTranslation_M_Intro_Two_AR] = useState(
    {}
  );
  const [translation_M_Intro_Two_DE, setTranslation_M_Intro_Two_DE] = useState(
    {}
  );

  // _M_Section_Three
  const [translation_M_Section_Three_EN, setTranslation_M_Section_Three_EN] =
    useState({});
  const [translation_M_Section_Three_AR, setTranslation_M_Section_Three_AR] =
    useState({});
  const [translation_M_Section_Three_DE, setTranslation_M_Section_Three_DE] =
    useState({});

  // _M_Intro_Three
  const [translation_M_Intro_Three_EN, setTranslation_M_Intro_Three_EN] =
    useState({});
  const [translation_M_Intro_Three_AR, setTranslation_M_Intro_Three_AR] =
    useState({});
  const [translation_M_Intro_Three_DE, setTranslation_M_Intro_Three_DE] =
    useState({});

  // _M_Intro_Four
  const [translation_M_Intro_Four_EN, setTranslation_M_Intro_Four_EN] =
    useState({});
  const [translation_M_Intro_Four_AR, setTranslation_M_Intro_Four_AR] =
    useState({});
  const [translation_M_Intro_Four_DE, setTranslation_M_Intro_Four_DE] =
    useState({});

  // _M_Intro_Five
  const [translation_M_Intro_Five_EN, setTranslation_M_Intro_Five_EN] =
    useState({});
  const [translation_M_Intro_Five_AR, setTranslation_M_Intro_Five_AR] =
    useState({});
  const [translation_M_Intro_Five_DE, setTranslation_M_Intro_Five_DE] =
    useState({});

  // _M_Game
  const [translation_M_Game_EN, setTranslation_M_Game_EN] = useState({});
  const [translation_M_Game_AR, setTranslation_M_Game_AR] = useState({});
  const [translation_M_Game_DE, setTranslation_M_Game_DE] = useState({});

  // _M_Slider_Images
  const [translation_M_Slider_Images_EN, setTranslation_M_Slider_Images_EN] =
    useState({});
  const [translation_M_Slider_Images_AR, setTranslation_M_Slider_Images_AR] =
    useState({});
  const [translation_M_Slider_Images_DE, setTranslation_M_Slider_Images_DE] =
    useState({});

  //
  //
  //
  // upload icon in nav
  const handleUploadImage_icon_in_nav = async (e) => {
    e.preventDefault();
    const images = e.target.files;
    const formData = new FormData();
    for (const file of images) {
      formData.append("images", file);
    }

    setImageUploadError(false);
    setUploadingImg(true);

    // Logging FormData contents
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

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
          icon_in_nav: uploadedUrls[0],
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

  // solutions & services components
  const handleChangeComponents = (event) => {
    const { name, checked } = event.target;

    if (classification === "solutions") {
      setSolutionsComponents((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (classification === "services") {
      setServicesComponents((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else if (classification === "systems") {
      setSystemsComponents((prev) => ({
        ...prev,
        [name]: checked,
      }));
    }

    // setSystemsComponents

    setData((prev) => ({
      ...prev,
      solutions_components:
        classification === "solutions"
          ? {
              ...solutionsComponents,
              [name]: checked,
            }
          : solutionsComponents,
      services_components:
        classification === "services"
          ? {
              ...servicesComponents,
              [name]: checked,
            }
          : servicesComponents,
      systems_components:
        classification === "systems"
          ? {
              ...systemsComponents,
              [name]: checked,
            }
          : systemsComponents,
    }));
  };

  // handel Object
  const handelObject = async () => {
    try {
      const response = await fetch(
        `${domain}/api/${classification}/upload-data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(object),
        }
      );
      if (!response.ok) {
        throw new Error("Error uploading the Data");
      }
      if (response.ok) {
        console.log("the Data in object has been sent");
      }
    } catch (error) {
      console.error("Error uploading the Data (catch)", error);
    }
  };

  useEffect(() => {
    if (object.title_in_nav) {
      setTranslationEN((prev) => ({
        ...prev,
        [object.title_in_nav]: titleInNavInEN,
        ...translation_M_Intro_One_EN,
        ...translation_M_Section_One_EN,
        ...translation_M_Section_Two_EN,
        ...translation_M_DBMS_EN,
        ...translation_M_Slider_EN,
        ...translation_M_Steps_EN,
        ...translation_M_Questions_EN,
        ...translation_M_Get_A_Service_EN,
        ...translation_M_Benefits_EN,
        ...translation_M_Intro_Two_EN,
        ...translation_M_Section_Three_EN,
        ...translation_M_Intro_Four_EN,
        ...translation_M_Intro_Five_EN,
        ...translation_M_Game_EN,
        ...translation_M_Slider_Images_EN,
        ...translation_M_Intro_Three_EN,
      }));
      setTranslationAR((prev) => ({
        ...prev,
        [object.title_in_nav]: titleInNavInAR,
        ...translation_M_Intro_One_AR,
        ...translation_M_Section_One_AR,
        ...translation_M_Section_Two_AR,
        ...translation_M_DBMS_AR,
        ...translation_M_Slider_AR,
        ...translation_M_Steps_AR,
        ...translation_M_Questions_AR,
        ...translation_M_Get_A_Service_AR,
        ...translation_M_Benefits_AR,
        ...translation_M_Intro_Two_AR,
        ...translation_M_Section_Three_AR,
        ...translation_M_Intro_Four_AR,
        ...translation_M_Intro_Five_AR,
        ...translation_M_Game_AR,
        ...translation_M_Slider_Images_AR,
        ...translation_M_Intro_Three_AR,
      }));
      setTranslationDE((prev) => ({
        ...prev,
        [object.title_in_nav]: titleInNavInDE,
        ...translation_M_Intro_One_DE,
        ...translation_M_Section_One_DE,
        ...translation_M_Section_Two_DE,
        ...translation_M_DBMS_DE,
        ...translation_M_Slider_DE,
        ...translation_M_Steps_DE,
        ...translation_M_Questions_DE,
        ...translation_M_Get_A_Service_DE,
        ...translation_M_Benefits_DE,
        ...translation_M_Intro_Two_DE,
        ...translation_M_Section_Three_DE,
        ...translation_M_Intro_Four_DE,
        ...translation_M_Intro_Five_DE,
        ...translation_M_Game_DE,
        ...translation_M_Slider_Images_DE,
        translation_M_Intro_Three_DE,
      }));
    }
  }, [
    translation_M_Intro_One_EN,
    translation_M_Section_One_EN,
    translation_M_DBMS_EN,
    translation_M_Intro_One_AR,
    translation_M_Section_One_AR,
    translation_M_DBMS_AR,
    translation_M_Intro_One_DE,
    translation_M_Section_One_DE,
    translation_M_DBMS_DE,
    translation_M_Slider_EN,
    translation_M_Steps_EN,
    translation_M_Slider_AR,
    translation_M_Steps_AR,
    translation_M_Slider_DE,
    translation_M_Steps_DE,
    translation_M_Benefits_EN,
    translation_M_Benefits_AR,
    translation_M_Benefits_DE,
    translation_M_Section_Two_EN,
    translation_M_Section_Two_AR,
    translation_M_Section_Two_DE,
    translation_M_Intro_Two_EN,
    translation_M_Intro_Two_AR,
    translation_M_Intro_Two_DE,
    translation_M_Section_Three_EN,
    translation_M_Section_Three_AR,
    translation_M_Section_Three_DE,
    translation_M_Intro_Four_EN,
    translation_M_Intro_Four_AR,
    translation_M_Intro_Four_DE,
    translation_M_Intro_Five_EN,
    translation_M_Intro_Five_AR,
    translation_M_Intro_Five_DE,
    translation_M_Game_EN,
    translation_M_Game_AR,
    translation_M_Game_DE,
    translation_M_Slider_Images_EN,
    translation_M_Slider_Images_AR,
    translation_M_Slider_Images_DE,
    translation_M_Intro_Three_EN,
    translation_M_Intro_Three_AR,
    translation_M_Intro_Three_DE,
    translation_M_Questions_EN,
    translation_M_Questions_AR,
    translation_M_Questions_DE,
    translation_M_Get_A_Service_EN,
    translation_M_Get_A_Service_AR,
    translation_M_Get_A_Service_DE,
  ]);

  const handelTranslate = async () => {
    try {
      // console.log(translationEN);

      // Fetch requests
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

      // AR
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

      // DE
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

  // handel Submit
  const handleSubmit = (e) => {
    console.log("handleSubmit");
    e.preventDefault();
    handelObject();
    handelTranslate();
  };

  // console.log(data)
  console.log(object);

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-gray-100 py-10 px-2">
        <div className="container mx-auto flex flex-col gap-10">
          {/* first row */}
          <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
            <Dropdown
              label="Classification"
              size="sm"
              style={{
                backgroundColor: "#166FE7",
              }}
              className="shadow-lg shadow-blue-gray-800"
            >
              <Dropdown.Item
                value="services"
                onClick={() => setClassification("services")}
              >
                Services
              </Dropdown.Item>
              <Dropdown.Item
                value="solutions"
                onClick={() => setClassification("solutions")}
              >
                Solutions
              </Dropdown.Item>
              <Dropdown.Item
                value="systems"
                onClick={() => setClassification("systems")}
              >
                Systems
              </Dropdown.Item>
            </Dropdown>
            {classification && classification === "services" && (
              <Dropdown
                label="Category"
                size="sm"
                style={{
                  backgroundColor: "#166FE7",
                }}
                className="shadow-lg shadow-blue-gray-800"
              >
                <Dropdown.Item
                  value="design-&-devlopment"
                  onClick={() => setCategory("design-&-devlopment")}
                >
                  Design & Devlopment
                </Dropdown.Item>
                <Dropdown.Item
                  value="hosting-services"
                  onClick={() => setCategory("hosting-services")}
                >
                  Hosting Services
                </Dropdown.Item>
                <Dropdown.Item
                  value="digital-marketing-services"
                  onClick={() => setCategory("digital-marketing-services")}
                >
                  Digital marketing services
                </Dropdown.Item>
                <Dropdown.Item
                  value="additional-services"
                  onClick={() => setCategory("additional-services")}
                >
                  Additional Services
                </Dropdown.Item>
              </Dropdown>
            )}
            {classification && classification === "solutions" && (
              <Dropdown
                label="Category"
                size="sm"
                style={{
                  backgroundColor: "#166FE7",
                }}
                className="shadow-lg shadow-blue-gray-800"
              >
                <Dropdown.Item
                  value="e-commerce-solution"
                  onClick={() => setCategory("e-commerce-solution")}
                >
                  E-commerce Solution
                </Dropdown.Item>
                <Dropdown.Item
                  value="pickup-solutions"
                  onClick={() => setCategory("pickup-solutions")}
                >
                  Pickup Solutions
                </Dropdown.Item>
                <Dropdown.Item
                  value="ride-hailing-solutions"
                  onClick={() => setCategory("ride-hailing-solutions")}
                >
                  Ride-hailing Solutions
                </Dropdown.Item>
                <Dropdown.Item
                  value="social-media-solutions"
                  onClick={() => setCategory("social-media-solutions")}
                >
                  Social Media Solutions
                </Dropdown.Item>
              </Dropdown>
            )}
            {classification && classification === "systems" && (
              <Dropdown
                label="Category"
                size="sm"
                style={{
                  backgroundColor: "#166FE7",
                }}
                className="shadow-lg shadow-blue-gray-800"
              >
                <Dropdown.Item
                  value="comprehensive-business-systems"
                  onClick={() => setCategory("comprehensive-business-systems")}
                >
                  Comprehensive Business Systems
                </Dropdown.Item>
              </Dropdown>
            )}
          </div>

          {/* second row */}
          <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
            <div>
              <div className="w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-in-nav"
                    value="title-in-nav"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-in-nav"
                  style={{
                    fontSize: "16px",
                  }}
                  onChange={(e) =>
                    setObject((object) => ({
                      ...object,
                      title_in_nav: e.target.value,
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
                htmlFor="title-in-nav-myTextarea-EN"
                value="Enter your sentence in English:"
                style={{
                  fontSize: "16px",
                }}
              />
              <Textarea
                id="title-in-nav-myTextarea-EN"
                style={{
                  fontSize: "16px",
                }}
                value={titleInNavInEN}
                onChange={(e) => setTitleInNavInEN(e.target.value)}
                sizing="sm"
                placeholder="please type your sentence..."
              />
            </div>
            {/* in ar */}
            <div className="flex flex-col gap-2 w-72">
              <Label
                htmlFor="title-in-nav-myTextarea-AR"
                value="Enter your sentence in Arabic:"
                style={{
                  fontSize: "16px",
                }}
              />
              <Textarea
                id="title-in-nav-myTextarea-EN"
                style={{
                  fontSize: "16px",
                }}
                value={titleInNavInAR}
                onChange={(e) => setTitleInNavInAR(e.target.value)}
                sizing="sm"
                placeholder="please type your sentence..."
              />
            </div>
            {/* in de */}
            <div className="flex flex-col gap-2 w-72">
              <Label
                htmlFor="title-in-nav-myTextarea-DE"
                value="Enter your sentence in Dautch:"
                style={{
                  fontSize: "16px",
                }}
              />
              <Textarea
                id="title-in-nav-myTextarea-DE"
                style={{
                  fontSize: "16px",
                }}
                value={titleInNavInDE}
                onChange={(e) => setTitleInNavInDE(e.target.value)}
                sizing="sm"
                placeholder="please type your sentence..."
              />
            </div>
            {/* upload icon (img) */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="icon-in-nav-dropzone-file"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={handleUploadImage_icon_in_nav}
                />
              </form>

              <Label
                htmlFor="icon-in-nav-dropzone-file"
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
                    icon in navbar
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG
                  </p>
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
                {object.icon_in_nav && (
                  <img
                    src={object.icon_in_nav}
                    alt="icon-in-nav-dropzone-file"
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

          {/* third row */}
          <div className="mx-auto lg:mx-0 ">
            <div className="w-72 ">
              <div className="mb-2 block w-full">
                <Label
                  htmlFor="small"
                  value="path/of/page"
                  style={{
                    fontSize: "16px",
                  }}
                />
              </div>
              <TextInput
                id="small"
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
                placeholder="please-type-like-this"
              />
            </div>
          </div>

          {/* fourth row */}
          <div className="flex gap-5 flex-wrap items-center justify-center">
            {classification === "solutions" &&
              solutions_Components.map((component, i) => (
                <label
                  key={i}
                  className="flex gap-x-2 items-center py-2 px-4 bg-[#166FE7] text-white rounded-lg shadow-lg shadow-blue-gray-800 hover:cursor-pointer"
                >
                  <input
                    type="checkbox"
                    name={component}
                    checked={solutionsComponents[component]}
                    onChange={handleChangeComponents}
                  />
                  {component}
                </label>
              ))}
            {classification === "services" &&
              services_Components.map((component) => (
                <label
                  className="flex gap-x-2 items-center py-2 px-4 bg-[#166FE7] text-white rounded-lg shadow-lg shadow-blue-gray-800 hover:cursor-pointer"
                  key={component}
                >
                  <input
                    type="checkbox"
                    name={component}
                    checked={servicesComponents[component] || false}
                    onChange={handleChangeComponents}
                  />
                  {component}
                </label>
              ))}
            {classification === "systems" &&
              systems_Components.map((component) => (
                <label
                  className="flex gap-x-2 items-center py-2 px-4 bg-[#166FE7] text-white rounded-lg shadow-lg shadow-blue-gray-800 hover:cursor-pointer"
                  key={component}
                >
                  <input
                    type="checkbox"
                    name={component}
                    checked={systemsComponents[component] || false}
                    onChange={handleChangeComponents}
                  />
                  {component}
                </label>
              ))}
          </div>

          {/* fives row */}
          {/* models */}
          <div className="flex gap-5 justify-start items-center flex-wrap mb-10">
            {(classification === "solutions" ||
              classification === "services" ||
              classification === "systems") &&
              (solutionsComponents.M_Intro_One ||
                servicesComponents.M_Intro_One ||
                systemsComponents.M_Intro_One) && (
                <Model_M_Intro_One
                  data={data}
                  setData={setData}
                  domain={domain}
                  setTranslation_M_Intro_One_EN={setTranslation_M_Intro_One_EN}
                  setTranslation_M_Intro_One_AR={setTranslation_M_Intro_One_AR}
                  setTranslation_M_Intro_One_DE={setTranslation_M_Intro_One_DE}
                />
              )}
            {(classification === "solutions" ||
              classification === "services" ||
              classification === "systems") &&
              (solutionsComponents.M_Section_One ||
                servicesComponents.M_Section_One ||
                systemsComponents.M_Section_One) && (
                <Model_M_Section_One
                  data={data}
                  setData={setData}
                  domain={domain}
                  setTranslation_M_Section_One_EN={
                    setTranslation_M_Section_One_EN
                  }
                  setTranslation_M_Section_One_AR={
                    setTranslation_M_Section_One_AR
                  }
                  setTranslation_M_Section_One_DE={
                    setTranslation_M_Section_One_DE
                  }
                />
              )}
            {(classification === "solutions" ||
              classification === "services") &&
              (solutionsComponents.M_DBMS || servicesComponents.M_DBMS) && (
                <Model_M_DBMS
                  data={data}
                  setData={setData}
                  domain={domain}
                  setTranslation_M_DBMS_EN={setTranslation_M_DBMS_EN}
                  setTranslation_M_DBMS_AR={setTranslation_M_DBMS_AR}
                  setTranslation_M_DBMS_DE={setTranslation_M_DBMS_DE}
                />
              )}
            {(classification === "solutions" ||
              classification === "services" ||
              classification === "systems") &&
              (solutionsComponents.M_Slider ||
                servicesComponents.M_Slider ||
                systemsComponents.M_Slider) && (
                <Model_M_Slider
                  data={data}
                  setData={setData}
                  domain={domain}
                  setTranslation_M_Slider_EN={setTranslation_M_Slider_EN}
                  setTranslation_M_Slider_AR={setTranslation_M_Slider_AR}
                  setTranslation_M_Slider_DE={setTranslation_M_Slider_DE}
                />
              )}
            {(classification === "solutions" ||
              classification === "services" ||
              classification === "systems") &&
              (solutionsComponents.M_Steps ||
                servicesComponents.M_Steps ||
                systemsComponents.M_Steps) && (
                <Model_M_Steps
                  data={data}
                  setData={setData}
                  domain={domain}
                  setTranslation_M_Steps_EN={setTranslation_M_Steps_EN}
                  setTranslation_M_Steps_AR={setTranslation_M_Steps_AR}
                  setTranslation_M_Steps_DE={setTranslation_M_Steps_DE}
                />
              )}
            {classification === "services" &&
              servicesComponents.M_Questions && (
                <Model_M_Questions
                  data={data}
                  setData={setData}
                  setTranslation_M_Questions_EN={setTranslation_M_Questions_EN}
                  setTranslation_M_Questions_AR={setTranslation_M_Questions_AR}
                  setTranslation_M_Questions_DE={setTranslation_M_Questions_DE}
                />
              )}
            {(classification === "solutions" ||
              classification === "services" ||
              classification === "systems") &&
              (solutionsComponents.M_Get_A_Service ||
                servicesComponents.M_Get_A_Service ||
                systemsComponents.M_Get_A_Service) && (
                <Model_M_Get_A_Service
                  data={data}
                  setData={setData}
                  domain={domain}
                  setTranslation_M_Get_A_Service_EN={
                    setTranslation_M_Get_A_Service_EN
                  }
                  setTranslation_M_Get_A_Service_AR={
                    setTranslation_M_Get_A_Service_AR
                  }
                  setTranslation_M_Get_A_Service_DE={
                    setTranslation_M_Get_A_Service_DE
                  }
                />
              )}
            {(classification === "solutions" ||
              classification === "services" ||
              classification === "systems") &&
              (solutionsComponents.M_Benefits ||
                servicesComponents.M_Benefits ||
                systemsComponents.M_Benefits) && (
                <Model_M_Benefits
                  data={data}
                  setData={setData}
                  domain={domain}
                  setTranslation_M_Benefits_EN={setTranslation_M_Benefits_EN}
                  setTranslation_M_Benefits_AR={setTranslation_M_Benefits_AR}
                  setTranslation_M_Benefits_DE={setTranslation_M_Benefits_DE}
                />
              )}
            {(classification === "services" ||
              classification === "systems" ||
              classification === "solutions") &&
              (servicesComponents.M_Section_Two ||
                systemsComponents.M_Section_Two ||
                solutionsComponents.M_Section_Two) && (
                <Model_M_Section_Two
                  data={data}
                  domain={domain}
                  setData={setData}
                  setTranslation_M_Section_Two_EN={
                    setTranslation_M_Section_Two_EN
                  }
                  setTranslation_M_Section_Two_AR={
                    setTranslation_M_Section_Two_AR
                  }
                  setTranslation_M_Section_Two_DE={
                    setTranslation_M_Section_Two_DE
                  }
                />
              )}
            {classification === "services" &&
              servicesComponents.M_Section_Three && (
                <Model_M_Section_Three
                  data={data}
                  domain={domain}
                  setData={setData}
                  setTranslation_M_Section_Three_EN={
                    setTranslation_M_Section_Three_EN
                  }
                  setTranslation_M_Section_Three_AR={
                    setTranslation_M_Section_Three_AR
                  }
                  setTranslation_M_Section_Three_DE={
                    setTranslation_M_Section_Three_DE
                  }
                />
              )}
            {(classification === "services" || classification === "systems") &&
              (servicesComponents.M_Intro_Two ||
                systemsComponents.M_Intro_Two) && (
                <Model_M_Intro_Two
                  data={data}
                  domain={domain}
                  setData={setData}
                  setTranslation_M_Intro_Two_EN={setTranslation_M_Intro_Two_EN}
                  setTranslation_M_Intro_Two_AR={setTranslation_M_Intro_Two_AR}
                  setTranslation_M_Intro_Two_DE={setTranslation_M_Intro_Two_DE}
                />
              )}
            {classification === "solutions" &&
              solutionsComponents.M_Intro_Three && (
                <Model_M_Intro_Three
                  domain={domain}
                  data={data}
                  setData={setData}
                  setTranslation_M_Intro_Three_EN={
                    setTranslation_M_Intro_Three_EN
                  }
                  setTranslation_M_Intro_Three_AR={
                    setTranslation_M_Intro_Three_AR
                  }
                  setTranslation_M_Intro_Three_DE={
                    setTranslation_M_Intro_Three_DE
                  }
                />
              )}
            {(classification === "solutions" ||
              classification === "services" ||
              classification === "systems") &&
              (solutionsComponents.M_Intro_Four ||
                servicesComponents.M_Intro_Four ||
                systemsComponents.M_Intro_Four) && (
                <Model_M_Intro_Four
                  data={data}
                  domain={domain}
                  setData={setData}
                  setTranslation_M_Intro_Four_EN={
                    setTranslation_M_Intro_Four_EN
                  }
                  setTranslation_M_Intro_Four_AR={
                    setTranslation_M_Intro_Four_AR
                  }
                  setTranslation_M_Intro_Four_DE={
                    setTranslation_M_Intro_Four_DE
                  }
                />
              )}
            {classification === "solutions" &&
              solutionsComponents.M_Intro_Five && (
                <Model_M_Intro_Five
                  data={data}
                  domain={domain}
                  setData={setData}
                  setTranslation_M_Intro_Five_EN={
                    setTranslation_M_Intro_Five_EN
                  }
                  setTranslation_M_Intro_Five_AR={
                    setTranslation_M_Intro_Five_AR
                  }
                  setTranslation_M_Intro_Five_DE={
                    setTranslation_M_Intro_Five_DE
                  }
                />
              )}
            {classification === "solutions" && solutionsComponents.M_Game && (
              <Model_M_Game
                data={data}
                domain={domain}
                setData={setData}
                setTranslation_M_Game_EN={setTranslation_M_Game_EN}
                setTranslation_M_Game_AR={setTranslation_M_Game_AR}
                setTranslation_M_Game_DE={setTranslation_M_Game_DE}
              />
            )}
            {classification === "systems" &&
              systemsComponents.M_Slider_Images && (
                <Model_M_Slider_Images
                  data={data}
                  domain={domain}
                  setData={setData}
                  setTranslation_M_Slider_Images_EN={
                    setTranslation_M_Slider_Images_EN
                  }
                  setTranslation_M_Slider_Images_AR={
                    setTranslation_M_Slider_Images_AR
                  }
                  setTranslation_M_Slider_Images_DE={
                    setTranslation_M_Slider_Images_DE
                  }
                />
              )}
          </div>
        </div>
        {imageUploadError && <Alert color="failure">{imageUploadError}</Alert>}
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
