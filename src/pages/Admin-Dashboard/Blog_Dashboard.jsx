import { Alert, Button, Select, TextInput } from "flowbite-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-circular-progressbar/dist/styles.css";
import {
  Label,
  Textarea,
  useState,
  useEffect,
  useRef,
  axios,
  CircularProgressbar,
} from "@/utils/Imports";

export default function Blog_Dashboard({ domain }) {
  //
  const [imagePercent, setImagePercent] = useState();
  const fileRef = useRef(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  //
  const [imageUploadError, setImageUploadError] = useState(false);
  const [publishError, setPublishError] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // translation
  const [translationEN, setTranslationEN] = useState({});
  const [translationAR, setTranslationAR] = useState({});
  const [translationDE, setTranslationDE] = useState({});

  // title
  const [titleInEN, setTitleInEN] = useState("");
  const [titleInAR, setTitleInAR] = useState("");
  const [titleInDE, setTitleInDE] = useState("");

  const categories = [
    "hosting",
    "business",
    "technology",
    "design",
    "marketing",
    "applications",
    "programming",
    "social Media",
    "server",
    "analysis",
    "general",
    "application",
    "e-commerce",
    "websites-design",
    "e-learning",
    "business-development",
    "ride-hailing",
  ];
  const toolbarOptions = [
    [
      { font: ["Arial", "Times New Roman", "Helvetica", "Courier New"] },
      { size: ["small", "medium", "large", "huge"] },
    ],
    [
      { bold: true },
      { italic: true },
      { underline: true },
      { strike: true },
      { code: true },
    ],
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [
      { blockquote: true },
      { list: "ordered" },
      { list: "bullet" },
      { header: [1, 2, 3, 4, 5, 6] },
      // { indent: true },
      // { outdent: true },
    ],
    [
      // { align: "left" },
      { align: "center" },
      { align: "right" },
      { align: "justify" },
    ],
    ["image", "link"],
    ["clean"],
    [
      { size: ["small", false, "large", "huge"] },
      { color: ["#49ceb4", "#044572", "#000000", "#b5b5b5"] },
      { background: ["#49ceb4", "#044572", "#000000", "#b5b5b5"] },
    ],
    [{ script: "super" }, { script: "sub" }],
    [
      { formula: { mode: "inline", displayMode: true } },
      // { codeBlock: { language: "javascript" } },
    ],
    // [{ history: { steps: 10 } }, { fullscreen: { enabled: true } }],
  ];

  // the object
  const [object, setObject] = useState({
    title: "",
    category: "",
    content_in_EN: "",
    content_in_AR: "",
    content_in_DE: "",
    img: "",
    slug: "", // the slug used for path or as path
    views: 289,
  });

  // functions
  const handleUploadImage_of_Blog = async (e) => {
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
        setObject((prevObject) => ({ ...prevObject, img: uploadedUrls[0] }));
      } else if (uploadedUrls.length > 1) {
        setObject((prevObject) => ({ ...prevObject, img: uploadedUrls }));
      }
      console.log(res.data.files);
    } catch (err) {
      if (err) {
      setUploadingImg(false);
      setImageUploadError(true);
      }
    }
  };

  //
  const handelObject = async () => {
    // console.log('object of blog')
    setPublishError(null);
    if (
      !object.title ||
      !object.content_in_EN ||
      !object.content_in_AR ||
      !object.content_in_DE
    ) {
      setPublishError("All fields are required!");
    }
    try {
      const res = await fetch(`${domain}/api/post/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        setPublishError("Error in Publishing the Data!");
      } else {
        setPublishError(null);
      }
    } catch (error) {
      setPublishError("Error in server, please try again later, ", error);
    }
  };

  //
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    handelTranslate();
    handelObject();
  };

  //
  const sanitizeTranslations = (translations) => {
    const sanitized = {};
    for (const key in translations) {
      if (key.trim() !== "") {
        sanitized[key] = translations[key];
      }
    }
    return sanitized;
  };

  //
  useEffect(() => {
    const sanitizedTranslationEN = sanitizeTranslations({
      [object.title]: titleInEN,
    });
    const sanitizedTranslationAR = sanitizeTranslations({
      [object.title]: titleInAR,
    });
    const sanitizedTranslationDE = sanitizeTranslations({
      [object.title]: titleInDE,
    });

    setTranslationEN(sanitizedTranslationEN);
    setTranslationAR(sanitizedTranslationAR);
    setTranslationDE(sanitizedTranslationDE);
  }, [object.title, titleInEN, titleInAR, titleInDE]);

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
      console.log("The data in blog translation has been sent (EN)");

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
      console.log("The data in blog translation has been sent (AR)");

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
      console.log("The data in blog translation has been sent (DE)");
      setError("");
      setSuccess("Translation data has been sent successfully!");
    } catch (error) {
      console.error("Error uploading the translation", error);
      setSuccess("");
      setError(error.message);
    }
  };

  console.log(object);

  return (
    <>
      <div className="p-3 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-center text-3xl my-7 font-semibold">
          Create a post
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* title */}
          <div className="flex flex-wrap flex-col gap-4 sm:flex-row ">
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
                type="text"
                placeholder="Title"
                required
                id="title"
                className="flex-1"
                onChange={(e) =>
                  setObject((object) => ({
                    ...object,
                    title: e.target.value,
                  }))
                }
              />
            </div>
            {/* in en */}
            <div className="flex flex-col gap-2 w-72">
              <Label
                htmlFor="title-myTextarea-EN"
                value="Enter your title in English:"
                style={{
                  fontSize: "16px",
                }}
              />
              <Textarea
                id="title-myTextarea-EN"
                style={{
                  fontSize: "16px",
                }}
                onChange={(e) => setTitleInEN(e.target.value)}
                sizing="sm"
                placeholder="please type your title in EN..."
              />
            </div>
            {/* in ar */}
            <div className="flex flex-col gap-2 w-72">
              <Label
                htmlFor="title-myTextarea-AR"
                value="Enter your title in Arabic:"
                style={{
                  fontSize: "16px",
                }}
              />
              <Textarea
                id="title-myTextarea-AR"
                style={{
                  fontSize: "16px",
                }}
                onChange={(e) => setTitleInAR(e.target.value)}
                sizing="sm"
                placeholder="please type your title in AR..."
              />
            </div>
            {/* in de */}
            <div className="flex flex-col gap-2 w-72">
              <Label
                htmlFor="title-myTextarea-DE"
                value="Enter your title in Dautch:"
                style={{
                  fontSize: "16px",
                }}
              />
              <Textarea
                id="title-myTextarea-DE"
                style={{
                  fontSize: "16px",
                }}
                onChange={(e) => setTitleInDE(e.target.value)}
                sizing="sm"
                placeholder="please type your title in DE..."
              />
            </div>
          </div>
          {/* category */}
          <div className="flex flex-col gap-4 sm:flex-row justify-between">
            <Select
              id="category"
              required
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  category: e.target.value,
                }))
              }
            >
              {categories.map((category) => (
                <option key={category} value={category.toLowerCase()}>
                  {category}
                </option>
              ))}
            </Select>
          </div>
          {/* views */}
          <div className="w-fit">
            <TextInput
              type="number"
              placeholder="number of Views"
              required
              id="views"
              className="flex-1"
              onChange={(e) =>
                setObject((object) => ({
                  ...object,
                  views: e.target.value,
                }))
              }
            />
          </div>
          {/* image */}
          <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
            <form action="" className="hidden">
              <input
                type="file"
                id="image-in-post-dropzone-file"
                hidden
                ref={fileRef}
                accept="image/*"
                onChange={handleUploadImage_of_Blog}
              />
            </form>

            <Label
              htmlFor="image-in-post-dropzone-file"
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
                  image in the post.
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPG, SVG, WEBP
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
              {object?.img && (
                <img
                  src={`${domain}/${object.img}`}
                  alt="image-in-post-dropzone-file"
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
          {imageUploadError && (
            <Alert color="failure">{imageUploadError}</Alert>
          )}
          {object?.img && (
            <img
              src={`${domain}/${object.img}`}
              alt="image of currect blog"
              className="w-full h-72 object-cover"
            />
          )}
          {/* content_in_EN */}
          <ReactQuill
            theme="snow"
            modules={{
              toolbar: toolbarOptions,
            }}
            placeholder="Write the content in english lang..."
            className="h-72 mb-12"
            required
            onChange={(value) => setObject({ ...object, content_in_EN: value })}
          />
          <hr className="my-10" />
          {/* content_in_AR */}
          <ReactQuill
            theme="snow"
            modules={{
              toolbar: toolbarOptions,
            }}
            placeholder="Write the content in arabic lang..."
            className="h-72 mb-12"
            required
            onChange={(value) => setObject({ ...object, content_in_AR: value })}
          />
          <hr className="my-10" />
          {/* content_in_DE */}
          <ReactQuill
            theme="snow"
            modules={{
              toolbar: toolbarOptions,
            }}
            placeholder="Write the content in dautch lang..."
            className="h-72 mb-12"
            required
            onChange={(value) => setObject({ ...object, content_in_DE: value })}
          />
          <br />
          <Button type="submit" gradientDuoTone="purpleToPink">
            Publish
          </Button>

          {publishError && (
            <Alert className="mt-5" color="failure">
              {publishError}
            </Alert>
          )}
          {error && (
            <Alert className="mt-5" color="failure">
              {error}
            </Alert>
          )}
          {success && (
            <Alert className="mt-5" color="failure">
              {success}
            </Alert>
          )}
        </form>
      </div>
    </>
  );
}
