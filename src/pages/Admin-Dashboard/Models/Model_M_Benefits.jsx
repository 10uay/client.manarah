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

export default function Model_M_Benefits({
  data,
  setData,
  domain,
  setTranslation_M_Benefits_EN,
  setTranslation_M_Benefits_AR,
  setTranslation_M_Benefits_DE,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [imageUploadError, setImageUploadError] = useState(false);

  //
  const [imagePercent, setImagePercent] = useState();
  const fileRef = useRef(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  //

  // title
  const [translateTitle, setTranslateTitle] = useState("");
  const [translateTitleInEN, setTranslateTitleInEN] = useState("");
  const [translateTitleInAR, setTranslateTitleInAR] = useState("");
  const [translateTitleInDE, setTranslateTitleInDE] = useState("");

  // para
  const [translatePara, setTranslatePara] = useState("");
  const [translateParaInEN, setTranslateParaInEN] = useState("");
  const [translateParaInAR, setTranslateParaInAR] = useState("");
  const [translateParaInDE, setTranslateParaInDE] = useState("");

  // benefits
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

  // title 5
  const [translateTitle_Five, setTranslateTitle_Five] = useState("");
  const [translateTitle_FiveInEN, setTranslateTitle_FiveInEN] = useState("");
  const [translateTitle_FiveInAR, setTranslateTitle_FiveInAR] = useState("");
  const [translateTitle_FiveInDE, setTranslateTitle_FiveInDE] = useState("");
  // Para 5
  const [translatePara_Five, setTranslatePara_Five] = useState("");
  const [translatePara_FiveInEN, setTranslatePara_FiveInEN] = useState("");
  const [translatePara_FiveInAR, setTranslatePara_FiveInAR] = useState("");
  const [translatePara_FiveInDE, setTranslatePara_FiveInDE] = useState("");

  // title 6
  const [translateTitle_Six, setTranslateTitle_Six] = useState("");
  const [translateTitle_SixInEN, setTranslateTitle_SixInEN] = useState("");
  const [translateTitle_SixInAR, setTranslateTitle_SixInAR] = useState("");
  const [translateTitle_SixInDE, setTranslateTitle_SixInDE] = useState("");
  // para 6
  const [translatePara_Six, setTranslatePara_Six] = useState("");
  const [translatePara_SixInEN, setTranslatePara_SixInEN] = useState("");
  const [translatePara_SixInAR, setTranslatePara_SixInAR] = useState("");
  const [translatePara_SixInDE, setTranslatePara_SixInDE] = useState("");

  const [icons, setIcons] = useState(false);

  const sanitizeTranslations = (translations) => {
    const sanitized = {};
    for (const key in translations) {
      if (key.trim() !== "") {
        sanitized[key] = translations[key];
      }
    }
    return sanitized;
  };

  console.log(data?.M_Benefits);

  useEffect(() => {
    const sanitizedTranslationEN = sanitizeTranslations({
      [data.M_Benefits.title]: translateTitleInEN,
      [data.M_Benefits.para]: translateParaInEN,
      [data.M_Benefits.benefits[0].title]: translateTitle_OneInEN,
      [data.M_Benefits.benefits[1].title]: translateTitle_TwoInEN,
      [data.M_Benefits.benefits[2].title]: translateTitle_ThreeInEN,
      [data.M_Benefits.benefits[3].title]: translateTitle_FourInEN,
      [data.M_Benefits.benefits[4].title]: translateTitle_FiveInEN,
      [data.M_Benefits.benefits[5].title]: translateTitle_SixInEN,
      [data.M_Benefits.benefits[0].para]: translatePara_OneInEN,
      [data.M_Benefits.benefits[1].para]: translatePara_TwoInEN,
      [data.M_Benefits.benefits[2].para]: translatePara_ThreeInEN,
      [data.M_Benefits.benefits[3].para]: translatePara_FourInEN,
      [data.M_Benefits.benefits[4].para]: translatePara_FiveInEN,
      [data.M_Benefits.benefits[5].para]: translatePara_SixInEN,
    });

    const sanitizedTranslationAR = sanitizeTranslations({
      [data.M_Benefits.title]: translateTitleInAR,
      [data.M_Benefits.para]: translateParaInAR,
      [data.M_Benefits.benefits[0].title]: translateTitle_OneInAR,
      [data.M_Benefits.benefits[1].title]: translateTitle_TwoInAR,
      [data.M_Benefits.benefits[2].title]: translateTitle_ThreeInAR,
      [data.M_Benefits.benefits[3].title]: translateTitle_FourInAR,
      [data.M_Benefits.benefits[4].title]: translateTitle_FiveInAR,
      [data.M_Benefits.benefits[5].title]: translateTitle_SixInAR,
      [data.M_Benefits.benefits[0].para]: translatePara_OneInAR,
      [data.M_Benefits.benefits[1].para]: translatePara_TwoInAR,
      [data.M_Benefits.benefits[2].para]: translatePara_ThreeInAR,
      [data.M_Benefits.benefits[3].para]: translatePara_FourInAR,
      [data.M_Benefits.benefits[4].para]: translatePara_FiveInAR,
      [data.M_Benefits.benefits[5].para]: translatePara_SixInAR,
    });

    const sanitizedTranslationDE = sanitizeTranslations({
      [data.M_Benefits.title]: translateTitleInDE,
      [data.M_Benefits.para]: translateParaInDE,
      [data.M_Benefits.benefits[0].title]: translateTitle_OneInDE,
      [data.M_Benefits.benefits[1].title]: translateTitle_TwoInDE,
      [data.M_Benefits.benefits[2].title]: translateTitle_ThreeInDE,
      [data.M_Benefits.benefits[3].title]: translateTitle_FourInDE,
      [data.M_Benefits.benefits[4].title]: translateTitle_FiveInDE,
      [data.M_Benefits.benefits[5].title]: translateTitle_SixInDE,
      [data.M_Benefits.benefits[0].para]: translatePara_OneInDE,
      [data.M_Benefits.benefits[1].para]: translatePara_TwoInDE,
      [data.M_Benefits.benefits[2].para]: translatePara_ThreeInDE,
      [data.M_Benefits.benefits[3].para]: translatePara_FourInDE,
      [data.M_Benefits.benefits[4].para]: translatePara_FiveInDE,
      [data.M_Benefits.benefits[5].para]: translatePara_SixInDE,
    });

    setTranslation_M_Benefits_EN(sanitizedTranslationEN);
    setTranslation_M_Benefits_AR(sanitizedTranslationAR);
    setTranslation_M_Benefits_DE(sanitizedTranslationDE);

    console.log("Sanitized Translations:", {
      en: sanitizedTranslationEN,
      ar: sanitizedTranslationAR,
      de: sanitizedTranslationDE,
    });
  }, [data.M_Benefits]);

  // upload function
  const handleUploadImage = async (e) => {
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
        setData((prevData) => ({
          ...prevData,
          M_Benefits: {
            ...prevData.M_Benefits,
            img: uploadedUrls[0],
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

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="w-fit">
        Benefits
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="py-2 items-center">
          Terms of Service
        </Modal.Header>
        <Modal.Body className="px-3">
          <img src="/images/M_Benefits.png" alt="m benefits one img" />
          <hr />
          <div className="space-y-6 mt-5">
            {/* title */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-benefits-one"
                    value="title-of-benefits"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-benefits-one"
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
                  htmlFor="myTextarea-m-benefits-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-benefits-one-EN"
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
                  value={translateTitleInAR}
                  onChange={(e) => setTranslateTitleInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-m-benefits-one-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-benefits-one-DE"
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
            {/* para */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-benefits-para"
                    value="Para-of-benefits-para"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-benefits-para"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara}
                  onChange={(e) => setTranslatePara(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-m-benefits-para-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-benefits-para-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateParaInEN}
                  onChange={(e) => setTranslateParaInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-m-teps-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-teps-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateParaInAR}
                  onChange={(e) => setTranslateParaInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="myTextarea-m-benefits-para-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-benefits-para-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateParaInDE}
                  onChange={(e) => setTranslateParaInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <hr />

            {/* the six benefits */}
            {/* benefit title 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-benefits-one-Title-one"
                    value="title-of-benefits-Title-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-benefits-one-Title-one"
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
                  htmlFor="title-of-m-benefits-one-Title-one-EN"
                  value="Enter your Title in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-one-Title-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_OneInEN}
                  onChange={(e) => setTranslateTitle_OneInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-one-Title-one-AR"
                  value="Enter your Title in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-one-Title-one-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_OneInAR}
                  onChange={(e) => setTranslateTitle_OneInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-one-Title-one-EN"
                  value="Enter your Title in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-one-Title-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_OneInDE}
                  onChange={(e) => setTranslateTitle_OneInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
            </div>
            <br />
            {/* benefit Para 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-m-benefits-one-Para-one"
                    value="Para-of-benefits-Para-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-m-benefits-one-Para-one"
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
                  htmlFor="Para-of-m-benefits-one-Para-one-EN"
                  value="Enter your Para in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-one-Para-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_OneInEN}
                  onChange={(e) => setTranslatePara_OneInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-one-Para-one-AR"
                  value="Enter your Para in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-one-Para-one-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_OneInAR}
                  onChange={(e) => setTranslatePara_OneInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-one-Para-one-EN"
                  value="Enter your Para in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-one-Para-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_OneInDE}
                  onChange={(e) => setTranslatePara_OneInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
            </div>
            <hr />

            {/* benefit title 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-benefits-Two-Title-Two"
                    value="title-of-benefits-Title-Two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-benefits-Two-Title-Two"
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
                  htmlFor="title-of-m-benefits-Two-Title-Two-EN"
                  value="Enter your Title in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Two-Title-Two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_TwoInEN}
                  onChange={(e) => setTranslateTitle_TwoInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-Two-Title-Two-AR"
                  value="Enter your Title in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Two-Title-Two-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_TwoInAR}
                  onChange={(e) => setTranslateTitle_TwoInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-Two-Title-Two-EN"
                  value="Enter your Title in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Two-Title-Two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_TwoInDE}
                  onChange={(e) => setTranslateTitle_TwoInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
            </div>
            <br />
            {/* benefit Para 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-m-benefits-Two-Para-Two"
                    value="Para-of-benefits-Para-Two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-m-benefits-Two-Para-Two"
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
                  htmlFor="Para-of-m-benefits-Two-Para-Two-EN"
                  value="Enter your Para in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Two-Para-Two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_TwoInEN}
                  onChange={(e) => setTranslatePara_TwoInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-Two-Para-Two-AR"
                  value="Enter your Para in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Two-Para-Two-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_TwoInAR}
                  onChange={(e) => setTranslatePara_TwoInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-Two-Para-Two-EN"
                  value="Enter your Para in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Two-Para-Two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_TwoInDE}
                  onChange={(e) => setTranslatePara_TwoInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
            </div>
            <hr />

            {/* benefit title 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-benefits-Three-Title-Three"
                    value="title-of-benefits-Title-Three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-benefits-Three-Title-Three"
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
                  htmlFor="title-of-m-benefits-Three-Title-Three-EN"
                  value="Enter your Title in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Three-Title-Three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_ThreeInEN}
                  onChange={(e) => setTranslateTitle_ThreeInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-Three-Title-Three-AR"
                  value="Enter your Title in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Three-Title-Three-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_ThreeInAR}
                  onChange={(e) => setTranslateTitle_ThreeInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-Three-Title-Three-EN"
                  value="Enter your Title in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Three-Title-Three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_ThreeInDE}
                  onChange={(e) => setTranslateTitle_ThreeInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
            </div>
            <br />
            {/* benefit Para 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-m-benefits-Three-Para-Three"
                    value="Para-of-benefits-Para-Three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-m-benefits-Three-Para-Three"
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
                  htmlFor="Para-of-m-benefits-Three-Para-Three-EN"
                  value="Enter your Para in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Three-Para-Three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_ThreeInEN}
                  onChange={(e) => setTranslatePara_ThreeInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-Three-Para-Three-AR"
                  value="Enter your Para in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Three-Para-Three-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_ThreeInAR}
                  onChange={(e) => setTranslatePara_ThreeInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-Three-Para-Three-EN"
                  value="Enter your Para in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Three-Para-Three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_ThreeInDE}
                  onChange={(e) => setTranslatePara_ThreeInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
            </div>
            <hr />

            {/* benefit title 4 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-benefits-Four-Title-Four"
                    value="title-of-benefits-Title-Four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-benefits-Four-Title-Four"
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
                  htmlFor="title-of-m-benefits-Four-Title-Four-EN"
                  value="Enter your Title in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Four-Title-Four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FourInEN}
                  onChange={(e) => setTranslateTitle_FourInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-Four-Title-Four-AR"
                  value="Enter your Title in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Four-Title-Four-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FourInAR}
                  onChange={(e) => setTranslateTitle_FourInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-Four-Title-Four-EN"
                  value="Enter your Title in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Four-Title-Four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FourInDE}
                  onChange={(e) => setTranslateTitle_FourInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
            </div>
            <br />
            {/* benefit Para 4 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-m-benefits-Four-Para-Four"
                    value="Para-of-benefits-Para-Four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-m-benefits-Four-Para-Four"
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
                  htmlFor="Para-of-m-benefits-Four-Para-Four-EN"
                  value="Enter your Para in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Four-Para-Four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FourInEN}
                  onChange={(e) => setTranslatePara_FourInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-Four-Para-Four-AR"
                  value="Enter your Para in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Four-Para-Four-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FourInAR}
                  onChange={(e) => setTranslatePara_FourInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-Four-Para-Four-EN"
                  value="Enter your Para in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Four-Para-Four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FourInDE}
                  onChange={(e) => setTranslatePara_FourInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
            </div>
            <hr />

            {/* benefit title 5 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-benefits-Five-Title-Five"
                    value="title-of-benefits-Title-Five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-benefits-Five-Title-Five"
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
                  htmlFor="title-of-m-benefits-Five-Title-Five-EN"
                  value="Enter your Title in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Five-Title-Five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FiveInEN}
                  onChange={(e) => setTranslateTitle_FiveInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-Five-Title-Five-AR"
                  value="Enter your Title in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Five-Title-Five-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FiveInAR}
                  onChange={(e) => setTranslateTitle_FiveInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-Five-Title-Five-EN"
                  value="Enter your Title in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Five-Title-Five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_FiveInDE}
                  onChange={(e) => setTranslateTitle_FiveInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
            </div>
            <br />
            {/* benefit Para 5 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-m-benefits-Five-Para-Five"
                    value="Para-of-benefits-Para-Five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-m-benefits-Five-Para-Five"
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
                  htmlFor="Para-of-m-benefits-Five-Para-Five-EN"
                  value="Enter your Para in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Five-Para-Five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FiveInEN}
                  onChange={(e) => setTranslatePara_FiveInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-Five-Para-Five-AR"
                  value="Enter your Para in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Five-Para-Five-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FiveInAR}
                  onChange={(e) => setTranslatePara_FiveInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-Five-Para-Five-EN"
                  value="Enter your Para in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Five-Para-Five-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_FiveInDE}
                  onChange={(e) => setTranslatePara_FiveInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
            </div>
            <hr />

            {/* benefit title 6 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-benefits-Six-Title-Six"
                    value="title-of-benefits-Title-Six"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-benefits-Six-Title-Six"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_Six}
                  onChange={(e) => setTranslateTitle_Six(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-Six-Title-Six-EN"
                  value="Enter your Title in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Six-Title-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_SixInEN}
                  onChange={(e) => setTranslateTitle_SixInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-Six-Title-Six-AR"
                  value="Enter your Title in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Six-Title-Six-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_SixInAR}
                  onChange={(e) => setTranslateTitle_SixInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-benefits-Six-Title-Six-EN"
                  value="Enter your Title in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-benefits-Six-Title-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_SixInDE}
                  onChange={(e) => setTranslateTitle_SixInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Title..."
                />
              </div>
            </div>
            <br />
            {/* benefit Para 6 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-m-benefits-Six-Para-Six"
                    value="Para-of-benefits-Para-Six"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-m-benefits-Six-Para-Six"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_Six}
                  onChange={(e) => setTranslatePara_Six(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-Six-Para-Six-EN"
                  value="Enter your Para in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Six-Para-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_SixInEN}
                  onChange={(e) => setTranslatePara_SixInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-Six-Para-Six-AR"
                  value="Enter your Para in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Six-Para-Six-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_SixInAR}
                  onChange={(e) => setTranslatePara_SixInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="Para-of-m-benefits-Six-Para-Six-EN"
                  value="Enter your Para in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-benefits-Six-Para-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_SixInDE}
                  onChange={(e) => setTranslatePara_SixInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your Para..."
                />
              </div>
            </div>
            <hr />

            {/* image */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-benefits"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={handleUploadImage}
                />
              </form>

              <Label
                htmlFor="dropzone-file-benefits"
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
                {data.M_Benefits.img && (
                  <img
                    src={`${domain}/${data.M_Benefits.img}`}
                    alt="dropzone-file-benefits"
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
            {/* toggle icons 1 */}
            <div>
              <span className="block mb-2 text-[#7936EB] capitalize">
                do you want to show icons button.?
              </span>
              <Button
                gradientMonochrome="purple"
                onClick={() => setIcons(!icons)}
              >
                {icons ? "Yes" : "No"}
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
                M_Benefits: {
                  ...data.M_Benefits,
                  title: translateTitle,
                  para: translatePara,
                  benefits: [
                    { title: translateTitle_One, para: translatePara_One },
                    { title: translateTitle_Two, para: translatePara_Two },
                    { title: translateTitle_Three, para: translatePara_Three },
                    { title: translateTitle_Four, para: translatePara_Four },
                    { title: translateTitle_Five, para: translatePara_Five },
                    { title: translateTitle_Six, para: translatePara_Six },
                  ],
                  icons: icons,
                },
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
              }));
              setTranslateTitle("");
              setTranslateTitleInEN("");
              setTranslateTitleInAR("");
              setTranslateTitleInDE("");

              setTranslatePara("");
              setTranslateParaInEN("");
              setTranslateParaInAR("");
              setTranslateParaInDE("");

              setTranslateTitle_One("");
              setTranslateTitle_OneInEN("");
              setTranslateTitle_OneInAR("");
              setTranslateTitle_OneInDE("");

              setTranslateTitle_Two("");
              setTranslateTitle_TwoInEN("");
              setTranslateTitle_TwoInAR("");
              setTranslateTitle_TwoInDE("");

              setTranslateTitle_Three("");
              setTranslateTitle_ThreeInEN("");
              setTranslateTitle_ThreeInAR("");
              setTranslateTitle_ThreeInDE("");

              setTranslateTitle_Four("");
              setTranslateTitle_FourInEN("");
              setTranslateTitle_FourInAR("");
              setTranslateTitle_FourInDE("");

              setTranslateTitle_Five("");
              setTranslateTitle_FiveInEN("");
              setTranslateTitle_FiveInAR("");
              setTranslateTitle_FiveInDE("");

              setTranslateTitle_Six("");
              setTranslateTitle_SixInEN("");
              setTranslateTitle_SixInAR("");
              setTranslateTitle_SixInDE("");

              setTranslatePara_One("");
              setTranslatePara_OneInEN("");
              setTranslatePara_OneInAR("");
              setTranslatePara_OneInDE("");

              setTranslatePara_Two("");
              setTranslatePara_TwoInEN("");
              setTranslatePara_TwoInAR("");
              setTranslatePara_TwoInDE("");

              setTranslatePara_Three("");
              setTranslatePara_ThreeInEN("");
              setTranslatePara_ThreeInAR("");
              setTranslatePara_ThreeInDE("");

              setTranslatePara_Four("");
              setTranslatePara_FourInEN("");
              setTranslatePara_FourInAR("");
              setTranslatePara_FourInDE("");

              setTranslatePara_Five("");
              setTranslatePara_FiveInEN("");
              setTranslatePara_FiveInAR("");
              setTranslatePara_FiveInDE("");

              setTranslatePara_Six("");
              setTranslatePara_SixInEN("");
              setTranslatePara_SixInAR("");
              setTranslatePara_SixInDE("");

              setIcons(false);
            }}
          >
            clear and cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
