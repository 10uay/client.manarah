import {
  Button,
  Modal,
  Label,
  TextInput,
  Textarea,
  useState,
  useEffect,
  useRef,
  axios,
  CircularProgressbar,
} from "@/utils/Imports";
import { Alert } from "flowbite-react";
import "react-circular-progressbar/dist/styles.css";

export default function Model_M_DBMS({
  domain,
  data,
  setData,
  setTranslation_M_DBMS_EN,
  setTranslation_M_DBMS_AR,
  setTranslation_M_DBMS_DE,
}) {
  const [openModal, setOpenModal] = useState(false);

  //
  const [imagePercent, setImagePercent] = useState();
  const fileRef = useRef(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  const [imageUploadError, setImageUploadError] = useState(false);

  //

  // title
  const [translateTitle, setTranslateTitle] = useState("");
  const [translateTitleInEN, setTranslateTitleInEN] = useState("");
  const [translateTitleInAR, setTranslateTitleInAR] = useState("");
  const [translateTitleInDE, setTranslateTitleInDE] = useState("");

  // services
  // service 1
  // title 1
  const [translateTitle_One, setTranslateTitle_One] = useState("");
  const [translateTitle_OneInEN, setTranslateTitle_OneInEN] = useState("");
  const [translateTitle_OneInAR, setTranslateTitle_OneInAR] = useState("");
  const [translateTitle_OneInDE, setTranslateTitle_OneInDE] = useState("");
  // para 1
  const [translatePara_One, setTranslatePara_One] = useState("");
  const [translatePara_OneInEN, setTranslatePara_OneInEN] = useState("");
  const [translatePara_OneInAR, setTranslatePara_OneInAR] = useState("");
  const [translatePara_OneInDE, setTranslatePara_OneInDE] = useState("");
  // service 2
  // title 2
  const [translateTitle_Two, setTranslateTitle_Two] = useState("");
  const [translateTitle_TwoInEN, setTranslateTitle_TwoInEN] = useState("");
  const [translateTitle_TwoInAR, setTranslateTitle_TwoInAR] = useState("");
  const [translateTitle_TwoInDE, setTranslateTitle_TwoInDE] = useState("");
  // para 2
  const [translatePara_Two, setTranslatePara_Two] = useState("");
  const [translatePara_TwoInEN, setTranslatePara_TwoInEN] = useState("");
  const [translatePara_TwoInAR, setTranslatePara_TwoInAR] = useState("");
  const [translatePara_TwoInDE, setTranslatePara_TwoInDE] = useState("");
  // service 3
  // title 3
  const [translateTitle_Three, setTranslateTitle_Three] = useState("");
  const [translateTitle_ThreeInEN, setTranslateTitle_ThreeInEN] = useState("");
  const [translateTitle_ThreeInAR, setTranslateTitle_ThreeInAR] = useState("");
  const [translateTitle_ThreeInDE, setTranslateTitle_ThreeInDE] = useState("");
  // para 3
  const [translatePara_Three, setTranslatePara_Three] = useState("");
  const [translatePara_ThreeInEN, setTranslatePara_ThreeInEN] = useState("");
  const [translatePara_ThreeInAR, setTranslatePara_ThreeInAR] = useState("");
  const [translatePara_ThreeInDE, setTranslatePara_ThreeInDE] = useState("");
  // service 4
  // title 4
  const [translateTitle_Four, setTranslateTitle_Four] = useState("");
  const [translateTitle_FourInEN, setTranslateTitle_FourInEN] = useState("");
  const [translateTitle_FourInAR, setTranslateTitle_FourInAR] = useState("");
  const [translateTitle_FourInDE, setTranslateTitle_FourInDE] = useState("");
  // para 4
  const [translatePara_Four, setTranslatePara_Four] = useState("");
  const [translatePara_FourInEN, setTranslatePara_FourInEN] = useState("");
  const [translatePara_FourInAR, setTranslatePara_FourInAR] = useState("");
  const [translatePara_FourInDE, setTranslatePara_FourInDE] = useState("");
  // service 5
  // title 5
  const [translateTitle_Five, setTranslateTitle_Five] = useState("");
  const [translateTitle_FiveInEN, setTranslateTitle_FiveInEN] = useState("");
  const [translateTitle_FiveInAR, setTranslateTitle_FiveInAR] = useState("");
  const [translateTitle_FiveInDE, setTranslateTitle_FiveInDE] = useState("");
  // para 5
  const [translatePara_Five, setTranslatePara_Five] = useState("");
  const [translatePara_FiveInEN, setTranslatePara_FiveInEN] = useState("");
  const [translatePara_FiveInAR, setTranslatePara_FiveInAR] = useState("");
  const [translatePara_FiveInDE, setTranslatePara_FiveInDE] = useState("");

  // dir
  const [dir, setDir] = useState(1);

  // whatsapp button
  const [whatsapp, setWhatsapp] = useState(false);

  // counter
  const [counter, setCounter] = useState(false);

  // 2222222222222
  // title 2
  const [translateTitle_2, setTranslateTitle_2] = useState("");
  const [translateTitle_2InEN, setTranslateTitle_2InEN] = useState("");
  const [translateTitle_2InAR, setTranslateTitle_2InAR] = useState("");
  const [translateTitle_2InDE, setTranslateTitle_2InDE] = useState("");

  // services 2
  // service 1
  // title 1
  const [translateTitle_2_One, setTranslateTitle_2_One] = useState("");
  const [translateTitle_2_OneInEN, setTranslateTitle_2_OneInEN] = useState("");
  const [translateTitle_2_OneInAR, setTranslateTitle_2_OneInAR] = useState("");
  const [translateTitle_2_OneInDE, setTranslateTitle_2_OneInDE] = useState("");
  // para 1
  const [translatePara_2_One, setTranslatePara_2_One] = useState("");
  const [translatePara_2_OneInEN, setTranslatePara_2_OneInEN] = useState("");
  const [translatePara_2_OneInAR, setTranslatePara_2_OneInAR] = useState("");
  const [translatePara_2_OneInDE, setTranslatePara_2_OneInDE] = useState("");
  // service 2
  // title 2
  const [translateTitle_2_Two, setTranslateTitle_2_Two] = useState("");
  const [translateTitle_2_TwoInEN, setTranslateTitle_2_TwoInEN] = useState("");
  const [translateTitle_2_TwoInAR, setTranslateTitle_2_TwoInAR] = useState("");
  const [translateTitle_2_TwoInDE, setTranslateTitle_2_TwoInDE] = useState("");
  // para 2
  const [translatePara_2_Two, setTranslatePara_2_Two] = useState("");
  const [translatePara_2_TwoInEN, setTranslatePara_2_TwoInEN] = useState("");
  const [translatePara_2_TwoInAR, setTranslatePara_2_TwoInAR] = useState("");
  const [translatePara_2_TwoInDE, setTranslatePara_2_TwoInDE] = useState("");
  // service 3
  // title 3
  const [translateTitle_2_Three, setTranslateTitle_2_Three] = useState("");
  const [translateTitle_2_ThreeInEN, setTranslateTitle_2_ThreeInEN] =
    useState("");
  const [translateTitle_2_ThreeInAR, setTranslateTitle_2_ThreeInAR] =
    useState("");
  const [translateTitle_2_ThreeInDE, setTranslateTitle_2_ThreeInDE] =
    useState("");
  // para 3
  const [translatePara_2_Three, setTranslatePara_2_Three] = useState("");
  const [translatePara_2_ThreeInEN, setTranslatePara_2_ThreeInEN] =
    useState("");
  const [translatePara_2_ThreeInAR, setTranslatePara_2_ThreeInAR] =
    useState("");
  const [translatePara_2_ThreeInDE, setTranslatePara_2_ThreeInDE] =
    useState("");
  // service 4
  // title 4
  const [translateTitle_2_Four, setTranslateTitle_2_Four] = useState("");
  const [translateTitle_2_FourInEN, setTranslateTitle_2_FourInEN] =
    useState("");
  const [translateTitle_2_FourInAR, setTranslateTitle_2_FourInAR] =
    useState("");
  const [translateTitle_2_FourInDE, setTranslateTitle_2_FourInDE] =
    useState("");
  // para 4
  const [translatePara_2_Four, setTranslatePara_2_Four] = useState("");
  const [translatePara_2_FourInEN, setTranslatePara_2_FourInEN] = useState("");
  const [translatePara_2_FourInAR, setTranslatePara_2_FourInAR] = useState("");
  const [translatePara_2_FourInDE, setTranslatePara_2_FourInDE] = useState("");
  // service 5
  // title 5
  const [translateTitle_2_Five, setTranslateTitle_2_Five] = useState("");
  const [translateTitle_2_FiveInEN, setTranslateTitle_2_FiveInEN] =
    useState("");
  const [translateTitle_2_FiveInAR, setTranslateTitle_2_FiveInAR] =
    useState("");
  const [translateTitle_2_FiveInDE, setTranslateTitle_2_FiveInDE] =
    useState("");
  // para 5
  const [translatePara_2_Five, setTranslatePara_2_Five] = useState("");
  const [translatePara_2_FiveInEN, setTranslatePara_2_FiveInEN] = useState("");
  const [translatePara_2_FiveInAR, setTranslatePara_2_FiveInAR] = useState("");
  const [translatePara_2_FiveInDE, setTranslatePara_2_FiveInDE] = useState("");

  // dir
  const [dir_2, setDir_2] = useState(1);

  // whatsapp button
  const [whatsapp_2, setWhatsapp_2] = useState(false);

  // counter
  const [counter_2, setCounter_2] = useState(false);

  // 3333333333333
  // title 3
  const [translateTitle_3, setTranslateTitle_3] = useState("");
  const [translateTitle_3InEN, setTranslateTitle_3InEN] = useState("");
  const [translateTitle_3InAR, setTranslateTitle_3InAR] = useState("");
  const [translateTitle_3InDE, setTranslateTitle_3InDE] = useState("");

  // services 3
  // service 1
  // title 1
  const [translateTitle_3_One, setTranslateTitle_3_One] = useState("");
  const [translateTitle_3_OneInEN, setTranslateTitle_3_OneInEN] = useState("");
  const [translateTitle_3_OneInAR, setTranslateTitle_3_OneInAR] = useState("");
  const [translateTitle_3_OneInDE, setTranslateTitle_3_OneInDE] = useState("");
  // para 1
  const [translatePara_3_One, setTranslatePara_3_One] = useState("");
  const [translatePara_3_OneInEN, setTranslatePara_3_OneInEN] = useState("");
  const [translatePara_3_OneInAR, setTranslatePara_3_OneInAR] = useState("");
  const [translatePara_3_OneInDE, setTranslatePara_3_OneInDE] = useState("");
  // service 2
  // title 2
  const [translateTitle_3_Two, setTranslateTitle_3_Two] = useState("");
  const [translateTitle_3_TwoInEN, setTranslateTitle_3_TwoInEN] = useState("");
  const [translateTitle_3_TwoInAR, setTranslateTitle_3_TwoInAR] = useState("");
  const [translateTitle_3_TwoInDE, setTranslateTitle_3_TwoInDE] = useState("");
  // para 2
  const [translatePara_3_Two, setTranslatePara_3_Two] = useState("");
  const [translatePara_3_TwoInEN, setTranslatePara_3_TwoInEN] = useState("");
  const [translatePara_3_TwoInAR, setTranslatePara_3_TwoInAR] = useState("");
  const [translatePara_3_TwoInDE, setTranslatePara_3_TwoInDE] = useState("");
  // service 3
  // title 3
  const [translateTitle_3_Three, setTranslateTitle_3_Three] = useState("");
  const [translateTitle_3_ThreeInEN, setTranslateTitle_3_ThreeInEN] =
    useState("");
  const [translateTitle_3_ThreeInAR, setTranslateTitle_3_ThreeInAR] =
    useState("");
  const [translateTitle_3_ThreeInDE, setTranslateTitle_3_ThreeInDE] =
    useState("");
  // para 3
  const [translatePara_3_Three, setTranslatePara_3_Three] = useState("");
  const [translatePara_3_ThreeInEN, setTranslatePara_3_ThreeInEN] =
    useState("");
  const [translatePara_3_ThreeInAR, setTranslatePara_3_ThreeInAR] =
    useState("");
  const [translatePara_3_ThreeInDE, setTranslatePara_3_ThreeInDE] =
    useState("");
  // service 4
  // title 4
  const [translateTitle_3_Four, setTranslateTitle_3_Four] = useState("");
  const [translateTitle_3_FourInEN, setTranslateTitle_3_FourInEN] =
    useState("");
  const [translateTitle_3_FourInAR, setTranslateTitle_3_FourInAR] =
    useState("");
  const [translateTitle_3_FourInDE, setTranslateTitle_3_FourInDE] =
    useState("");
  // para 4
  const [translatePara_3_Four, setTranslatePara_3_Four] = useState("");
  const [translatePara_3_FourInEN, setTranslatePara_3_FourInEN] = useState("");
  const [translatePara_3_FourInAR, setTranslatePara_3_FourInAR] = useState("");
  const [translatePara_3_FourInDE, setTranslatePara_3_FourInDE] = useState("");
  // service 5
  // title 5
  const [translateTitle_3_Five, setTranslateTitle_3_Five] = useState("");
  const [translateTitle_3_FiveInEN, setTranslateTitle_3_FiveInEN] =
    useState("");
  const [translateTitle_3_FiveInAR, setTranslateTitle_3_FiveInAR] =
    useState("");
  const [translateTitle_3_FiveInDE, setTranslateTitle_3_FiveInDE] =
    useState("");
  // para 5
  const [translatePara_3_Five, setTranslatePara_3_Five] = useState("");
  const [translatePara_3_FiveInEN, setTranslatePara_3_FiveInEN] = useState("");
  const [translatePara_3_FiveInAR, setTranslatePara_3_FiveInAR] = useState("");
  const [translatePara_3_FiveInDE, setTranslatePara_3_FiveInDE] = useState("");

  // dir
  const [dir_3, setDir_3] = useState(1);

  // whatsapp button
  const [whatsapp_3, setWhatsapp_3] = useState(false);

  // counter
  const [counter_3, setCounter_3] = useState(false);

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
      [data.M_DBMS[0].title]: translateTitleInEN,
      [data.M_DBMS[0].services[0].title]: translateTitle_OneInEN,
      [data.M_DBMS[0].services[0].para]: translatePara_OneInEN,
      [data.M_DBMS[0].services[1].title]: translateTitle_TwoInEN,
      [data.M_DBMS[0].services[1].para]: translatePara_TwoInEN,
      [data.M_DBMS[0].services[2].title]: translateTitle_ThreeInEN,
      [data.M_DBMS[0].services[2].para]: translatePara_ThreeInEN,
      [data.M_DBMS[0].services[3].title]: translateTitle_FourInEN,
      [data.M_DBMS[0].services[3].para]: translatePara_FourInEN,
      [data.M_DBMS[0].services[4].title]: translateTitle_FiveInEN,
      [data.M_DBMS[0].services[4].para]: translatePara_FiveInEN,

      [data.M_DBMS[1].title]: translateTitle_2InEN,
      [data.M_DBMS[1].services[0].title]: translateTitle_2_OneInEN,
      [data.M_DBMS[1].services[0].para]: translatePara_2_OneInEN,
      [data.M_DBMS[1].services[1].title]: translateTitle_2_TwoInEN,
      [data.M_DBMS[1].services[1].para]: translatePara_2_TwoInEN,
      [data.M_DBMS[1].services[2].title]: translateTitle_2_ThreeInEN,
      [data.M_DBMS[1].services[2].para]: translatePara_2_ThreeInEN,
      [data.M_DBMS[1].services[3].title]: translateTitle_2_FourInEN,
      [data.M_DBMS[1].services[3].para]: translatePara_2_FourInEN,
      [data.M_DBMS[1].services[4].title]: translateTitle_2_FiveInEN,
      [data.M_DBMS[1].services[4].para]: translatePara_2_FiveInEN,

      [data.M_DBMS[2].title]: translateTitle_3InEN,
      [data.M_DBMS[2].services[0].title]: translateTitle_3_OneInEN,
      [data.M_DBMS[2].services[0].para]: translatePara_3_OneInEN,
      [data.M_DBMS[2].services[1].title]: translateTitle_3_TwoInEN,
      [data.M_DBMS[2].services[1].para]: translatePara_3_TwoInEN,
      [data.M_DBMS[2].services[2].title]: translateTitle_3_ThreeInEN,
      [data.M_DBMS[2].services[2].para]: translatePara_3_ThreeInEN,
      [data.M_DBMS[2].services[3].title]: translateTitle_3_FourInEN,
      [data.M_DBMS[2].services[3].para]: translatePara_3_FourInEN,
      [data.M_DBMS[2].services[4].title]: translateTitle_3_FiveInEN,
      [data.M_DBMS[2].services[4].para]: translatePara_3_FiveInEN,
    });

    const sanitizedTranslationAR = sanitizeTranslations({
      [data.M_DBMS[0].title]: translateTitleInAR,
      [data.M_DBMS[0].services[0].title]: translateTitle_OneInAR,
      [data.M_DBMS[0].services[0].para]: translatePara_OneInAR,
      [data.M_DBMS[0].services[1].title]: translateTitle_TwoInAR,
      [data.M_DBMS[0].services[1].para]: translatePara_TwoInAR,
      [data.M_DBMS[0].services[2].title]: translateTitle_ThreeInAR,
      [data.M_DBMS[0].services[2].para]: translatePara_ThreeInAR,
      [data.M_DBMS[0].services[3].title]: translateTitle_FourInAR,
      [data.M_DBMS[0].services[3].para]: translatePara_FourInAR,
      [data.M_DBMS[0].services[4].title]: translateTitle_FiveInAR,
      [data.M_DBMS[0].services[4].para]: translatePara_FiveInAR,

      [data.M_DBMS[1].title]: translateTitle_2InAR,
      [data.M_DBMS[1].services[0].title]: translateTitle_2_OneInAR,
      [data.M_DBMS[1].services[0].para]: translatePara_2_OneInAR,
      [data.M_DBMS[1].services[1].title]: translateTitle_2_TwoInAR,
      [data.M_DBMS[1].services[1].para]: translatePara_2_TwoInAR,
      [data.M_DBMS[1].services[2].title]: translateTitle_2_ThreeInAR,
      [data.M_DBMS[1].services[2].para]: translatePara_2_ThreeInAR,
      [data.M_DBMS[1].services[3].title]: translateTitle_2_FourInAR,
      [data.M_DBMS[1].services[3].para]: translatePara_2_FourInAR,
      [data.M_DBMS[1].services[4].title]: translateTitle_2_FiveInAR,
      [data.M_DBMS[1].services[4].para]: translatePara_2_FiveInAR,

      [data.M_DBMS[2].title]: translateTitle_3InAR,
      [data.M_DBMS[2].services[0].title]: translateTitle_3_OneInAR,
      [data.M_DBMS[2].services[0].para]: translatePara_3_OneInAR,
      [data.M_DBMS[2].services[1].title]: translateTitle_3_TwoInAR,
      [data.M_DBMS[2].services[1].para]: translatePara_3_TwoInAR,
      [data.M_DBMS[2].services[2].title]: translateTitle_3_ThreeInAR,
      [data.M_DBMS[2].services[2].para]: translatePara_3_ThreeInAR,
      [data.M_DBMS[2].services[3].title]: translateTitle_3_FourInAR,
      [data.M_DBMS[2].services[3].para]: translatePara_3_FourInAR,
      [data.M_DBMS[2].services[4].title]: translateTitle_3_FiveInAR,
      [data.M_DBMS[2].services[4].para]: translatePara_3_FiveInAR,
    });

    const sanitizedTranslationDE = sanitizeTranslations({
      [data.M_DBMS[0].title]: translateTitleInDE,
      [data.M_DBMS[0].services[0].title]: translateTitle_OneInDE,
      [data.M_DBMS[0].services[0].para]: translatePara_OneInDE,
      [data.M_DBMS[0].services[1].title]: translateTitle_TwoInDE,
      [data.M_DBMS[0].services[1].para]: translatePara_TwoInDE,
      [data.M_DBMS[0].services[2].title]: translateTitle_ThreeInDE,
      [data.M_DBMS[0].services[2].para]: translatePara_ThreeInDE,
      [data.M_DBMS[0].services[3].title]: translateTitle_FourInDE,
      [data.M_DBMS[0].services[3].para]: translatePara_FourInDE,
      [data.M_DBMS[0].services[4].title]: translateTitle_FiveInDE,
      [data.M_DBMS[0].services[4].para]: translatePara_FiveInDE,

      [data.M_DBMS[1].title]: translateTitle_2InDE,
      [data.M_DBMS[1].services[0].title]: translateTitle_2_OneInDE,
      [data.M_DBMS[1].services[0].para]: translatePara_2_OneInDE,
      [data.M_DBMS[1].services[1].title]: translateTitle_2_TwoInDE,
      [data.M_DBMS[1].services[1].para]: translatePara_2_TwoInDE,
      [data.M_DBMS[1].services[2].title]: translateTitle_2_ThreeInDE,
      [data.M_DBMS[1].services[2].para]: translatePara_2_ThreeInDE,
      [data.M_DBMS[1].services[3].title]: translateTitle_2_FourInDE,
      [data.M_DBMS[1].services[3].para]: translatePara_2_FourInDE,
      [data.M_DBMS[1].services[4].title]: translateTitle_2_FiveInDE,
      [data.M_DBMS[1].services[4].para]: translatePara_2_FiveInDE,

      [data.M_DBMS[2].title]: translateTitle_3InDE,
      [data.M_DBMS[2].services[0].title]: translateTitle_3_OneInDE,
      [data.M_DBMS[2].services[0].para]: translatePara_3_OneInDE,
      [data.M_DBMS[2].services[1].title]: translateTitle_3_TwoInDE,
      [data.M_DBMS[2].services[1].para]: translatePara_3_TwoInDE,
      [data.M_DBMS[2].services[2].title]: translateTitle_3_ThreeInDE,
      [data.M_DBMS[2].services[2].para]: translatePara_3_ThreeInDE,
      [data.M_DBMS[2].services[3].title]: translateTitle_3_FourInDE,
      [data.M_DBMS[2].services[3].para]: translatePara_3_FourInDE,
      [data.M_DBMS[2].services[4].title]: translateTitle_3_FiveInDE,
      [data.M_DBMS[2].services[4].para]: translatePara_3_FiveInDE,
    });

    setTranslation_M_DBMS_EN(sanitizedTranslationEN);
    setTranslation_M_DBMS_AR(sanitizedTranslationAR);
    setTranslation_M_DBMS_DE(sanitizedTranslationDE);

    console.log("Sanitized Translations:", {
      en: sanitizedTranslationEN,
      ar: sanitizedTranslationAR,
      de: sanitizedTranslationDE,
    });
  }, [data.M_DBMS]);

  const handleUploadImage = async (e, updateIndex = 0) => {
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
        setData((prevData) => {
          const updatedData = [...prevData.M_DBMS]; // Copy the array
          updatedData[updateIndex] = {
            // Update element based on index
            ...updatedData[updateIndex],
            img: uploadedUrls[0],
          };
          return {
            ...prevData,
            M_DBMS: updatedData,
          };
        });
      }
      console.log(res.data.files);
    } catch (err) {
      if (err) {
        setUploadingImg(false);
        setImageUploadError(true);
      }
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="w-fit">
        DBMS
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="py-2 items-center">
          Terms of Service
        </Modal.Header>
        <Modal.Body className="px-3">
          <img src="/images/M_DBMS.png" alt="m dbms one img" />
          <hr />
          <div className="space-y-6 mt-5">
            {/* title */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-dbms-1"
                    value="title-of-dbms-1"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-dbms-1"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle}
                  onChange={(e) => setTranslateTitle(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-EN-dbms-1"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-EN-dbms-1"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitleInEN}
                  onChange={(e) => setTranslateTitleInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-EN-dbms-1"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitleInAR}
                  onChange={(e) => setTranslateTitleInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-DE-dbms-qq"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-DE-dbms-qq"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitleInDE}
                  onChange={(e) => setTranslateTitleInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <hr />
            {/* the five services 1*/}
            {/* 1111111111111111111111111111111111111111111111111111111111111111111 */}
            {/* services title 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-services-title-one-dbms-ww"
                    value="title-of-services-title-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-services-title-one-dbms-ww"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_One}
                  onChange={(e) => setTranslateTitle_One(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-one-dbms-ww-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-one-dbms-ww-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_OneInEN}
                  onChange={(e) => setTranslateTitle_OneInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-one-dbms-ww-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-one-dbms-ww-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_OneInAR}
                  onChange={(e) => setTranslateTitle_OneInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-one-dbms-ww-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-one-dbms-ww-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_OneInDE}
                  onChange={(e) => setTranslateTitle_OneInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-services-para-one-dbms-ee"
                    value="title-of-services-para-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-services-para-one-dbms-ee"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_One}
                  onChange={(e) => setTranslatePara_One(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-one-dbms-ee-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-one-dbms-ee-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_OneInEN}
                  onChange={(e) => setTranslatePara_OneInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-one-dbms-ee-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-one-dbms-ee-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_OneInAR}
                  onChange={(e) => setTranslatePara_OneInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-one-dbms-ee-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-one-dbms-ee-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_OneInDE}
                  onChange={(e) => setTranslatePara_OneInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 1111111111111111111111111111111111111111111111111111111111111111111 */}
            <hr />
            {/* 2222222222222222222222222222222222222222222222222222222222222222222 */}
            {/* services title 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-services-title-two-dbms-rr"
                    value="title-of-services-title-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-services-title-two-dbms-rr"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_Two}
                  onChange={(e) => setTranslateTitle_Two(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-two-dbms-rr-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-two-dbms-rr-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_TwoInEN}
                  onChange={(e) => setTranslateTitle_TwoInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-two-dbms-rr-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-two-dbms-rr-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_TwoInAR}
                  onChange={(e) => setTranslateTitle_TwoInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-two-dbms-rr-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-two-dbms-rr-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_TwoInDE}
                  onChange={(e) => setTranslateTitle_TwoInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-services-para-two-dbms-tt"
                    value="title-of-services-para-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-services-para-two-dbms-tt"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_Two}
                  onChange={(e) => setTranslatePara_Two(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-two-dbms-tt-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-two-dbms-tt-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_TwoInEN}
                  onChange={(e) => setTranslatePara_TwoInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-two-dbms-tt-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-two-dbms-tt-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_TwoInAR}
                  onChange={(e) => setTranslatePara_TwoInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-two-dbms-tt-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-two-dbms-tt-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_TwoInDE}
                  onChange={(e) => setTranslatePara_TwoInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 2222222222222222222222222222222222222222222222222222222222222222222 */}
            <hr />
            {/* 3333333333333333333333333333333333333333333333333333333333333333333 */}
            {/* services title 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-services-title-three-dbms-yy"
                    value="title-of-services-title-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-services-title-three-dbms-yy"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_Three}
                  onChange={(e) => setTranslateTitle_Three(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-three-dbms-yy-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-three-dbms-yy-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_ThreeInEN}
                  onChange={(e) => setTranslateTitle_ThreeInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-three-dbms-yy-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-three-dbms-yy-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_ThreeInAR}
                  onChange={(e) => setTranslateTitle_ThreeInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-three-dbms-yy-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-three-dbms-yy-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_ThreeInDE}
                  onChange={(e) => setTranslateTitle_ThreeInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-services-para-three-dbms-uu"
                    value="title-of-services-para-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-services-para-three-dbms-uu"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_Three}
                  onChange={(e) => setTranslatePara_Three(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-three-dbms-uu-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-three-dbms-uu-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_ThreeInEN}
                  onChange={(e) => setTranslatePara_ThreeInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-three-dbms-uu-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-three-dbms-uu-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_ThreeInAR}
                  onChange={(e) => setTranslatePara_ThreeInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-three-dbms-uu-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-three-dbms-uu-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_ThreeInDE}
                  onChange={(e) => setTranslatePara_ThreeInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 3333333333333333333333333333333333333333333333333333333333333333333 */}
            <hr />
            {/* 4444444444444444444444444444444444444444444444444444444444444444444 */}
            {/* services title 4 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-services-title-four-dbms-ii"
                    value="title-of-services-title-four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-services-title-four-dbms-ii"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_Four}
                  onChange={(e) => setTranslateTitle_Four(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-four-dbms-ii-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-four-dbms-ii-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FourInEN}
                  onChange={(e) => setTranslateTitle_FourInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-four-dbms-ii-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-four-dbms-ii-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FourInAR}
                  onChange={(e) => setTranslateTitle_FourInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-four-dbms-ii-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-four-dbms-ii-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FourInDE}
                  onChange={(e) => setTranslateTitle_FourInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 4 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-services-para-four-dbms-oo"
                    value="title-of-services-para-four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-services-para-four-dbms-oo"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_Four}
                  onChange={(e) => setTranslatePara_Four(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-four-dbms-oo-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-four-dbms-oo-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FourInEN}
                  onChange={(e) => setTranslatePara_FourInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-four-dbms-oo-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-four-dbms-oo-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FourInAR}
                  onChange={(e) => setTranslatePara_FourInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-four-dbms-oo-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-four-dbms-oo-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FourInDE}
                  onChange={(e) => setTranslatePara_FourInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 4444444444444444444444444444444444444444444444444444444444444444444 */}
            <hr />
            {/* 5555555555555555555555555555555555555555555555555555555555555555555 */}
            {/* services title 5 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-services-title-five-dbms-pp"
                    value="title-of-services-title-five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-services-title-five-dbms-pp"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_Five}
                  onChange={(e) => setTranslateTitle_Five(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-five-dbms-pp-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-five-dbms-pp-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FiveInEN}
                  onChange={(e) => setTranslateTitle_FiveInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-five-dbms-pp-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-five-dbms-pp-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FiveInAR}
                  onChange={(e) => setTranslateTitle_FiveInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-title-five-dbms-pp-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-title-five-dbms-pp-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FiveInDE}
                  onChange={(e) => setTranslateTitle_FiveInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 5 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-services-para-five-dbms-aa"
                    value="title-of-services-para-five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-services-para-five-dbms-aa"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_Five}
                  onChange={(e) => setTranslatePara_Five(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-five-dbms-aa-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-five-dbms-aa-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FiveInEN}
                  onChange={(e) => setTranslatePara_FiveInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-five-dbms-aa-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-five-dbms-aa-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FiveInAR}
                  onChange={(e) => setTranslatePara_FiveInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-services-para-five-dbms-aa-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-services-para-five-dbms-aa-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FiveInDE}
                  onChange={(e) => setTranslatePara_FiveInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 5555555555555555555555555555555555555555555555555555555555555555555 */}
            <hr />
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-dbms-1"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={(e) => handleUploadImage(e, 0)}
                />
              </form>

              <Label
                htmlFor="dropzone-file-dbms-1"
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
                    image in dbms number one " 1 "
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
                {data.M_DBMS[0].img && (
                  <img
                    src={`${domain}/${data.M_DBMS[0].img}`}
                    alt="dropzone-file-dbms-1"
                    className={`object-contain w-full h-full  mx-auto
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                  />
                )}
              </div>
            </div>
            <hr />
            {/* toggle dir */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to put the image on the right or left for English
                Lang.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setDir(dir === 1 ? 3 : 1)}
              >
                {dir === 1 ? "Right" : "Left"}
              </Button>
            </div>
            <hr />
            {/* toggle whatsapp */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to show whatsapp button.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setWhatsapp(!whatsapp)}
              >
                {whatsapp ? "Yes" : "No"}
              </Button>
            </div>
            <hr />
            {/* toggle counter */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to use counter for counte the services or shared
                icon?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setCounter(!counter)}
              >
                {counter ? "Counter" : "Icon"}
              </Button>
            </div>
            <hr />
            <hr />
          </div>
          {/*  */}
          {/*  */}
          <div className="space-y-6 mt-5">
            {/* title */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-dbms-2"
                    value="title-of-dbms-2"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-dbms-2"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2}
                  onChange={(e) => setTranslateTitle_2(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-EN-dbms-2-aa"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-EN-dbms-2-aa"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2InEN}
                  onChange={(e) => setTranslateTitle_2InEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-AR-dbms-2-aa"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-AR-dbms-2-aa"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2InAR}
                  onChange={(e) => setTranslateTitle_2InAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-DE-dbms-2-aaa"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-DE-dbms-2-aaa"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2InDE}
                  onChange={(e) => setTranslateTitle_2InDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <hr />
            {/* the five services 1*/}
            {/* 1111111111111111111111111111111111111111111111111111111111111111111 */}
            {/* services title 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-2-services-title-one"
                    value="title-of-services-title-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-2-services-title-one"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_One}
                  onChange={(e) => setTranslateTitle_2_One(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_OneInEN}
                  onChange={(e) => setTranslateTitle_2_OneInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-one-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_OneInAR}
                  onChange={(e) => setTranslateTitle_2_OneInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-one-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-one-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_OneInDE}
                  onChange={(e) => setTranslateTitle_2_OneInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-2-services-para-one-dbms-2"
                    value="title-of-services-para-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-2-services-para-one-dbms-2"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_One}
                  onChange={(e) => setTranslatePara_2_One(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-one-dbms-2-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-one-dbms-2-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_OneInEN}
                  onChange={(e) => setTranslatePara_2_OneInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-one-dbms-2-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-one-dbms-2-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_OneInAR}
                  onChange={(e) => setTranslatePara_2_OneInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-one-dbms-2-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-one-dbms-2-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_OneInDE}
                  onChange={(e) => setTranslatePara_2_OneInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 1111111111111111111111111111111111111111111111111111111111111111111 */}
            <hr />
            {/* 2222222222222222222222222222222222222222222222222222222222222222222 */}
            {/* services title 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-2-services-title-two"
                    value="title-of-services-title-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-2-services-title-two"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_Two}
                  onChange={(e) => setTranslateTitle_2_Two(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_TwoInEN}
                  onChange={(e) => setTranslateTitle_2_TwoInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-two-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_TwoInAR}
                  onChange={(e) => setTranslateTitle_2_TwoInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-two-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_TwoInDE}
                  onChange={(e) => setTranslateTitle_2_TwoInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-2-services-para-two"
                    value="title-of-services-para-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-2-services-para-two"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_Two}
                  onChange={(e) => setTranslatePara_2_Two(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_TwoInEN}
                  onChange={(e) => setTranslatePara_2_TwoInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-two-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_TwoInAR}
                  onChange={(e) => setTranslatePara_2_TwoInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-two-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-two-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_TwoInDE}
                  onChange={(e) => setTranslatePara_2_TwoInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 2222222222222222222222222222222222222222222222222222222222222222222 */}
            <hr />
            {/* 3333333333333333333333333333333333333333333333333333333333333333333 */}
            {/* services title 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-2-services-title-three"
                    value="title-of-services-title-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-2-services-title-three"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_Three}
                  onChange={(e) => setTranslateTitle_2_Three(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_ThreeInEN}
                  onChange={(e) =>
                    setTranslateTitle_2_ThreeInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-three-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_ThreeInAR}
                  onChange={(e) =>
                    setTranslateTitle_2_ThreeInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-three-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-three-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_ThreeInDE}
                  onChange={(e) =>
                    setTranslateTitle_2_ThreeInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-2-services-para-three"
                    value="title-of-services-para-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-2-services-para-three"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_Three}
                  onChange={(e) => setTranslatePara_2_Three(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_ThreeInEN}
                  onChange={(e) => setTranslatePara_2_ThreeInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-three-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_ThreeInAR}
                  onChange={(e) => setTranslatePara_2_ThreeInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-three-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-three-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_ThreeInDE}
                  onChange={(e) => setTranslatePara_2_ThreeInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 3333333333333333333333333333333333333333333333333333333333333333333 */}
            <hr />
            {/* 4444444444444444444444444444444444444444444444444444444444444444444 */}
            {/* services title 4 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-2-services-title-four"
                    value="title-of-services-title-four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-2-services-title-four"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_Four}
                  onChange={(e) => setTranslateTitle_2_Four(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-four-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_FourInEN}
                  onChange={(e) => setTranslateTitle_2_FourInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-four-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-four-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_FourInAR}
                  onChange={(e) => setTranslateTitle_2_FourInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-four-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-four-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_FourInDE}
                  onChange={(e) => setTranslateTitle_2_FourInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 4 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-2-services-para-four"
                    value="title-of-services-para-four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-2-services-para-four"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_Four}
                  onChange={(e) => setTranslatePara_2_Four(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-four-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_FourInEN}
                  onChange={(e) => setTranslatePara_2_FourInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-four-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-four-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_FourInAR}
                  onChange={(e) => setTranslatePara_2_FourInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-four-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-four-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_FourInDE}
                  onChange={(e) => setTranslatePara_2_FourInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 4444444444444444444444444444444444444444444444444444444444444444444 */}
            <hr />
            {/* 5555555555555555555555555555555555555555555555555555555555555555555 */}
            {/* services title 5 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-2-services-title-five"
                    value="title-of-services-title-five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-2-services-title-five"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_Five}
                  onChange={(e) => setTranslateTitle_2_Five(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-five-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_FiveInEN}
                  onChange={(e) => setTranslateTitle_2_FiveInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-five-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-five-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_FiveInAR}
                  onChange={(e) => setTranslateTitle_2_FiveInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-title-five-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-title-five-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_2_FiveInDE}
                  onChange={(e) => setTranslateTitle_2_FiveInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 5 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-2-services-para-five"
                    value="title-of-services-para-five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-2-services-para-five"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_Five}
                  onChange={(e) => setTranslatePara_2_Five(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-five-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_FiveInEN}
                  onChange={(e) => setTranslatePara_2_FiveInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-five-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-five-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_FiveInAR}
                  onChange={(e) => setTranslatePara_2_FiveInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-2-services-para-five-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-2-services-para-five-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_2_FiveInDE}
                  onChange={(e) => setTranslatePara_2_FiveInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 5555555555555555555555555555555555555555555555555555555555555555555 */}
            <hr />
            {/* image */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-dbms-2"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={(e) => handleUploadImage(e, 1)}
                />
              </form>

              <Label
                htmlFor="dropzone-file-dbms-2"
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
                    image in dbms number one " 2 "
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
                {data.M_DBMS[1].img && (
                  <img
                    src={`${domain}/${data.M_DBMS[1].img}`}
                    alt="dropzone-file-dbms-2"
                    className={`object-contain w-full h-full  mx-auto
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                  />
                )}
              </div>
            </div>
            <hr />
            {/* toggle dir_2 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to put the image on the right or left for English
                Lang.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setDir_2(dir_2 === 1 ? 3 : 1)}
              >
                {dir_2 === 1 ? "Right" : "Left"}
              </Button>
            </div>
            <hr />
            {/* toggle whatsapp_2 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to show whatsapp_2 button.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setWhatsapp_2(!whatsapp_2)}
              >
                {whatsapp_2 ? "Yes" : "No"}
              </Button>
            </div>
            <hr />
            {/* toggle counter_2 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to use counter_2 for counte the services or shared
                icon?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setCounter_2(!counter_2)}
              >
                {counter_2 ? "Counter" : "Icon"}
              </Button>
            </div>
            <hr />
            <hr />
          </div>
          {/*  */}
          {/*  */}
          <div className="space-y-6 mt-5">
            {/* title */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-dbms-3"
                    value="title-of-dbms-3"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-dbms-3"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3}
                  onChange={(e) => setTranslateTitle_3(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-EN-dbms-3"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-EN-dbms-3"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3InEN}
                  onChange={(e) => setTranslateTitle_3InEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-AR-dbms-3"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-AR-dbms-3"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3InAR}
                  onChange={(e) => setTranslateTitle_3InAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-DE-dbms-3"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-DE-dbms-3"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3InDE}
                  onChange={(e) => setTranslateTitle_3InDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <hr />
            {/* the five services 1*/}
            {/* 1111111111111111111111111111111111111111111111111111111111111111111 */}
            {/* services title 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-3-services-title-one"
                    value="title-of-services-title-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-3-services-title-one"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_One}
                  onChange={(e) => setTranslateTitle_3_One(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_OneInEN}
                  onChange={(e) => setTranslateTitle_3_OneInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-one-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_OneInAR}
                  onChange={(e) => setTranslateTitle_3_OneInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-one-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-one-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_OneInDE}
                  onChange={(e) => setTranslateTitle_3_OneInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-3-services-para-one"
                    value="title-of-services-para-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-3-services-para-one"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_One}
                  onChange={(e) => setTranslatePara_3_One(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_OneInEN}
                  onChange={(e) => setTranslatePara_3_OneInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-one-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_OneInAR}
                  onChange={(e) => setTranslatePara_3_OneInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-one-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-one-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_OneInDE}
                  onChange={(e) => setTranslatePara_3_OneInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 1111111111111111111111111111111111111111111111111111111111111111111 */}
            <hr />
            {/* 2222222222222222222222222222222222222222222222222222222222222222222 */}
            {/* services title 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-3-services-title-two"
                    value="title-of-services-title-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-3-services-title-two"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_Two}
                  onChange={(e) => setTranslateTitle_3_Two(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_TwoInEN}
                  onChange={(e) => setTranslateTitle_3_TwoInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-two-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_TwoInAR}
                  onChange={(e) => setTranslateTitle_3_TwoInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-two-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-two-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_TwoInDE}
                  onChange={(e) => setTranslateTitle_3_TwoInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-3-services-para-two"
                    value="title-of-services-para-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-3-services-para-two"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_Two}
                  onChange={(e) => setTranslatePara_3_Two(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_TwoInEN}
                  onChange={(e) => setTranslatePara_3_TwoInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-two-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_TwoInAR}
                  onChange={(e) => setTranslatePara_3_TwoInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-two-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-two-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_TwoInDE}
                  onChange={(e) => setTranslatePara_3_TwoInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 2222222222222222222222222222222222222222222222222222222222222222222 */}
            <hr />
            {/* 3333333333333333333333333333333333333333333333333333333333333333333 */}
            {/* services title 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-3-services-title-three"
                    value="title-of-services-title-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-3-services-title-three"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_Three}
                  onChange={(e) => setTranslateTitle_3_Three(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_ThreeInEN}
                  onChange={(e) =>
                    setTranslateTitle_3_ThreeInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-three-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_ThreeInAR}
                  onChange={(e) =>
                    setTranslateTitle_3_ThreeInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-three-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-three-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_ThreeInDE}
                  onChange={(e) =>
                    setTranslateTitle_3_ThreeInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-3-services-para-three"
                    value="title-of-services-para-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-3-services-para-three"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_Three}
                  onChange={(e) => setTranslatePara_3_Three(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_ThreeInEN}
                  onChange={(e) => setTranslatePara_3_ThreeInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-three-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_ThreeInAR}
                  onChange={(e) => setTranslatePara_3_ThreeInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-three-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-three-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_ThreeInDE}
                  onChange={(e) => setTranslatePara_3_ThreeInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 3333333333333333333333333333333333333333333333333333333333333333333 */}
            <hr />
            {/* 4444444444444444444444444444444444444444444444444444444444444444444 */}
            {/* services title 4 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-3-services-title-four"
                    value="title-of-services-title-four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-3-services-title-four"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_Four}
                  onChange={(e) => setTranslateTitle_3_Four(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-four-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_FourInEN}
                  onChange={(e) => setTranslateTitle_3_FourInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-four-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-four-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_FourInAR}
                  onChange={(e) => setTranslateTitle_3_FourInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-four-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-four-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_FourInDE}
                  onChange={(e) => setTranslateTitle_3_FourInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 4 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-3-services-para-four"
                    value="title-of-services-para-four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-3-services-para-four"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_Four}
                  onChange={(e) => setTranslatePara_3_Four(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-four-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_FourInEN}
                  onChange={(e) => setTranslatePara_3_FourInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-four-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-four-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_FourInAR}
                  onChange={(e) => setTranslatePara_3_FourInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-four-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-four-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_FourInDE}
                  onChange={(e) => setTranslatePara_3_FourInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 4444444444444444444444444444444444444444444444444444444444444444444 */}
            <hr />
            {/* 5555555555555555555555555555555555555555555555555555555555555555555 */}
            {/* services title 5 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-3-services-title-five"
                    value="title-of-services-title-five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-3-services-title-five"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_Five}
                  onChange={(e) => setTranslateTitle_3_Five(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-five-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_FiveInEN}
                  onChange={(e) => setTranslateTitle_3_FiveInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-five-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-five-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_FiveInAR}
                  onChange={(e) => setTranslateTitle_3_FiveInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-title-five-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-title-five-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_3_FiveInDE}
                  onChange={(e) => setTranslateTitle_3_FiveInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />
            {/* service para 5 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-dbms-3-services-para-five"
                    value="title-of-services-para-five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-dbms-3-services-para-five"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_Five}
                  onChange={(e) => setTranslatePara_3_Five(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-five-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_FiveInEN}
                  onChange={(e) => setTranslatePara_3_FiveInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-five-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-five-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_FiveInAR}
                  onChange={(e) => setTranslatePara_3_FiveInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-dbms-3-services-para-five-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-dbms-3-services-para-five-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_3_FiveInDE}
                  onChange={(e) => setTranslatePara_3_FiveInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 5555555555555555555555555555555555555555555555555555555555555555555 */}
            <hr />
            {/* image */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-dbms-3"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={(e) => handleUploadImage(e, 2)}
                />
              </form>

              <Label
                htmlFor="dropzone-file-dbms-3"
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
                    image in dbms number one " 3 "
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
                {data.M_DBMS[2].img && (
                  <img
                    src={`${domain}/${data.M_DBMS[2].img}`}
                    alt="dropzone-file-dbms-3"
                    className={`object-contain w-full h-full  mx-auto
                            ${
                              imagePercent > 0 && imagePercent < 100
                                ? "opacity-50"
                                : "opacity-100"
                            }`}
                  />
                )}
              </div>
            </div>
            <hr />
            {/* toggle dir_3 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to put the image on the right or left for English
                Lang.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setDir_3(dir_3 === 1 ? 3 : 1)}
              >
                {dir_3 === 1 ? "Right" : "Left"}
              </Button>
            </div>
            <hr />
            {/* toggle whatsapp_3 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to show whatsapp_3 button.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setWhatsapp_3(!whatsapp_3)}
              >
                {whatsapp_3 ? "Yes" : "No"}
              </Button>
            </div>
            <hr />
            {/* toggle counter_3 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to use counter_3 for counte the services or shared
                icon?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setCounter_3(!counter_3)}
              >
                {counter_3 ? "Counter" : "Icon"}
              </Button>
            </div>
            <div>
              {imageUploadError && (
                <Alert color="failure">{imageUploadError}</Alert>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="py-2 flex justify-between">
          <Button
            onClick={() => {
              setData((data) => ({
                ...data,
                M_DBMS: [
                  {
                    ...data.M_DBMS[0],
                    title: translateTitle,
                    services: [
                      {
                        title: translateTitle_One,
                        para: translatePara_One,
                      },
                      {
                        title: translateTitle_Two,
                        para: translatePara_Two,
                      },
                      {
                        title: translateTitle_Three,
                        para: translatePara_Three,
                      },
                      {
                        title: translateTitle_Four,
                        para: translatePara_Four,
                      },
                      {
                        title: translateTitle_Five,
                        para: translatePara_Five,
                      },
                    ],
                    dir: dir,
                    whatsapp_button: whatsapp,
                    counter: counter,
                  },
                  {
                    ...data.M_DBMS[1],
                    title: translateTitle_2,
                    services: [
                      {
                        title: translateTitle_2_One,
                        para: translatePara_2_One,
                      },
                      {
                        title: translateTitle_2_Two,
                        para: translatePara_2_Two,
                      },
                      {
                        title: translateTitle_2_Three,
                        para: translatePara_2_Three,
                      },
                      {
                        title: translateTitle_2_Four,
                        para: translatePara_2_Four,
                      },
                      {
                        title: translateTitle_2_Five,
                        para: translatePara_2_Five,
                      },
                    ],
                    dir: dir_2,
                    whatsapp_button: whatsapp_2,
                    counter: counter_2,
                  },
                  {
                    ...data.M_DBMS[2],
                    title: translateTitle_3,
                    services: [
                      {
                        title: translateTitle_3_One,
                        para: translatePara_3_One,
                      },
                      {
                        title: translateTitle_3_Two,
                        para: translatePara_3_Two,
                      },
                      {
                        title: translateTitle_3_Three,
                        para: translatePara_3_Three,
                      },
                      {
                        title: translateTitle_3_Four,
                        para: translatePara_3_Four,
                      },
                      {
                        title: translateTitle_3_Five,
                        para: translatePara_3_Five,
                      },
                    ],
                    dir: dir_3,
                    whatsapp_button: whatsapp_3,
                    counter: counter_3,
                  },
                  ...data.M_DBMS.slice(3),
                ],
              }));
              setOpenModal(false);
            }}
          >
            Save
          </Button>

          <Button
            color="gray"
            onClick={() => {
              setOpenModal(false);
              setData((data) => ({
                ...data,
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
              }));
              setTranslateTitle("");
              setTranslateTitleInEN("");
              setTranslateTitleInAR("");
              setTranslateTitleInDE("");

              setTranslateTitle_One("");
              setTranslateTitle_OneInEN("");
              setTranslateTitle_OneInAR("");
              setTranslateTitle_OneInDE("");

              setTranslatePara_One("");
              setTranslatePara_OneInEN("");
              setTranslatePara_OneInAR("");
              setTranslatePara_OneInDE("");
              // services
              // service 1
              // title 1
              setTranslateTitle_One("");
              setTranslateTitle_OneInEN("");
              setTranslateTitle_OneInAR("");
              setTranslateTitle_OneInDE("");
              // para 1
              setTranslatePara_One("");
              setTranslatePara_OneInEN("");
              setTranslatePara_OneInAR("");
              setTranslatePara_OneInDE("");
              // service 2
              // title 2
              setTranslateTitle_Two("");
              setTranslateTitle_TwoInEN("");
              setTranslateTitle_TwoInAR("");
              setTranslateTitle_TwoInDE("");
              // para 2
              setTranslatePara_Two("");
              setTranslatePara_TwoInEN("");
              setTranslatePara_TwoInAR("");
              setTranslatePara_TwoInDE("");
              // service 3
              // title 3
              setTranslateTitle_Three("");
              setTranslateTitle_ThreeInEN("");
              setTranslateTitle_ThreeInAR("");
              setTranslateTitle_ThreeInDE("");
              // para 3
              setTranslatePara_Three("");
              setTranslatePara_ThreeInEN("");
              setTranslatePara_ThreeInAR("");
              setTranslatePara_ThreeInDE("");
              // service 4
              // title 4
              setTranslateTitle_Four("");
              setTranslateTitle_FourInEN("");
              setTranslateTitle_FourInAR("");
              setTranslateTitle_FourInDE("");
              // para 4
              setTranslatePara_Four("");
              setTranslatePara_FourInEN("");
              setTranslatePara_FourInAR("");
              setTranslatePara_FourInDE("");
              // service 5
              // title 5
              setTranslateTitle_Five("");
              setTranslateTitle_FiveInEN("");
              setTranslateTitle_FiveInAR("");
              setTranslateTitle_FiveInDE("");
              // para 5
              setTranslatePara_Five("");
              setTranslatePara_FiveInEN("");
              setTranslatePara_FiveInAR("");
              setTranslatePara_FiveInDE("");

              setDir(1);
              setCounter(false);
              setWhatsapp(false);

              setTranslateTitle_2("");
              setTranslateTitle_2InEN("");
              setTranslateTitle_2InAR("");
              setTranslateTitle_2InDE("");

              setTranslateTitle_2_One("");
              setTranslateTitle_2_OneInEN("");
              setTranslateTitle_2_OneInAR("");
              setTranslateTitle_2_OneInDE("");

              setTranslatePara_2_One("");
              setTranslatePara_2_OneInEN("");
              setTranslatePara_2_OneInAR("");
              setTranslatePara_2_OneInDE("");
              // services
              // service 1
              // title_2 1
              setTranslateTitle_2_One("");
              setTranslateTitle_2_OneInEN("");
              setTranslateTitle_2_OneInAR("");
              setTranslateTitle_2_OneInDE("");
              // para_2 1
              setTranslatePara_2_One("");
              setTranslatePara_2_OneInEN("");
              setTranslatePara_2_OneInAR("");
              setTranslatePara_2_OneInDE("");
              // service 2
              // title_2 2
              setTranslateTitle_2_Two("");
              setTranslateTitle_2_TwoInEN("");
              setTranslateTitle_2_TwoInAR("");
              setTranslateTitle_2_TwoInDE("");
              // para_2 2
              setTranslatePara_2_Two("");
              setTranslatePara_2_TwoInEN("");
              setTranslatePara_2_TwoInAR("");
              setTranslatePara_2_TwoInDE("");
              // service 3
              // title_2 3
              setTranslateTitle_2_Three("");
              setTranslateTitle_2_ThreeInEN("");
              setTranslateTitle_2_ThreeInAR("");
              setTranslateTitle_2_ThreeInDE("");
              // para_2 3
              setTranslatePara_2_Three("");
              setTranslatePara_2_ThreeInEN("");
              setTranslatePara_2_ThreeInAR("");
              setTranslatePara_2_ThreeInDE("");
              // service 4
              // title_2 4
              setTranslateTitle_2_Four("");
              setTranslateTitle_2_FourInEN("");
              setTranslateTitle_2_FourInAR("");
              setTranslateTitle_2_FourInDE("");
              // para_2 4
              setTranslatePara_2_Four("");
              setTranslatePara_2_FourInEN("");
              setTranslatePara_2_FourInAR("");
              setTranslatePara_2_FourInDE("");
              // service 5
              // title_2 5
              setTranslateTitle_2_Five("");
              setTranslateTitle_2_FiveInEN("");
              setTranslateTitle_2_FiveInAR("");
              setTranslateTitle_2_FiveInDE("");
              // para_2 5
              setTranslatePara_2_Five("");
              setTranslatePara_2_FiveInEN("");
              setTranslatePara_2_FiveInAR("");
              setTranslatePara_2_FiveInDE("");

              setDir_2(1);
              setCounter_2(false);
              setWhatsapp_2(false);

              setTranslateTitle_3("");
              setTranslateTitle_3InEN("");
              setTranslateTitle_3InAR("");
              setTranslateTitle_3InDE("");

              setTranslateTitle_3_One("");
              setTranslateTitle_3_OneInEN("");
              setTranslateTitle_3_OneInAR("");
              setTranslateTitle_3_OneInDE("");

              setTranslatePara_3_One("");
              setTranslatePara_3_OneInEN("");
              setTranslatePara_3_OneInAR("");
              setTranslatePara_3_OneInDE("");
              // services
              // service 1
              // title_3 1
              setTranslateTitle_3_One("");
              setTranslateTitle_3_OneInEN("");
              setTranslateTitle_3_OneInAR("");
              setTranslateTitle_3_OneInDE("");
              // para_3 1
              setTranslatePara_3_One("");
              setTranslatePara_3_OneInEN("");
              setTranslatePara_3_OneInAR("");
              setTranslatePara_3_OneInDE("");
              // service 2
              // title_3 2
              setTranslateTitle_3_Two("");
              setTranslateTitle_3_TwoInEN("");
              setTranslateTitle_3_TwoInAR("");
              setTranslateTitle_3_TwoInDE("");
              // para_3 2
              setTranslatePara_3_Two("");
              setTranslatePara_3_TwoInEN("");
              setTranslatePara_3_TwoInAR("");
              setTranslatePara_3_TwoInDE("");
              // service 3
              // title_3 3
              setTranslateTitle_3_Three("");
              setTranslateTitle_3_ThreeInEN("");
              setTranslateTitle_3_ThreeInAR("");
              setTranslateTitle_3_ThreeInDE("");
              // para_3 3
              setTranslatePara_3_Three("");
              setTranslatePara_3_ThreeInEN("");
              setTranslatePara_3_ThreeInAR("");
              setTranslatePara_3_ThreeInDE("");
              // service 4
              // title_3 4
              setTranslateTitle_3_Four("");
              setTranslateTitle_3_FourInEN("");
              setTranslateTitle_3_FourInAR("");
              setTranslateTitle_3_FourInDE("");
              // para_3 4
              setTranslatePara_3_Four("");
              setTranslatePara_3_FourInEN("");
              setTranslatePara_3_FourInAR("");
              setTranslatePara_3_FourInDE("");
              // service 5
              // title_3 5
              setTranslateTitle_3_Five("");
              setTranslateTitle_3_FiveInEN("");
              setTranslateTitle_3_FiveInAR("");
              setTranslateTitle_3_FiveInDE("");
              // para_3 5
              setTranslatePara_3_Five("");
              setTranslatePara_3_FiveInEN("");
              setTranslatePara_3_FiveInAR("");
              setTranslatePara_3_FiveInDE("");

              setDir_3(1);
              setCounter_3(false);
              setWhatsapp_3(false);
            }}
          >
            clear and cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
