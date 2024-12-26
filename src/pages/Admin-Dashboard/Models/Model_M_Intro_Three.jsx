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

export default function Model_M_Intro_Three({
  domain,
  data,
  setData,
  setTranslation_M_Intro_Three_EN,
  setTranslation_M_Intro_Three_AR,
  setTranslation_M_Intro_Three_DE,
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

  // para
  const [translatePara, setTranslatePara] = useState("");
  const [translateParaInEN, setTranslateParaInEN] = useState("");
  const [translateParaInAR, setTranslateParaInAR] = useState("");
  const [translateParaInDE, setTranslateParaInDE] = useState("");

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
      [data.M_Intro_Three.title]: translateTitleInEN,
      [data.M_Intro_Three.para]: translateParaInEN,
    });

    const sanitizedTranslationAR = sanitizeTranslations({
      [data.M_Intro_Three.title]: translateTitleInAR,
      [data.M_Intro_Three.para]: translateParaInAR,
    });

    const sanitizedTranslationDE = sanitizeTranslations({
      [data.M_Intro_Three.title]: translateTitleInDE,
      [data.M_Intro_Three.para]: translateParaInDE,
    });

    setTranslation_M_Intro_Three_EN(sanitizedTranslationEN);
    setTranslation_M_Intro_Three_AR(sanitizedTranslationAR);
    setTranslation_M_Intro_Three_DE(sanitizedTranslationDE);

    // console.log("Sanitized Translations:", {
    //   en: sanitizedTranslationEN,
    //   ar: sanitizedTranslationAR,
    //   de: sanitizedTranslationDE,
    // });
  }, [data.M_Intro_Three]);

  // upload functions
  const handleUploadWideImage = async (e) => {
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
          M_Intro_Three: {
            ...prevData.M_Intro_Three,
            wide_img: uploadedUrls[0],
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

  const handleUploadImage = async (e) => {
    const image = e.target.files[0];
    const storage = getStorage(app);
    const imageName = new Date().getTime() + image.name;
    const storageRef = ref(storage, imageName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setUploadingImg(true);
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        if (error) {
          setUploadingImg(false);
          console.log("error uploading img in Intro Three");
        }
      },
      () => {
        setUploadingImg(false);
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setData((prevData) => ({
            ...prevData,
            M_Intro_Three: {
              ...prevData.M_Intro_Three,
              img: downloadURL,
            },
          }))
        );
      }
    );
  };

  // console.log(data.M_Intro_Three);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="w-fit">
        Intro Three
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="py-2 items-center">
          Terms of Service
        </Modal.Header>
        <Modal.Body className="px-3">
          <img src="/images/M_Intro_Three.png" alt="m intro Three img" />
          <hr />
          <div className="space-y-6 mt-5">
            {/* title */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-intro-three"
                    value="title-of-intro-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-intro-three"
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
                  htmlFor="myTextarea-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-EN"
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
                  id="myTextarea-EN"
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
                  htmlFor="myTextarea-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-DE"
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
                    htmlFor="para-of-intro-three"
                    value="para-of-intro-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="para-of-intro-three"
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
                  htmlFor="myTextarea-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-EN"
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
                  htmlFor="myTextarea-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-AR"
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
                  htmlFor="myTextarea-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-DE"
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
            {/* image */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-intro-Three"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={handleUploadImage}
                />
              </form>

              <Label
                htmlFor="dropzone-file-intro-Three"
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
                    image in Intro Three
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
                {data.M_Intro_Three.img && (
                  <img
                    src={data.M_Intro_Three.img}
                    alt="dropzone-file-intro-Three"
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
            {/* <div className="flex w-fit items-center justify-center">
              <Label
                htmlFor="dropzone-file-intro-three"
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
                    image in intro Three
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    PNG, JPG, WEBP
                  </p>
                </div>
                <FileInput
                  id="dropzone-file-intro-three"
                  className="hidden"
                  onChange={handleUploadImage}
                />
              </Label>
            </div> */}
            {/* wide image */}
            <div className="flex w-fit items-center justify-center">
              <form action="" className="hidden">
                <input
                  type="file"
                  id="dropzone-file-intro-Three-wide-img"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={handleUploadWideImage}
                />
              </form>

              <Label
                htmlFor="dropzone-file-intro-Three-wide-img"
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
                    Wide Image in Intro Three
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
                {data.M_Intro_Three.wide_img && (
                  <img
                    src={`${domain}/${data.M_Intro_Three.wide_img}`}
                    alt="dropzone-file-intro-Three-wide-img"
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
                M_Intro_Three: {
                  ...data.M_Intro_Three,
                  title: translateTitle,
                  para: translatePara,
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
                M_Intro_Three: {
                  title: "",
                  para: "",
                  img: "",
                  wide_img: "",
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
            }}
          >
            clear and cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
