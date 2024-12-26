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

export default function Model_M_Section_Two({
  domain,
  data,
  setData,
  setTranslation_M_Section_Two_EN,
  setTranslation_M_Section_Two_AR,
  setTranslation_M_Section_Two_DE,
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

  // infos
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

  const [dir, setDir] = useState(1);

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
      [data.M_Section_Two.title]: translateTitleInEN,
      [data.M_Section_Two.infos[0].title]: translateTitle_OneInEN,
      [data.M_Section_Two.infos[1].title]: translateTitle_TwoInEN,
      [data.M_Section_Two.infos[2].title]: translateTitle_ThreeInEN,
      [data.M_Section_Two.infos[0].para]: translatePara_OneInEN,
      [data.M_Section_Two.infos[1].para]: translatePara_TwoInEN,
      [data.M_Section_Two.infos[2].para]: translatePara_ThreeInEN,
    });

    const sanitizedTranslationAR = sanitizeTranslations({
      [data.M_Section_Two.title]: translateTitleInAR,
      [data.M_Section_Two.infos[0].title]: translateTitle_OneInAR,
      [data.M_Section_Two.infos[1].title]: translateTitle_TwoInAR,
      [data.M_Section_Two.infos[2].title]: translateTitle_ThreeInAR,
      [data.M_Section_Two.infos[0].para]: translatePara_OneInAR,
      [data.M_Section_Two.infos[1].para]: translatePara_TwoInAR,
      [data.M_Section_Two.infos[2].para]: translatePara_ThreeInAR,
    });

    const sanitizedTranslationDE = sanitizeTranslations({
      [data.M_Section_Two.title]: translateTitleInDE,
      [data.M_Section_Two.infos[0].title]: translateTitle_OneInDE,
      [data.M_Section_Two.infos[1].title]: translateTitle_TwoInDE,
      [data.M_Section_Two.infos[2].title]: translateTitle_ThreeInDE,
      [data.M_Section_Two.infos[0].para]: translatePara_OneInDE,
      [data.M_Section_Two.infos[1].para]: translatePara_TwoInDE,
      [data.M_Section_Two.infos[2].para]: translatePara_ThreeInDE,
    });

    setTranslation_M_Section_Two_EN(sanitizedTranslationEN);
    setTranslation_M_Section_Two_AR(sanitizedTranslationAR);
    setTranslation_M_Section_Two_DE(sanitizedTranslationDE);

    console.log("Sanitized Translations:", {
      en: sanitizedTranslationEN,
      ar: sanitizedTranslationAR,
      de: sanitizedTranslationDE,
    });
  }, [data.M_Section_Two]);

  // upload functions
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
          M_Section_Two: {
            ...prevData.M_Section_Two,
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

  const handleUploadIconOne = async (e) => {
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
          M_Section_Two: {
            ...prevData.M_Section_Two,
            infos: prevData.M_Section_Two.infos.map((info, index) =>
              index === 0 ? { ...info, icon: uploadedUrls[0] } : info
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
  const handleUploadIconTwo = async (e) => {
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
          M_Section_Two: {
            ...prevData.M_Section_Two,
            infos: prevData.M_Section_Two.infos.map((info, index) =>
              index === 1 ? { ...info, icon: uploadedUrls[0] } : info
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
  const handleUploadIconThree = async (e) => {
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
          M_Section_Two: {
            ...prevData.M_Section_Two,
            infos: prevData.M_Section_Two.infos.map((info, index) =>
              index === 2 ? { ...info, icon: uploadedUrls[0] } : info
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

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="w-fit">
        Section Two
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="py-2 items-center">
          Terms of Service
        </Modal.Header>
        <Modal.Body className="px-3">
          <img src="/images/M_Section_Two.png" alt="m Section Two one img" />
          <hr />
          <div className="space-y-6 mt-5">
            {/* title */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-Section_Two-one"
                    value="title-of-Section_Two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-Section_Two-one"
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
                  htmlFor="myTextarea-m-Section_Two-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-Section_Two-one-EN"
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
                  htmlFor="myTextarea-m-Section_Two-one-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-m-Section_Two-one-DE"
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

            {/* the three infos */}
            {/* info title 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-section-two-one-Title-one"
                    value="title-of-section-two-Title-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-section-two-one-Title-one"
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
                  htmlFor="title-of-m-section-two-one-Title-one-EN"
                  value="Enter your Title in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-section-two-one-Title-one-EN"
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
                  htmlFor="title-of-m-section-two-one-Title-one-AR"
                  value="Enter your Title in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-section-two-one-Title-one-AR"
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
                  htmlFor="title-of-m-section-two-one-Title-one-EN"
                  value="Enter your Title in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-section-two-one-Title-one-EN"
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
            {/* info Para 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-m-section-two-one-Para-one"
                    value="Para-of-section-two-Para-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-m-section-two-one-Para-one"
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
                  htmlFor="Para-of-m-section-two-one-Para-one-EN"
                  value="Enter your Para in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-section-two-one-Para-one-EN"
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
                  htmlFor="Para-of-m-section-two-one-Para-one-AR"
                  value="Enter your Para in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-section-two-one-Para-one-AR"
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
                  htmlFor="Para-of-m-section-two-one-Para-one-DE"
                  value="Enter your Para in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-section-two-one-Para-one-DE"
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
            <br />
            {/* icon 1 */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-section-two-icon1"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={handleUploadIconOne}
                />
              </form>

              <Label
                htmlFor="dropzone-file-section-two-icon1"
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
                    image in Intro four
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
                {data.M_Section_Two.infos[0].icon && (
                  <img
                    src={`${domain}/${data.M_Section_Two.infos[0].icon}`}
                    alt="dropzone-file-section-two-icon1"
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

            {/* info title 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-section-two-Two-Title-Two"
                    value="title-of-section-two-Title-Two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-section-two-Two-Title-Two"
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
                  htmlFor="title-of-m-section-two-Two-Title-Two-EN"
                  value="Enter your Title in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-section-two-Two-Title-Two-EN"
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
                  htmlFor="title-of-m-section-two-Two-Title-Two-AR"
                  value="Enter your Title in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-section-two-Two-Title-Two-AR"
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
                  htmlFor="title-of-m-section-two-Two-Title-Two-EN"
                  value="Enter your Title in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-section-two-Two-Title-Two-EN"
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
            {/* info Para 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-m-section-two-Two-Para-Two"
                    value="Para-of-section-two-Para-Two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-m-section-two-Two-Para-Two"
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
                  htmlFor="Para-of-m-section-two-Two-Para-Two-EN"
                  value="Enter your Para in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-section-two-Two-Para-Two-EN"
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
                  htmlFor="Para-of-m-section-two-Two-Para-Two-AR"
                  value="Enter your Para in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-section-two-Two-Para-Two-AR"
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
                  htmlFor="Para-of-m-section-two-Two-Para-Two-EN"
                  value="Enter your Para in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-section-two-Two-Para-Two-EN"
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
            <br />
            {/* icon 2 */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-section-two-icon2"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={handleUploadIconTwo}
                />
              </form>

              <Label
                htmlFor="dropzone-file-section-two-icon2"
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
                    image in Intro four
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
                {data.M_Section_Two.infos[1].icon && (
                  <img
                    src={`${domain}/${data.M_Section_Two.infos[1].icon}`}
                    alt="dropzone-file-section-two-icon2"
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

            {/* info title 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-section-two-Three-Title-Three"
                    value="title-of-section-two-Title-Three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-section-two-Three-Title-Three"
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
                  htmlFor="title-of-m-section-two-Three-Title-Three-EN"
                  value="Enter your Title in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-section-two-Three-Title-Three-EN"
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
                  htmlFor="title-of-m-section-two-Three-Title-Three-AR"
                  value="Enter your Title in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-section-two-Three-Title-Three-AR"
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
                  htmlFor="title-of-m-section-two-Three-Title-Three-EN"
                  value="Enter your Title in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-section-two-Three-Title-Three-EN"
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
            {/* info Para 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-m-section-two-Three-Para-Three"
                    value="Para-of-section-two-Para-Three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-m-section-two-Three-Para-Three"
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
                  htmlFor="Para-of-m-section-two-Three-Para-Three-EN"
                  value="Enter your Para in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-section-two-Three-Para-Three-EN"
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
                  htmlFor="Para-of-m-section-two-Three-Para-Three-AR"
                  value="Enter your Para in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-section-two-Three-Para-Three-AR"
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
                  htmlFor="Para-of-m-section-two-Three-Para-Three-EN"
                  value="Enter your Para in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="Para-of-m-section-two-Three-Para-Three-EN"
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
            <br />
            {/* icon 3 */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-section-two-icon3"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={handleUploadIconThree}
                />
              </form>

              <Label
                htmlFor="dropzone-file-section-two-icon3"
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
                    image in Intro four
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
                {data.M_Section_Two.infos[2].icon && (
                  <img
                    src={`${domain}/${data.M_Section_Two.infos[2].icon}`}
                    alt="dropzone-file-section-two-icon3"
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

            {/* image */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-section-two"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={handleUploadImage}
                />
              </form>

              <Label
                htmlFor="dropzone-file-section-two"
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
                    image in Intro four
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
                {data.M_Section_Two.img && (
                  <img
                    src={`${domain}/${data.M_Section_Two.img}`}
                    alt="dropzone-file-section-two"
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
                M_Section_Two: {
                  ...data.M_Section_Two,
                  title: translateTitle,
                  infos: [
                    {
                      ...data.M_Section_Two.infos[0],
                      title: translateTitle_One,
                      para: translateTitle_One,
                    },
                    {
                      ...data.M_Section_Two.infos[1],
                      title: translateTitle_Two,
                      para: translateTitle_Two,
                    },
                    {
                      ...data.M_Section_Two.infos[2],
                      title: translateTitle_Three,
                      para: translateTitle_Three,
                    },
                  ],
                  dir: setDir,
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
                M_Section_Two: {
                  title: "",
                  infos: [
                    { title: "", para: "", icon: "" },
                    { title: "", para: "", icon: "" },
                    { title: "", para: "", icon: "" },
                    { title: "", para: "", icon: "" },
                    { title: "", para: "", icon: "" },
                    { title: "", para: "", icon: "" },
                  ],
                  img: "",
                  dir: 1,
                },
              }));
              setTranslateTitle("");
              setTranslateTitleInEN("");
              setTranslateTitleInAR("");
              setTranslateTitleInDE("");

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

              setDir(1);
            }}
          >
            clear and cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
