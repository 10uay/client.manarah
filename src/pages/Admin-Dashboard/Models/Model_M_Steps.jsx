import {
  Button,
  Modal,
  Label,
  TextInput,
  Textarea,
  useState,
  useEffect,
  useRef,axios,CircularProgressbar
} from "@/utils/Imports";
import { Alert } from "flowbite-react";
import "react-circular-progressbar/dist/styles.css";

export default function Model_M_Steps({
  domain,
  data,
  setData,
  setTranslation_M_Steps_EN,
  setTranslation_M_Steps_AR,
  setTranslation_M_Steps_DE,
}) {
  const [openModal, setOpenModal] = useState(false);

  //
  const [imagePercent, setImagePercent] = useState();
  const fileRef = useRef(null);
  const [uploadingImg, setUploadingImg] = useState(false);
    const [imageUploadError, setImageUploadError] = useState(false);
//

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

  // dir 1
  const [dir_One, setDir_One] = useState(1);

  // whatsapp_button 1
  const [whatsapp_One, setWhatsapp_One] = useState(false);

  // steps 1
  // sentence 1
  const [translateSentence_One, setTranslateSentence_One] = useState("");
  const [translateSentence_OneInEN, setTranslateSentence_OneInEN] =
    useState("");
  const [translateSentence_OneInAR, setTranslateSentence_OneInAR] =
    useState("");
  const [translateSentence_OneInDE, setTranslateSentence_OneInDE] =
    useState("");

  // sentence 2
  const [translateSentence_Two, setTranslateSentence_Two] = useState("");
  const [translateSentence_TwoInEN, setTranslateSentence_TwoInEN] =
    useState("");
  const [translateSentence_TwoInAR, setTranslateSentence_TwoInAR] =
    useState("");
  const [translateSentence_TwoInDE, setTranslateSentence_TwoInDE] =
    useState("");

  // sentence 3
  const [translateSentence_Three, setTranslateSentence_Three] = useState("");
  const [translateSentence_ThreeInEN, setTranslateSentence_ThreeInEN] =
    useState("");
  const [translateSentence_ThreeInAR, setTranslateSentence_ThreeInAR] =
    useState("");
  const [translateSentence_ThreeInDE, setTranslateSentence_ThreeInDE] =
    useState("");

  // sentence 4
  const [translateSentence_Four, setTranslateSentence_Four] = useState("");
  const [translateSentence_FourInEN, setTranslateSentence_FourInEN] =
    useState("");
  const [translateSentence_FourInAR, setTranslateSentence_FourInAR] =
    useState("");
  const [translateSentence_FourInDE, setTranslateSentence_FourInDE] =
    useState("");

  // sentence 5
  const [translateSentence_Five, setTranslateSentence_Five] = useState("");
  const [translateSentence_FiveInEN, setTranslateSentence_FiveInEN] =
    useState("");
  const [translateSentence_FiveInAR, setTranslateSentence_FiveInAR] =
    useState("");
  const [translateSentence_FiveInDE, setTranslateSentence_FiveInDE] =
    useState("");

  // sentence 6
  const [translateSentence_Six, setTranslateSentence_Six] = useState("");
  const [translateSentence_SixInEN, setTranslateSentence_SixInEN] =
    useState("");
  const [translateSentence_SixInAR, setTranslateSentence_SixInAR] =
    useState("");
  const [translateSentence_SixInDE, setTranslateSentence_SixInDE] =
    useState("");

  //
  // ///////////////////////steps 2
  //

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

  // dir 2
  const [dir_Two, setDir_Two] = useState(1);
  // whatsapp_button 2
  const [whatsapp_Two, setWhatsapp_Two] = useState(false);

  // steps 2
  // sentence_2 1
  const [translateSentence_2_One, setTranslateSentence_2_One] = useState("");
  const [translateSentence_2_OneInEN, setTranslateSentence_2_OneInEN] =
    useState("");
  const [translateSentence_2_OneInAR, setTranslateSentence_2_OneInAR] =
    useState("");
  const [translateSentence_2_OneInDE, setTranslateSentence_2_OneInDE] =
    useState("");

  // sentence_2 2
  const [translateSentence_2_Two, setTranslateSentence_2_Two] = useState("");
  const [translateSentence_2_TwoInEN, setTranslateSentence_2_TwoInEN] =
    useState("");
  const [translateSentence_2_TwoInAR, setTranslateSentence_2_TwoInAR] =
    useState("");
  const [translateSentence_2_TwoInDE, setTranslateSentence_2_TwoInDE] =
    useState("");

  // sentence_2 3
  const [translateSentence_2_Three, setTranslateSentence_2_Three] =
    useState("");
  const [translateSentence_2_ThreeInEN, setTranslateSentence_2_ThreeInEN] =
    useState("");
  const [translateSentence_2_ThreeInAR, setTranslateSentence_2_ThreeInAR] =
    useState("");
  const [translateSentence_2_ThreeInDE, setTranslateSentence_2_ThreeInDE] =
    useState("");

  // sentence_2 4
  const [translateSentence_2_Four, setTranslateSentence_2_Four] = useState("");
  const [translateSentence_2_FourInEN, setTranslateSentence_2_FourInEN] =
    useState("");
  const [translateSentence_2_FourInAR, setTranslateSentence_2_FourInAR] =
    useState("");
  const [translateSentence_2_FourInDE, setTranslateSentence_2_FourInDE] =
    useState("");

  // sentence_2 5
  const [translateSentence_2_Five, setTranslateSentence_2_Five] = useState("");
  const [translateSentence_2_FiveInEN, setTranslateSentence_2_FiveInEN] =
    useState("");
  const [translateSentence_2_FiveInAR, setTranslateSentence_2_FiveInAR] =
    useState("");
  const [translateSentence_2_FiveInDE, setTranslateSentence_2_FiveInDE] =
    useState("");

  // sentence_2 6
  const [translateSentence_2_Six, setTranslateSentence_2_Six] = useState("");
  const [translateSentence_2_SixInEN, setTranslateSentence_2_SixInEN] =
    useState("");
  const [translateSentence_2_SixInAR, setTranslateSentence_2_SixInAR] =
    useState("");
  const [translateSentence_2_SixInDE, setTranslateSentence_2_SixInDE] =
    useState("");

  //
  // ///////////////////////steps 3
  //

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

  // dir 3
  const [dir_Three, setDir_Three] = useState(1);

  // whatsapp_button 3
  const [whatsapp_Three, setWhatsapp_Three] = useState(false);

  // steps 3
  // sentence_3 1
  const [translateSentence_3_One, setTranslateSentence_3_One] = useState("");
  const [translateSentence_3_OneInEN, setTranslateSentence_3_OneInEN] =
    useState("");
  const [translateSentence_3_OneInAR, setTranslateSentence_3_OneInAR] =
    useState("");
  const [translateSentence_3_OneInDE, setTranslateSentence_3_OneInDE] =
    useState("");

  // sentence_3 3
  const [translateSentence_3_Two, setTranslateSentence_3_Two] = useState("");
  const [translateSentence_3_TwoInEN, setTranslateSentence_3_TwoInEN] =
    useState("");
  const [translateSentence_3_TwoInAR, setTranslateSentence_3_TwoInAR] =
    useState("");
  const [translateSentence_3_TwoInDE, setTranslateSentence_3_TwoInDE] =
    useState("");

  // sentence_3 3
  const [translateSentence_3_Three, setTranslateSentence_3_Three] =
    useState("");
  const [translateSentence_3_ThreeInEN, setTranslateSentence_3_ThreeInEN] =
    useState("");
  const [translateSentence_3_ThreeInAR, setTranslateSentence_3_ThreeInAR] =
    useState("");
  const [translateSentence_3_ThreeInDE, setTranslateSentence_3_ThreeInDE] =
    useState("");

  // sentence_3 4
  const [translateSentence_3_Four, setTranslateSentence_3_Four] = useState("");
  const [translateSentence_3_FourInEN, setTranslateSentence_3_FourInEN] =
    useState("");
  const [translateSentence_3_FourInAR, setTranslateSentence_3_FourInAR] =
    useState("");
  const [translateSentence_3_FourInDE, setTranslateSentence_3_FourInDE] =
    useState("");

  // sentence_3 5
  const [translateSentence_3_Five, setTranslateSentence_3_Five] = useState("");
  const [translateSentence_3_FiveInEN, setTranslateSentence_3_FiveInEN] =
    useState("");
  const [translateSentence_3_FiveInAR, setTranslateSentence_3_FiveInAR] =
    useState("");
  const [translateSentence_3_FiveInDE, setTranslateSentence_3_FiveInDE] =
    useState("");

  // sentence_3 6
  const [translateSentence_3_Six, setTranslateSentence_3_Six] = useState("");
  const [translateSentence_3_SixInEN, setTranslateSentence_3_SixInEN] =
    useState("");
  const [translateSentence_3_SixInAR, setTranslateSentence_3_SixInAR] =
    useState("");
  const [translateSentence_3_SixInDE, setTranslateSentence_3_SixInDE] =
    useState("");

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
      [data.M_Steps[0].title]: translateTitle_OneInEN,
      [data.M_Steps[0].para]: translatePara_OneInEN,
      [data.M_Steps[0].steps[0].sentence]: translateSentence_OneInEN,
      [data.M_Steps[0].steps[1].sentence]: translateSentence_TwoInEN,
      [data.M_Steps[0].steps[2].sentence]: translateSentence_ThreeInEN,
      [data.M_Steps[0].steps[3].sentence]: translateSentence_FourInEN,
      [data.M_Steps[0].steps[4].sentence]: translateSentence_FiveInEN,
      [data.M_Steps[0].steps[5].sentence]: translateSentence_SixInEN,
      [data.M_Steps[1].title]: translateTitle_TwoInEN,
      [data.M_Steps[1].para]: translatePara_TwoInEN,
      [data.M_Steps[1].steps[0].sentence]: translateSentence_2_OneInEN,
      [data.M_Steps[1].steps[1].sentence]: translateSentence_2_TwoInEN,
      [data.M_Steps[1].steps[2].sentence]: translateSentence_2_ThreeInEN,
      [data.M_Steps[1].steps[3].sentence]: translateSentence_2_FourInEN,
      [data.M_Steps[1].steps[4].sentence]: translateSentence_2_FiveInEN,
      [data.M_Steps[1].steps[5].sentence]: translateSentence_2_SixInEN,
      [data.M_Steps[2].title]: translateTitle_ThreeInEN,
      [data.M_Steps[2].para]: translatePara_ThreeInEN,
      [data.M_Steps[2].steps[0].sentence]: translateSentence_3_OneInEN,
      [data.M_Steps[2].steps[1].sentence]: translateSentence_3_TwoInEN,
      [data.M_Steps[2].steps[2].sentence]: translateSentence_3_ThreeInEN,
      [data.M_Steps[2].steps[3].sentence]: translateSentence_3_FourInEN,
      [data.M_Steps[2].steps[4].sentence]: translateSentence_3_FiveInEN,
      [data.M_Steps[2].steps[5].sentence]: translateSentence_3_SixInEN,
    });

    const sanitizedTranslationAR = sanitizeTranslations({
      [data.M_Steps[0].title]: translateTitle_OneInAR,
      [data.M_Steps[0].para]: translatePara_OneInAR,
      [data.M_Steps[0].steps[0].sentence]: translateSentence_OneInAR,
      [data.M_Steps[0].steps[1].sentence]: translateSentence_TwoInAR,
      [data.M_Steps[0].steps[2].sentence]: translateSentence_ThreeInAR,
      [data.M_Steps[0].steps[3].sentence]: translateSentence_FourInAR,
      [data.M_Steps[0].steps[4].sentence]: translateSentence_FiveInAR,
      [data.M_Steps[0].steps[5].sentence]: translateSentence_SixInAR,
      [data.M_Steps[1].title]: translateTitle_TwoInAR,
      [data.M_Steps[1].para]: translatePara_TwoInAR,
      [data.M_Steps[1].steps[0].sentence]: translateSentence_2_OneInAR,
      [data.M_Steps[1].steps[1].sentence]: translateSentence_2_TwoInAR,
      [data.M_Steps[1].steps[2].sentence]: translateSentence_2_ThreeInAR,
      [data.M_Steps[1].steps[3].sentence]: translateSentence_2_FourInAR,
      [data.M_Steps[1].steps[4].sentence]: translateSentence_2_FiveInAR,
      [data.M_Steps[1].steps[5].sentence]: translateSentence_2_SixInAR,
      [data.M_Steps[2].title]: translateTitle_ThreeInAR,
      [data.M_Steps[2].para]: translatePara_ThreeInAR,
      [data.M_Steps[2].steps[0].sentence]: translateSentence_3_OneInAR,
      [data.M_Steps[2].steps[1].sentence]: translateSentence_3_TwoInAR,
      [data.M_Steps[2].steps[2].sentence]: translateSentence_3_ThreeInAR,
      [data.M_Steps[2].steps[3].sentence]: translateSentence_3_FourInAR,
      [data.M_Steps[2].steps[4].sentence]: translateSentence_3_FiveInAR,
      [data.M_Steps[2].steps[5].sentence]: translateSentence_3_SixInAR,
    });

    const sanitizedTranslationDE = sanitizeTranslations({
      [data.M_Steps[0].title]: translateTitle_OneInDE,
      [data.M_Steps[0].para]: translatePara_OneInDE,
      [data.M_Steps[0].steps[0].sentence]: translateSentence_OneInDE,
      [data.M_Steps[0].steps[1].sentence]: translateSentence_TwoInDE,
      [data.M_Steps[0].steps[2].sentence]: translateSentence_ThreeInDE,
      [data.M_Steps[0].steps[3].sentence]: translateSentence_FourInDE,
      [data.M_Steps[0].steps[4].sentence]: translateSentence_FiveInDE,
      [data.M_Steps[0].steps[5].sentence]: translateSentence_SixInDE,
      [data.M_Steps[1].title]: translateTitle_TwoInDE,
      [data.M_Steps[1].para]: translatePara_TwoInDE,
      [data.M_Steps[1].steps[0].sentence]: translateSentence_2_OneInDE,
      [data.M_Steps[1].steps[1].sentence]: translateSentence_2_TwoInDE,
      [data.M_Steps[1].steps[2].sentence]: translateSentence_2_ThreeInDE,
      [data.M_Steps[1].steps[3].sentence]: translateSentence_2_FourInDE,
      [data.M_Steps[1].steps[4].sentence]: translateSentence_2_FiveInDE,
      [data.M_Steps[1].steps[5].sentence]: translateSentence_2_SixInDE,
      [data.M_Steps[2].title]: translateTitle_ThreeInDE,
      [data.M_Steps[2].para]: translatePara_ThreeInDE,
      [data.M_Steps[2].steps[0].sentence]: translateSentence_3_OneInDE,
      [data.M_Steps[2].steps[1].sentence]: translateSentence_3_TwoInDE,
      [data.M_Steps[2].steps[2].sentence]: translateSentence_3_ThreeInDE,
      [data.M_Steps[2].steps[3].sentence]: translateSentence_3_FourInDE,
      [data.M_Steps[2].steps[4].sentence]: translateSentence_3_FiveInDE,
      [data.M_Steps[2].steps[5].sentence]: translateSentence_3_SixInDE,
    });

    setTranslation_M_Steps_EN(sanitizedTranslationEN);
    setTranslation_M_Steps_AR(sanitizedTranslationAR);
    setTranslation_M_Steps_DE(sanitizedTranslationDE);

    console.log("Sanitized Translations:", {
      en: sanitizedTranslationEN,
      ar: sanitizedTranslationAR,
      de: sanitizedTranslationDE,
    });
  }, [data.M_Steps]);

  // upload functions
  const handleUploadImage = async (e, updateStep = 0) => {
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
          const updatedSteps = [...prevData.M_Steps]; // Copy the array
          updatedSteps[updateStep] = {
            // Update element based on step
            ...updatedSteps[updateStep],
            img: uploadedUrls[0],
          };
          return {
            ...prevData,
            M_Steps: updatedSteps,
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
        Steps
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="py-2 items-center">
          Terms of Service
        </Modal.Header>
        <Modal.Body className="px-3">
          <img src="/images/M_Steps.png" alt="m steps one img" />
          <hr />
          {/* steps 1 */}
          <div className="space-y-6 mt-5">
            {/* title 1*/}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-steps-one"
                    value="title-of-steps-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-steps-one"
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
                  htmlFor="myTextarea-m-steps-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-steps-one-EN"
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
                  htmlFor="myTextarea-m-teps-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-teps-one-AR"
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
                  htmlFor="myTextarea-m-steps-one-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-steps-one-DE"
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
            <hr />
            {/* para 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-steps-one"
                    value="Para-of-steps-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-steps-one"
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
                  htmlFor="myTextarea-m-steps-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-steps-one-EN"
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
                  htmlFor="myTextarea-m-teps-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-teps-one-AR"
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
                  htmlFor="myTextarea-m-steps-one-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-steps-one-DE"
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
            <hr />
            {/* the six steps */}
            {/* steps sentence 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-one-sentence-one"
                    value="title-of-steps-one-sentence-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-one-sentence-one"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_One}
                  onChange={(e) => setTranslateSentence_One(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_OneInEN}
                  onChange={(e) => setTranslateSentence_OneInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-one-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_OneInAR}
                  onChange={(e) => setTranslateSentence_OneInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-one-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_OneInDE}
                  onChange={(e) => setTranslateSentence_OneInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-one-sentence-two"
                    value="title-of-steps-one-sentence-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-one-sentence-two"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_Two}
                  onChange={(e) => setTranslateSentence_Two(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_TwoInEN}
                  onChange={(e) => setTranslateSentence_TwoInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-two-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_TwoInAR}
                  onChange={(e) => setTranslateSentence_TwoInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-two-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_TwoInDE}
                  onChange={(e) => setTranslateSentence_TwoInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-one-sentence-Three"
                    value="title-of-steps-one-sentence-Three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-one-sentence-Three"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_Three}
                  onChange={(e) => setTranslateSentence_Three(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_ThreeInEN}
                  onChange={(e) =>
                    setTranslateSentence_ThreeInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Three-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_ThreeInAR}
                  onChange={(e) =>
                    setTranslateSentence_ThreeInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Three-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_ThreeInDE}
                  onChange={(e) =>
                    setTranslateSentence_ThreeInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-one-sentence-Four"
                    value="title-of-steps-one-sentence-Four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-one-sentence-Four"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_Four}
                  onChange={(e) => setTranslateSentence_Four(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Four-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_FourInEN}
                  onChange={(e) =>
                    setTranslateSentence_FourInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Four-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Four-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_FourInAR}
                  onChange={(e) =>
                    setTranslateSentence_FourInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Four-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_FourInDE}
                  onChange={(e) =>
                    setTranslateSentence_FourInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-one-sentence-Five"
                    value="title-of-steps-one-sentence-Five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-one-sentence-Five"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_Five}
                  onChange={(e) => setTranslateSentence_Five(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Five-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_FiveInEN}
                  onChange={(e) =>
                    setTranslateSentence_FiveInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Five-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Five-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_FiveInAR}
                  onChange={(e) =>
                    setTranslateSentence_FiveInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Five-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_FiveInDE}
                  onChange={(e) =>
                    setTranslateSentence_FiveInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-one-sentence-Six"
                    value="title-of-steps-one-sentence-Six"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-one-sentence-Six"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_Six}
                  onChange={(e) => setTranslateSentence_Six(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Six-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_SixInEN}
                  onChange={(e) => setTranslateSentence_SixInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Six-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Six-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_SixInAR}
                  onChange={(e) => setTranslateSentence_SixInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-one-sentence-Six-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-one-sentence-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_SixInDE}
                  onChange={(e) => setTranslateSentence_SixInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <hr />

            {/* image 1*/}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-steps-one"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={(e) => handleUploadImage(e, 0)}
                />
              </form>

              <Label
                htmlFor="dropzone-file-steps-one"
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
                    image in Steps one "1"
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
                {data.M_Steps[0].img && (
                  <img
                    src={`${domain}/${data.M_Steps[0].img}`}
                    alt="dropzone-file-steps-one"
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
            {/* toggle dir 1 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to put the image on the right or left for English
                Lang.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setDir_One(dir_One === 1 ? 2 : 1)}
              >
                {dir_One === 1 ? "Right" : "Left"}
              </Button>
            </div>
            <hr />
            {/* toggle whatsapp 1 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to show whatsapp button.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setWhatsapp_One(!whatsapp_One)}
              >
                {whatsapp_One ? "Yes" : "No"}
              </Button>
            </div>
            <hr />
            <hr />
          </div>

          {/*  */}
          {/* steps 2 */}
          <div className="space-y-6 mt-5">
            {/* title 2*/}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-steps-Two"
                    value="title-of-steps-Two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-steps-Two"
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
                  htmlFor="myTextarea-m-steps-Two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-title-m-steps-Two-EN"
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
                  htmlFor="myTextarea-title-m-teps-Two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-title-m-teps-Two-AR"
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
                  htmlFor="myTextarea-title-m-steps-Two-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-title-m-steps-Two-DE"
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
            <hr />
            {/* para 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-steps-Two"
                    value="Para-of-steps-Two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-steps-Two"
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
                  htmlFor="myTextaream-para-m-steps-Two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextaream-para-m-steps-Two-EN"
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
                  htmlFor="myTextaream-para-m-teps-Two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextaream-para-m-teps-Two-AR"
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
                  htmlFor="myTextaream-para-m-steps-Two-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextaream-para-m-steps-Two-DE"
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
            <hr />
            {/* the six steps 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-two-sentence-one"
                    value="title-of-steps-two-sentence-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-two-sentence-one"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_One}
                  onChange={(e) => setTranslateSentence_2_One(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_OneInEN}
                  onChange={(e) =>
                    setTranslateSentence_2_OneInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-one-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_OneInAR}
                  onChange={(e) =>
                    setTranslateSentence_2_OneInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-one-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_OneInDE}
                  onChange={(e) =>
                    setTranslateSentence_2_OneInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-two-sentence-two"
                    value="title-of-steps-two-sentence-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-two-sentence-two"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_Two}
                  onChange={(e) => setTranslateSentence_2_Two(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_TwoInEN}
                  onChange={(e) =>
                    setTranslateSentence_2_TwoInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-two-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_TwoInAR}
                  onChange={(e) =>
                    setTranslateSentence_2_TwoInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-two-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_TwoInDE}
                  onChange={(e) =>
                    setTranslateSentence_2_TwoInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-two-sentence-Three"
                    value="title-of-steps-two-sentence-Three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-two-sentence-Three"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_Three}
                  onChange={(e) => setTranslateSentence_2_Three(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_ThreeInEN}
                  onChange={(e) =>
                    setTranslateSentence_2_ThreeInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Three-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_ThreeInAR}
                  onChange={(e) =>
                    setTranslateSentence_2_ThreeInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Three-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_ThreeInDE}
                  onChange={(e) =>
                    setTranslateSentence_2_ThreeInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-two-sentence-Four"
                    value="title-of-steps-two-sentence-Four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-two-sentence-Four"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_Four}
                  onChange={(e) => setTranslateSentence_2_Four(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Four-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_FourInEN}
                  onChange={(e) =>
                    setTranslateSentence_2_FourInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Four-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Four-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_FourInAR}
                  onChange={(e) =>
                    setTranslateSentence_2_FourInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Four-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_FourInDE}
                  onChange={(e) =>
                    setTranslateSentence_2_FourInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-two-sentence-Five"
                    value="title-of-steps-two-sentence-Five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-two-sentence-Five"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_Five}
                  onChange={(e) => setTranslateSentence_2_Five(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Five-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_FiveInEN}
                  onChange={(e) =>
                    setTranslateSentence_2_FiveInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Five-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Five-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_FiveInAR}
                  onChange={(e) =>
                    setTranslateSentence_2_FiveInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Five-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_FiveInDE}
                  onChange={(e) =>
                    setTranslateSentence_2_FiveInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-two-sentence-Six"
                    value="title-of-steps-two-sentence-Six"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-two-sentence-Six"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_Six}
                  onChange={(e) => setTranslateSentence_2_Six(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Six-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_SixInEN}
                  onChange={(e) =>
                    setTranslateSentence_2_SixInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Six-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Six-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_SixInAR}
                  onChange={(e) =>
                    setTranslateSentence_2_SixInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-two-sentence-Six-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-two-sentence-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_2_SixInDE}
                  onChange={(e) =>
                    setTranslateSentence_2_SixInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <hr />

            {/* image 2 */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-steps-two"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={(e) => handleUploadImage(e, 1)}
                />
              </form>

              <Label
                htmlFor="dropzone-file-steps-two"
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
                    image in Steps two "2"
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
                {data.M_Steps[1].img && (
                  <img
                    src={`${domain}/${data.M_Steps[1].img}`}
                    alt="dropzone-file-steps-two"
                    className={`object-contain w-full h-full mx-auto
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
            {/* toggle dir 2 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to put the image on the right or left for English
                Lang.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setDir_Two(dir_Two === 1 ? 2 : 1)}
              >
                {dir_Two === 1 ? "Right" : "Left"}
              </Button>
            </div>
            <hr />
            {/* toggle whatsapp 2 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to show whatsapp button.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setWhatsapp_Two(!whatsapp_Two)}
              >
                {whatsapp_Two ? "Yes" : "No"}
              </Button>
            </div>
            <hr />
            <hr />
          </div>

          {/*  */}
          {/* steps 3 */}
          <div className="space-y-6 mt-5">
            {/* title 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-steps-Three"
                    value="title-of-steps-Three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-steps-Three"
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
                  htmlFor="myTextarea-m-steps-Three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-title-m-steps-Three-EN"
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
                  htmlFor="myTextarea-title-m-teps-Three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-title-m-teps-Three-AR"
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
                  htmlFor="myTextarea-title-m-steps-Three-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-title-m-steps-Three-DE"
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
            <hr />
            {/* para 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-steps-Three"
                    value="Para-of-steps-Three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-steps-Three"
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
                  htmlFor="myTextaream-para-m-steps-Three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextaream-para-m-steps-Three-EN"
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
                  htmlFor="myTextaream-para-m-teps-Three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextaream-para-m-teps-Three-AR"
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
                  htmlFor="myTextaream-para-m-steps-Three-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextaream-para-m-steps-Three-DE"
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
            <hr />
            {/* the six steps 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-Three-sentence-one"
                    value="title-of-steps-Three-sentence-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-Three-sentence-one"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_One}
                  onChange={(e) => setTranslateSentence_3_One(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_OneInEN}
                  onChange={(e) =>
                    setTranslateSentence_3_OneInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-one-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_OneInAR}
                  onChange={(e) =>
                    setTranslateSentence_3_OneInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-one-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_OneInDE}
                  onChange={(e) =>
                    setTranslateSentence_3_OneInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-Three-sentence-two"
                    value="title-of-steps-Three-sentence-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-Three-sentence-two"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_Two}
                  onChange={(e) => setTranslateSentence_3_Two(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_TwoInEN}
                  onChange={(e) =>
                    setTranslateSentence_3_TwoInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-two-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_TwoInAR}
                  onChange={(e) =>
                    setTranslateSentence_3_TwoInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-two-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_TwoInDE}
                  onChange={(e) =>
                    setTranslateSentence_3_TwoInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-Three-sentence-Three"
                    value="title-of-steps-Three-sentence-Three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-Three-sentence-Three"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_Three}
                  onChange={(e) => setTranslateSentence_3_Three(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_ThreeInEN}
                  onChange={(e) =>
                    setTranslateSentence_3_ThreeInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Three-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_ThreeInAR}
                  onChange={(e) =>
                    setTranslateSentence_3_ThreeInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Three-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_ThreeInDE}
                  onChange={(e) =>
                    setTranslateSentence_3_ThreeInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-Three-sentence-Four"
                    value="title-of-steps-Three-sentence-Four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-Three-sentence-Four"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_Four}
                  onChange={(e) => setTranslateSentence_3_Four(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Four-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_FourInEN}
                  onChange={(e) =>
                    setTranslateSentence_3_FourInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Four-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Four-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_FourInAR}
                  onChange={(e) =>
                    setTranslateSentence_3_FourInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Four-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_FourInDE}
                  onChange={(e) =>
                    setTranslateSentence_3_FourInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-Three-sentence-Five"
                    value="title-of-steps-Three-sentence-Five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-Three-sentence-Five"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_Five}
                  onChange={(e) => setTranslateSentence_3_Five(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Five-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_FiveInEN}
                  onChange={(e) =>
                    setTranslateSentence_3_FiveInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Five-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Five-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_FiveInAR}
                  onChange={(e) =>
                    setTranslateSentence_3_FiveInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Five-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_FiveInDE}
                  onChange={(e) =>
                    setTranslateSentence_3_FiveInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <br />

            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-steps-Three-sentence-Six"
                    value="title-of-steps-Three-sentence-Six"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-steps-Three-sentence-Six"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_Six}
                  onChange={(e) => setTranslateSentence_3_Six(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Six-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_SixInEN}
                  onChange={(e) =>
                    setTranslateSentence_3_SixInEN(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Six-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Six-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_SixInAR}
                  onChange={(e) =>
                    setTranslateSentence_3_SixInAR(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-steps-Three-sentence-Six-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-steps-Three-sentence-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateSentence_3_SixInDE}
                  onChange={(e) =>
                    setTranslateSentence_3_SixInDE(e.target.value)
                  }
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <hr />

            {/* image 3 */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-steps-three"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={(e) => handleUploadImage(e, 2)}
                />
              </form>

              <Label
                htmlFor="dropzone-file-steps-three"
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
                    image in Steps three "3"
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
                {data.M_Steps[2].img && (
                  <img
                    src={`${domain}/${data.M_Steps[2].img}`}
                    alt="dropzone-file-steps-three"
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
            {/* toggle dir 3 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to put the image on the right or left for English
                Lang.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setDir_Three(dir_Three === 1 ? 2 : 1)}
              >
                {dir_Three === 1 ? "Right" : "Left"}
              </Button>
            </div>
            <hr />
            {/* toggle whatsapp 3 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to show whatsapp button.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setWhatsapp_Three(!whatsapp_Three)}
              >
                {whatsapp_Three ? "Yes" : "No"}
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
                M_Steps: [
                  {
                    ...data.M_Steps[0],
                    title: translateTitle_One,
                    para: translatePara_One,
                    steps: [
                      { sentence: translateSentence_One },
                      { sentence: translateSentence_Two },
                      { sentence: translateSentence_Three },
                      { sentence: translateSentence_Four },
                      { sentence: translateSentence_Five },
                      { sentence: translateSentence_Six },
                    ],
                    dir: dir_One,
                    whatsapp_button: whatsapp_One,
                  },
                  {
                    ...data.M_Steps[1],
                    title: translateTitle_Two,
                    para: translatePara_Two,
                    steps: [
                      { sentence: translateSentence_2_One },
                      { sentence: translateSentence_2_Two },
                      { sentence: translateSentence_2_Three },
                      { sentence: translateSentence_2_Four },
                      { sentence: translateSentence_2_Five },
                      { sentence: translateSentence_2_Six },
                    ],
                    dir: dir_Two,
                    whatsapp_button: whatsapp_Two,
                  },
                  {
                    ...data.M_Steps[2],
                    title: translateTitle_Three,
                    para: translatePara_Three,
                    steps: [
                      { sentence: translateSentence_3_One },
                      { sentence: translateSentence_3_Two },
                      { sentence: translateSentence_3_Three },
                      { sentence: translateSentence_3_Four },
                      { sentence: translateSentence_3_Five },
                      { sentence: translateSentence_3_Six },
                    ],
                    dir: dir_Three,
                    whatsapp_button: whatsapp_Three,
                  },
                  ...data.M_Steps.slice(3),
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
                    whatsapp_button: false,
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
                    whatsapp_button: false,
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
                    whatsapp_button: false,
                  },
                ],
              }));
              setTranslateTitle_One("");
              setTranslateTitle_OneInEN("");
              setTranslateTitle_OneInAR("");
              setTranslateTitle_OneInDE("");

              setTranslatePara_One("");
              setTranslatePara_OneInEN("");
              setTranslatePara_OneInAR("");
              setTranslatePara_OneInDE("");

              setTranslateSentence_One("");
              setTranslateSentence_OneInEN("");
              setTranslateSentence_OneInAR("");
              setTranslateSentence_OneInDE("");

              setTranslateSentence_Two("");
              setTranslateSentence_TwoInEN("");
              setTranslateSentence_TwoInAR("");
              setTranslateSentence_TwoInDE("");

              setTranslateSentence_Three("");
              setTranslateSentence_ThreeInEN("");
              setTranslateSentence_ThreeInAR("");
              setTranslateSentence_ThreeInDE("");

              setTranslateSentence_Four("");
              setTranslateSentence_FourInEN("");
              setTranslateSentence_FourInAR("");
              setTranslateSentence_FourInDE("");

              setTranslateSentence_Five("");
              setTranslateSentence_FiveInEN("");
              setTranslateSentence_FiveInAR("");
              setTranslateSentence_FiveInDE("");

              setTranslateSentence_Six("");
              setTranslateSentence_SixInEN("");
              setTranslateSentence_SixInAR("");
              setTranslateSentence_SixInDE("");

              setDir_One(1);
              setWhatsapp_One(false);

              setTranslateTitle_Two("");
              setTranslateTitle_TwoInEN("");
              setTranslateTitle_TwoInAR("");
              setTranslateTitle_TwoInDE("");

              setTranslatePara_Two("");
              setTranslatePara_TwoInEN("");
              setTranslatePara_TwoInAR("");
              setTranslatePara_TwoInDE("");

              setTranslateSentence_2_One("");
              setTranslateSentence_2_OneInEN("");
              setTranslateSentence_2_OneInAR("");
              setTranslateSentence_2_OneInDE("");

              setTranslateSentence_2_Two("");
              setTranslateSentence_2_TwoInEN("");
              setTranslateSentence_2_TwoInAR("");
              setTranslateSentence_2_TwoInDE("");

              setTranslateSentence_2_Three("");
              setTranslateSentence_2_ThreeInEN("");
              setTranslateSentence_2_ThreeInAR("");
              setTranslateSentence_2_ThreeInDE("");

              setTranslateSentence_2_Four("");
              setTranslateSentence_2_FourInEN("");
              setTranslateSentence_2_FourInAR("");
              setTranslateSentence_2_FourInDE("");

              setTranslateSentence_2_Five("");
              setTranslateSentence_2_FiveInEN("");
              setTranslateSentence_2_FiveInAR("");
              setTranslateSentence_2_FiveInDE("");

              setTranslateSentence_2_Six("");
              setTranslateSentence_2_SixInEN("");
              setTranslateSentence_2_SixInAR("");
              setTranslateSentence_2_SixInDE("");

              setDir_Two(1);
              setWhatsapp_Two(false);

              setTranslateTitle_Three("");
              setTranslateTitle_ThreeInEN("");
              setTranslateTitle_ThreeInAR("");
              setTranslateTitle_ThreeInDE("");

              setTranslatePara_Three("");
              setTranslatePara_ThreeInEN("");
              setTranslatePara_ThreeInAR("");
              setTranslatePara_ThreeInDE("");

              setTranslateSentence_3_One("");
              setTranslateSentence_3_OneInEN("");
              setTranslateSentence_3_OneInAR("");
              setTranslateSentence_3_OneInDE("");

              setTranslateSentence_3_Two("");
              setTranslateSentence_3_TwoInEN("");
              setTranslateSentence_3_TwoInAR("");
              setTranslateSentence_3_TwoInDE("");

              setTranslateSentence_3_Three("");
              setTranslateSentence_3_ThreeInEN("");
              setTranslateSentence_3_ThreeInAR("");
              setTranslateSentence_3_ThreeInDE("");

              setTranslateSentence_3_Four("");
              setTranslateSentence_3_FourInEN("");
              setTranslateSentence_3_FourInAR("");
              setTranslateSentence_3_FourInDE("");

              setTranslateSentence_3_Five("");
              setTranslateSentence_3_FiveInEN("");
              setTranslateSentence_3_FiveInAR("");
              setTranslateSentence_3_FiveInDE("");

              setTranslateSentence_3_Six("");
              setTranslateSentence_3_SixInEN("");
              setTranslateSentence_3_SixInAR("");
              setTranslateSentence_3_SixInDE("");

              setDir_Three(1);
              setWhatsapp_Three(false);
            }}
          >
            clear and cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
