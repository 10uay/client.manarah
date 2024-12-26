import {
  Button,
  Modal,
  Label,
  TextInput,
  Textarea,
  useState,
  useEffect,
} from "@/utils/Imports";

export default function Model_M_Slider({
  data,
  setData,
  setTranslation_M_Slider_EN,
  setTranslation_M_Slider_AR,
  setTranslation_M_Slider_DE,
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

  // cards
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
  // service 6
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

  // bg_color
  const [bg_color, setBg_color] = useState("#6590D5");

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
      [data.M_Slider.title]: translateTitleInEN,
      [data.M_Slider.para]: translateParaInEN,
      [data.M_Slider.cards[0].title]: translateTitle_OneInEN,
      [data.M_Slider.cards[0].para]: translatePara_OneInEN,
      [data.M_Slider.cards[1].title]: translateTitle_TwoInEN,
      [data.M_Slider.cards[1].para]: translatePara_TwoInEN,
      [data.M_Slider.cards[2].title]: translateTitle_ThreeInEN,
      [data.M_Slider.cards[2].para]: translatePara_ThreeInEN,
      [data.M_Slider.cards[3].title]: translateTitle_FourInEN,
      [data.M_Slider.cards[3].para]: translatePara_FourInEN,
      [data.M_Slider.cards[4].title]: translateTitle_FiveInEN,
      [data.M_Slider.cards[4].para]: translatePara_FiveInEN,
      [data.M_Slider.cards[5].title]: translateTitle_SixInEN,
      [data.M_Slider.cards[5].para]: translatePara_SixInEN,
    });

    const sanitizedTranslationAR = sanitizeTranslations({
      [data.M_Slider.title]: translateTitleInAR,
      [data.M_Slider.para]: translateParaInAR,
      [data.M_Slider.cards[0].title]: translateTitle_OneInAR,
      [data.M_Slider.cards[0].para]: translatePara_OneInAR,
      [data.M_Slider.cards[1].title]: translateTitle_TwoInAR,
      [data.M_Slider.cards[1].para]: translatePara_TwoInAR,
      [data.M_Slider.cards[2].title]: translateTitle_ThreeInAR,
      [data.M_Slider.cards[2].para]: translatePara_ThreeInAR,
      [data.M_Slider.cards[3].title]: translateTitle_FourInAR,
      [data.M_Slider.cards[3].para]: translatePara_FourInAR,
      [data.M_Slider.cards[4].title]: translateTitle_FiveInAR,
      [data.M_Slider.cards[4].para]: translatePara_FiveInAR,
      [data.M_Slider.cards[5].title]: translateTitle_SixInAR,
      [data.M_Slider.cards[5].para]: translatePara_SixInAR,
    });

    const sanitizedTranslationDE = sanitizeTranslations({
      [data.M_Slider.title]: translateTitleInDE,
      [data.M_Slider.para]: translateParaInDE,
      [data.M_Slider.cards[0].title]: translateTitle_OneInDE,
      [data.M_Slider.cards[0].para]: translatePara_OneInDE,
      [data.M_Slider.cards[1].title]: translateTitle_TwoInDE,
      [data.M_Slider.cards[1].para]: translatePara_TwoInDE,
      [data.M_Slider.cards[2].title]: translateTitle_ThreeInDE,
      [data.M_Slider.cards[2].para]: translatePara_ThreeInDE,
      [data.M_Slider.cards[3].title]: translateTitle_FourInDE,
      [data.M_Slider.cards[3].para]: translatePara_FourInDE,
      [data.M_Slider.cards[4].title]: translateTitle_FiveInDE,
      [data.M_Slider.cards[4].para]: translatePara_FiveInDE,
      [data.M_Slider.cards[5].title]: translateTitle_SixInDE,
      [data.M_Slider.cards[5].para]: translatePara_SixInDE,
    });

    setTranslation_M_Slider_EN(sanitizedTranslationEN);
    setTranslation_M_Slider_AR(sanitizedTranslationAR);
    setTranslation_M_Slider_DE(sanitizedTranslationDE);

    // console.log("Sanitized Translations:", {
    //   en: sanitizedTranslationEN,
    //   ar: sanitizedTranslationAR,
    //   de: sanitizedTranslationDE,
    // });
  }, [data.M_Slider]);

  // functions
  const handleColorChange = (event) => {
    setBg_color(event.target.value);
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="w-fit">
        Slider
      </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="py-2 items-center">
          Terms of Service
        </Modal.Header>
        <Modal.Body className="px-3">
          <img src="/images/M_Slider.png" alt="m Slider one img" />
          <hr />
          <div className="space-y-6 mt-5">
            {/* title */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-slider"
                    value="title-of-slider"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-slider"
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
            {/* Para */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="Para-of-slider"
                    value="Para-of-slider"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="Para-of-slider"
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
                  htmlFor="myTextarea-para-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-para-EN"
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
                  htmlFor="myTextarea-para-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-para-EN"
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
                  htmlFor="myTextarea-para-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="myTextarea-para-DE"
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
            {/* the five cards */}
            {/* 1111111111111111111111111111111111111111111111111111111111111111111 */}
            {/* cards title 1 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-slider-cards-title-one"
                    value="title-of-cards-title-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-title-one"
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
                  htmlFor="title-of-m-slider-cards-title-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-one-EN"
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
                  htmlFor="title-of-m-slider-cards-title-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-one-AR"
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
                  htmlFor="title-of-m-slider-cards-title-one-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-one-EN"
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
                    htmlFor="title-of-m-slider-cards-para-one"
                    value="title-of-cards-para-one"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-para-one"
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
                  htmlFor="title-of-m-slider-cards-para-one-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-one-EN"
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
                  htmlFor="title-of-m-slider-cards-para-one-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-one-AR"
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
                  htmlFor="title-of-m-slider-cards-para-one-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-one-DE"
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
            {/* cards title 2 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-slider-cards-title-two"
                    value="title-of-cards-title-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-title-two"
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
                  htmlFor="title-of-m-slider-cards-title-two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-two-EN"
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
                  htmlFor="title-of-m-slider-cards-title-two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-two-AR"
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
                  htmlFor="title-of-m-slider-cards-title-two-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-two-EN"
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
                    htmlFor="title-of-m-slider-cards-para-two"
                    value="title-of-cards-para-two"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-para-two"
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
                  htmlFor="title-of-m-slider-cards-para-two-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-two-EN"
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
                  htmlFor="title-of-m-slider-cards-para-two-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-two-AR"
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
                  htmlFor="title-of-m-slider-cards-para-two-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-two-DE"
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
            {/* cards title 3 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-slider-cards-title-three"
                    value="title-of-cards-title-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-title-three"
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
                  htmlFor="title-of-m-slider-cards-title-three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-three-EN"
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
                  htmlFor="title-of-m-slider-cards-title-three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-three-AR"
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
                  htmlFor="title-of-m-slider-cards-title-three-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-three-EN"
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
                    htmlFor="title-of-m-slider-cards-para-three"
                    value="title-of-cards-para-three"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-para-three"
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
                  htmlFor="title-of-m-slider-cards-para-three-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-three-EN"
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
                  htmlFor="title-of-m-slider-cards-para-three-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-three-AR"
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
                  htmlFor="title-of-m-slider-cards-para-three-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-three-DE"
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
            {/* cards title 4 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-slider-cards-title-four"
                    value="title-of-cards-title-four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-title-four"
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
                  htmlFor="title-of-m-slider-cards-title-four-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-four-EN"
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
                  htmlFor="title-of-m-slider-cards-title-four-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-four-AR"
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
                  htmlFor="title-of-m-slider-cards-title-four-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-four-EN"
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
                    htmlFor="title-of-m-slider-cards-para-four"
                    value="title-of-cards-para-four"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-para-four"
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
                  htmlFor="title-of-m-slider-cards-para-four-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-four-EN"
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
                  htmlFor="title-of-m-slider-cards-para-four-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-four-AR"
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
                  htmlFor="title-of-m-slider-cards-para-four-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-four-DE"
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
            {/* cards title 5 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-slider-cards-title-five"
                    value="title-of-cards-title-five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-title-five"
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
                  htmlFor="title-of-m-slider-cards-title-five-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-five-EN"
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
                  htmlFor="title-of-m-slider-cards-title-five-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-five-AR"
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
                  htmlFor="title-of-m-slider-cards-title-five-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-five-EN"
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
                    htmlFor="title-of-m-slider-cards-para-five"
                    value="title-of-cards-para-five"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-para-five"
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
                  htmlFor="title-of-m-slider-cards-para-five-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-five-EN"
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
                  htmlFor="title-of-m-slider-cards-para-five-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-five-AR"
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
                  htmlFor="title-of-m-slider-cards-para-five-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-five-DE"
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
            {/* 6666666666666666666666666666666666666666666666666666666666666666666 */}
            {/* cards title 6 */}
            <div className="flex lg:flex-row flex-col gap-5 flex-wrap items-center">
              <div className="w-full lg:w-72">
                <div className="mb-2 block w-full">
                  <Label
                    htmlFor="title-of-m-slider-cards-title-Six"
                    value="title-of-cards-title-Six"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-title-Six"
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
                  htmlFor="title-of-m-slider-cards-title-Six-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_SixInEN}
                  onChange={(e) => setTranslateTitle_SixInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-slider-cards-title-Six-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-Six-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_SixInAR}
                  onChange={(e) => setTranslateTitle_SixInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-slider-cards-title-Six-EN"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-title-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translateTitle_SixInDE}
                  onChange={(e) => setTranslateTitle_SixInDE(e.target.value)}
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
                    htmlFor="title-of-m-slider-cards-para-Six"
                    value="title-of-cards-para-Six"
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </div>
                <TextInput
                  id="title-of-m-slider-cards-para-Six"
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
                  htmlFor="title-of-m-slider-cards-para-Six-EN"
                  value="Enter your sentence in English:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-Six-EN"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_SixInEN}
                  onChange={(e) => setTranslatePara_SixInEN(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in ar */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-slider-cards-para-Six-AR"
                  value="Enter your sentence in Arabic:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-Six-AR"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_SixInAR}
                  onChange={(e) => setTranslatePara_SixInAR(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
              {/* in de */}
              <div className="flex flex-col gap-2 lg:w-72 w-full">
                <Label
                  htmlFor="title-of-m-slider-cards-para-Six-DE"
                  value="Enter your sentence in Dautch:"
                  style={{
                    fontSize: "16px",
                  }}
                />
                <Textarea
                  id="title-of-m-slider-cards-para-Six-DE"
                  style={{
                    fontSize: "16px",
                  }}
                  value={translatePara_SixInDE}
                  onChange={(e) => setTranslatePara_SixInDE(e.target.value)}
                  sizing="sm"
                  placeholder="please type your sentence..."
                />
              </div>
            </div>
            {/* 6666666666666666666666666666666666666666666666666666666666666666666 */}
            <hr />
            {/* bg_color */}
            <div className="flex justify-start gap-10 space-x-2">
              Color of back ground of cards
              <input
                id="nativeColorPicker1"
                type="color"
                value={bg_color}
                onChange={handleColorChange}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="py-2 flex justify-between">
          <Button
            onClick={() => {
              setData((data) => ({
                ...data,
                M_Slider: {
                  ...data.M_Slider,
                  title: translateTitle,
                  para: translatePara,
                  cards: [
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
                    {
                      title: translateTitle_Six,
                      para: translatePara_Six,
                    },
                  ],
                  bg_color: bg_color,
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

              setTranslatePara_One("");
              setTranslatePara_OneInEN("");
              setTranslatePara_OneInAR("");
              setTranslatePara_OneInDE("");
              // cards
              // card 1
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
              // card 2
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
              // card 3
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
              // card 4
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
              // card 5
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
              // card 6
              // title 6
              setTranslateTitle_Six("");
              setTranslateTitle_SixInEN("");
              setTranslateTitle_SixInAR("");
              setTranslateTitle_SixInDE("");
              // para 6
              setTranslatePara_Six("");
              setTranslatePara_SixInEN("");
              setTranslatePara_SixInAR("");
              setTranslatePara_SixInDE("");

              setBg_color("#6590D5");
            }}
          >
            clear and cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
