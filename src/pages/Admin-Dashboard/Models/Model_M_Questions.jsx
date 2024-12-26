import {
  Button,
  Modal,
  Label,
  TextInput,
  Textarea,
  useState,
  useEffect,
} from "@/utils/Imports";

export default function Model_M_Questions({
  data,
  setData,
  setTranslation_M_Questions_EN,
  setTranslation_M_Questions_AR,
  setTranslation_M_Questions_DE,
}) {
  const [openModal, setOpenModal] = useState(false);

  // title
  const [translateTitle, setTranslateTitle] = useState("");
  const [translateTitleInEN, setTranslateTitleInEN] = useState("");
  const [translateTitleInAR, setTranslateTitleInAR] = useState("");
  const [translateTitleInDE, setTranslateTitleInDE] = useState("");

  // questions
  // question 1
  // title 1
  const [translateTitle_One, setTranslateTitle_One] = useState("");
  const [translateTitle_OneInEN, setTranslateTitle_OneInEN] = useState("");
  const [translateTitle_OneInAR, setTranslateTitle_OneInAR] = useState("");
  const [translateTitle_OneInDE, setTranslateTitle_OneInDE] = useState("");
  // Answer 1
  const [translateAnswer_One, setTranslateAnswer_One] = useState("");
  const [translateAnswer_OneInEN, setTranslateAnswer_OneInEN] = useState("");
  const [translateAnswer_OneInAR, setTranslateAnswer_OneInAR] = useState("");
  const [translateAnswer_OneInDE, setTranslateAnswer_OneInDE] = useState("");
  // question 2
  // title 2
  const [translateTitle_Two, setTranslateTitle_Two] = useState("");
  const [translateTitle_TwoInEN, setTranslateTitle_TwoInEN] = useState("");
  const [translateTitle_TwoInAR, setTranslateTitle_TwoInAR] = useState("");
  const [translateTitle_TwoInDE, setTranslateTitle_TwoInDE] = useState("");
  // Answer 2
  const [translateAnswer_Two, setTranslateAnswer_Two] = useState("");
  const [translateAnswer_TwoInEN, setTranslateAnswer_TwoInEN] = useState("");
  const [translateAnswer_TwoInAR, setTranslateAnswer_TwoInAR] = useState("");
  const [translateAnswer_TwoInDE, setTranslateAnswer_TwoInDE] = useState("");
  // question 3
  // title 3
  const [translateTitle_Three, setTranslateTitle_Three] = useState("");
  const [translateTitle_ThreeInEN, setTranslateTitle_ThreeInEN] = useState("");
  const [translateTitle_ThreeInAR, setTranslateTitle_ThreeInAR] = useState("");
  const [translateTitle_ThreeInDE, setTranslateTitle_ThreeInDE] = useState("");
  // Answer 3
  const [translateAnswer_Three, setTranslateAnswer_Three] = useState("");
  const [translateAnswer_ThreeInEN, setTranslateAnswer_ThreeInEN] =
    useState("");
  const [translateAnswer_ThreeInAR, setTranslateAnswer_ThreeInAR] =
    useState("");
  const [translateAnswer_ThreeInDE, setTranslateAnswer_ThreeInDE] =
    useState("");
  // question 4
  // title 4
  const [translateTitle_Four, setTranslateTitle_Four] = useState("");
  const [translateTitle_FourInEN, setTranslateTitle_FourInEN] = useState("");
  const [translateTitle_FourInAR, setTranslateTitle_FourInAR] = useState("");
  const [translateTitle_FourInDE, setTranslateTitle_FourInDE] = useState("");
  // Answer 4
  const [translateAnswer_Four, setTranslateAnswer_Four] = useState("");
  const [translateAnswer_FourInEN, setTranslateAnswer_FourInEN] = useState("");
  const [translateAnswer_FourInAR, setTranslateAnswer_FourInAR] = useState("");
  const [translateAnswer_FourInDE, setTranslateAnswer_FourInDE] = useState("");

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
      [data.M_Questions.title]: translateTitleInEN,
      [data.M_Questions.questions[0].title]: translateTitle_OneInEN,
      [data.M_Questions.questions[0].answer]: translateAnswer_OneInEN,
      [data.M_Questions.questions[1].title]: translateTitle_TwoInEN,
      [data.M_Questions.questions[1].answer]: translateAnswer_TwoInEN,
      [data.M_Questions.questions[2].title]: translateTitle_ThreeInEN,
      [data.M_Questions.questions[2].answer]: translateAnswer_ThreeInEN,
      [data.M_Questions.questions[3].title]: translateTitle_FourInEN,
      [data.M_Questions.questions[3].answer]: translateAnswer_FourInEN,
    });

    const sanitizedTranslationAR = sanitizeTranslations({
      [data.M_Questions.title]: translateTitleInAR,
      [data.M_Questions.questions[0].title]: translateTitle_OneInAR,
      [data.M_Questions.questions[0].answer]: translateAnswer_OneInAR,
      [data.M_Questions.questions[1].title]: translateTitle_TwoInAR,
      [data.M_Questions.questions[1].answer]: translateAnswer_TwoInAR,
      [data.M_Questions.questions[2].title]: translateTitle_ThreeInAR,
      [data.M_Questions.questions[2].answer]: translateAnswer_ThreeInAR,
      [data.M_Questions.questions[3].title]: translateTitle_FourInAR,
      [data.M_Questions.questions[3].answer]: translateAnswer_FourInAR,
    });

    const sanitizedTranslationDE = sanitizeTranslations({
      [data.M_Questions.title]: translateTitleInDE,
      [data.M_Questions.questions[0].title]: translateTitle_OneInDE,
      [data.M_Questions.questions[0].answer]: translateAnswer_OneInDE,
      [data.M_Questions.questions[1].title]: translateTitle_TwoInDE,
      [data.M_Questions.questions[1].answer]: translateAnswer_TwoInDE,
      [data.M_Questions.questions[2].title]: translateTitle_ThreeInDE,
      [data.M_Questions.questions[2].answer]: translateAnswer_ThreeInDE,
      [data.M_Questions.questions[3].title]: translateTitle_FourInDE,
      [data.M_Questions.questions[3].answer]: translateAnswer_FourInDE,
    });

    setTranslation_M_Questions_EN(sanitizedTranslationEN);
    setTranslation_M_Questions_AR(sanitizedTranslationAR);
    setTranslation_M_Questions_DE(sanitizedTranslationDE);

    // console.log("Sanitized Translations:", {
    //   en: sanitizedTranslationEN,
    //   ar: sanitizedTranslationAR,
    //   de: sanitizedTranslationDE,
    // });
  }, [data.M_Questions]);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="w-fit">
        Questions
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="py-2 items-center">
          Terms of Service
        </Modal.Header>
        <Modal.Body className="px-3">
          <img src="/images/M_Questions.png" alt="m m-questions one img" />
          <hr />
          <div className="space-y-6 mt-5">
            {/* title */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-questions"
                    value="title-of-m-questions"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-questions"
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
                  value={translateTitleInEN}
                  onChange={(e) => setTranslateTitleInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-myTextarea-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-myTextarea-EN"
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
                  value={translateTitleInDE}
                  onChange={(e) => setTranslateTitleInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            <hr />
            {/* the four questions */}
            {/* 1111111111111111111111111111111111111111111111111111111111111111111 */}
            {/* questions title 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-questions-title-one"
                    value="title-of-m-questions-title-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-questions-title-one"
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
                  htmlFor="title-of-m-questions-title-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-one-EN"
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
                  htmlFor="title-of-m-questions-title-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-one-AR"
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
                  htmlFor="title-of-m-questions-title-one-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-one-EN"
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
            {/* service Answer 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-questions-Answer-one"
                    value="title-of-questions-Answer-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-questions-Answer-one"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_One}
                  onChange={(e) => setTranslateAnswer_One(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-one-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_OneInEN}
                  onChange={(e) => setTranslateAnswer_OneInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-one-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_OneInAR}
                  onChange={(e) => setTranslateAnswer_OneInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-one-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-one-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_OneInDE}
                  onChange={(e) => setTranslateAnswer_OneInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 1111111111111111111111111111111111111111111111111111111111111111111 */}
            <hr />
            {/* 2222222222222222222222222222222222222222222222222222222222222222222 */}
            {/* questions title 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-questions-title-two"
                    value="title-of-questions-title-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-questions-title-two"
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
                  htmlFor="title-of-m-questions-title-two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-two-EN"
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
                  htmlFor="title-of-m-questions-title-two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-two-AR"
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
                  htmlFor="title-of-m-questions-title-two-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-two-EN"
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
            {/* service Answer 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-questions-Answer-two"
                    value="title-of-questions-Answer-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-questions-Answer-two"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_Two}
                  onChange={(e) => setTranslateAnswer_Two(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-two-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_TwoInEN}
                  onChange={(e) => setTranslateAnswer_TwoInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-two-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_TwoInAR}
                  onChange={(e) => setTranslateAnswer_TwoInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-two-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-two-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_TwoInDE}
                  onChange={(e) => setTranslateAnswer_TwoInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 2222222222222222222222222222222222222222222222222222222222222222222 */}
            <hr />
            {/* 3333333333333333333333333333333333333333333333333333333333333333333 */}
            {/* questions title 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-questions-title-three"
                    value="title-of-questions-title-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-questions-title-three"
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
                  htmlFor="title-of-m-questions-title-three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-three-EN"
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
                  htmlFor="title-of-m-questions-title-three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-three-AR"
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
                  htmlFor="title-of-m-questions-title-three-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-three-EN"
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
            {/* service Answer 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-questions-Answer-three"
                    value="title-of-questions-Answer-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-questions-Answer-three"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_Three}
                  onChange={(e) => setTranslateAnswer_Three(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-three-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_ThreeInEN}
                  onChange={(e) => setTranslateAnswer_ThreeInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-three-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_ThreeInAR}
                  onChange={(e) => setTranslateAnswer_ThreeInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-three-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-three-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_ThreeInDE}
                  onChange={(e) => setTranslateAnswer_ThreeInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 3333333333333333333333333333333333333333333333333333333333333333333 */}
            <hr />
            {/* 4444444444444444444444444444444444444444444444444444444444444444444 */}
            {/* questions title 4 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-questions-title-four"
                    value="title-of-questions-title-four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-questions-title-four"
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
                  htmlFor="title-of-m-questions-title-four-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-four-EN"
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
                  htmlFor="title-of-m-questions-title-four-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-four-AR"
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
                  htmlFor="title-of-m-questions-title-four-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-title-four-EN"
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
            {/* service Answer 4 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-questions-Answer-four"
                    value="title-of-questions-Answer-four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-questions-Answer-four"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_Four}
                  onChange={(e) => setTranslateAnswer_Four(e.target.value)}
                  type="text"
                  sizing="sm"
                  placeholder="please-type-like-this"
                />
              </div>
              {/* in en */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-four-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-four-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_FourInEN}
                  onChange={(e) => setTranslateAnswer_FourInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-four-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-four-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_FourInAR}
                  onChange={(e) => setTranslateAnswer_FourInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-questions-Answer-four-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-questions-Answer-four-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateAnswer_FourInDE}
                  onChange={(e) => setTranslateAnswer_FourInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 4444444444444444444444444444444444444444444444444444444444444444444 */}
          </div>
        </Modal.Body>
        <Modal.Footer className="py-2 flex justify-between">
          <Button
            onClick={() => {
              setData((data) => ({
                ...data,
                M_Questions: {
                  title: translateTitle,
                  questions: [
                    {
                      title: translateTitle_One,
                      answer: translateAnswer_One,
                    },
                    {
                      title: translateTitle_Two,
                      answer: translateAnswer_Two,
                    },
                    {
                      title: translateTitle_Three,
                      answer: translateAnswer_Three,
                    },
                    {
                      title: translateTitle_Four,
                      answer: translateAnswer_Four,
                    },
                  ],
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
                M_Questions: {
                  title: "",
                  questions: [
                    {
                      title: "",
                      answer: "",
                    },
                    {
                      title: "",
                      answer: "",
                    },
                    {
                      title: "",
                      answer: "",
                    },
                    {
                      title: "",
                      answer: "",
                    },
                  ],
                },
              }));
              setTranslateTitle("");
              setTranslateTitleInEN("");
              setTranslateTitleInAR("");
              setTranslateTitleInDE("");

              // questions
              // question 1
              // title 1
              setTranslateTitle_One("");
              setTranslateTitle_OneInEN("");
              setTranslateTitle_OneInAR("");
              setTranslateTitle_OneInDE("");
              // answer 1
              setTranslateAnswer_One("");
              setTranslateAnswer_OneInEN("");
              setTranslateAnswer_OneInAR("");
              setTranslateAnswer_OneInDE("");
              // question 2
              // title 2
              setTranslateTitle_Two("");
              setTranslateTitle_TwoInEN("");
              setTranslateTitle_TwoInAR("");
              setTranslateTitle_TwoInDE("");
              // answer 2
              setTranslateAnswer_Two("");
              setTranslateAnswer_TwoInEN("");
              setTranslateAnswer_TwoInAR("");
              setTranslateAnswer_TwoInDE("");
              // question 3
              // title 3
              setTranslateTitle_Three("");
              setTranslateTitle_ThreeInEN("");
              setTranslateTitle_ThreeInAR("");
              setTranslateTitle_ThreeInDE("");
              // answer 3
              setTranslateAnswer_Three("");
              setTranslateAnswer_ThreeInEN("");
              setTranslateAnswer_ThreeInAR("");
              setTranslateAnswer_ThreeInDE("");
              // question 4
              // answer 4
              setTranslateTitle_Four("");
              setTranslateTitle_FourInEN("");
              setTranslateTitle_FourInAR("");
              setTranslateTitle_FourInDE("");
              // answer 4
              setTranslateAnswer_Four("");
              setTranslateAnswer_FourInEN("");
              setTranslateAnswer_FourInAR("");
              setTranslateAnswer_FourInDE("");
            }}
          >
            clear and cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
