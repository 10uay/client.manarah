import {
  Button,
  Modal,
  Label,
  TextInput,
  FileInput,
  Textarea,
  useState,
  useEffect,
} from "@/utils/Imports";


export default function Model_M_Intro_Two({
  data,
  setData,
  setTranslation_M_Intro_Two_EN,
  setTranslation_M_Intro_Two_AR,
  setTranslation_M_Intro_Two_DE,
}) {
  const [openModal, setOpenModal] = useState(false);

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
      [data.M_Intro_Two.title]: translateTitleInEN,
      [data.M_Intro_Two.para]: translateParaInEN,
    });

    const sanitizedTranslationAR = sanitizeTranslations({
      [data.M_Intro_Two.title]: translateTitleInAR,
      [data.M_Intro_Two.para]: translateParaInAR,
    });

    const sanitizedTranslationDE = sanitizeTranslations({
      [data.M_Intro_Two.title]: translateTitleInDE,
      [data.M_Intro_Two.para]: translateParaInDE,
    });

    setTranslation_M_Intro_Two_EN(sanitizedTranslationEN);
    setTranslation_M_Intro_Two_AR(sanitizedTranslationAR);
    setTranslation_M_Intro_Two_DE(sanitizedTranslationDE);

    // console.log("Sanitized Translations:", {
    //   en: sanitizedTranslationEN,
    //   ar: sanitizedTranslationAR,
    //   de: sanitizedTranslationDE,
    // });
  }, [data.M_Intro_Two]);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="w-fit">
        Intro Two
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="py-2 items-center">
          Terms of Service
        </Modal.Header>
        <Modal.Body className="px-3">
          <img src="/images/M_Intro_Two.png" alt="m intro one img" />
          <hr />
          <div className="space-y-6 mt-5">
            {/* title */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-intro-two"
                    value="title-of-intro-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-intro-two"
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
                    htmlFor="para-of-intro-two"
                    value="para-of-intro-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="para-of-intro-two"
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
          </div>
        </Modal.Body>
        <Modal.Footer className="py-2 flex justify-between">
          <Button
            onClick={() => {
              setData((data) => ({
                ...data,
                M_Intro_Two: {
                  ...data.M_Intro_Two,
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
                M_Intro_Two: {
                  title: "",
                  para: "",
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
