import "./SendARequest.css";
import { useRef, useState } from "../utils/Imports";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import MainButton from "./MainButton";
import emailjs from "@emailjs/browser";
import BoxReveal from "@/components/magicui/box-reveal";

export default function SendARequest({ t }) {
  const VITE_MY_SERVICE_ID = import.meta.env.VITE_MY_SERVICE_ID;
  const VITE_MY_TEMPLATE_ID = import.meta.env.VITE_MY_TEMPLATE_ID;
  const VITE_MY_PUBLIC_KEY = import.meta.env.VITE_MY_PUBLIC_KEY;

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // handleSubmit();
    if (!isValidPhoneNumber(phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }

    emailjs
      .sendForm(VITE_MY_SERVICE_ID, VITE_MY_TEMPLATE_ID, form.current, {
        publicKey: VITE_MY_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  // const handleSubmit = () => {
  //   const formData = {
  //     firstName,
  //     email,
  //     phoneNumber,
  //     subject,
  //     message,
  //   };

  //   // console.log(formData); // You can replace this with any action you want to perform with the form data
  // };
  return (
    <div className="container min-h-fit shadow-black shadow-lg mb-10 rounded-[2rem]">
      <div className="form_wrapper ar ">
        <div className="lg:pe-20 space-y-5 lg:ps-9 z-10">
          <h2 className="text-4xl lg:text-5xl lg:leading-[3.5rem] lg:mt-20 2xl:text-7 font-bold">
            <BoxReveal boxColor={"#49ceb4"} duration={0.5}>
              {t("ready-to-get-started")}
            </BoxReveal>
          </h2>
          <BoxReveal boxColor={"#49ceb4"} duration={0.5}>
            <p className="mb-5">{t("let's-build-best-digital")}</p>
          </BoxReveal>
        </div>
        {/* form */}
        <div className="bg-white bg-opacity-10 z-10 space-y-2 border border-opacity-10 border-white shadow-md rounded-[25px] lg:px-8 px-4 pt-6 pb-8 mb-4 backdrop-blur-md">
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <input
                  type="text"
                  id="first_name"
                  name="to_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={t("your-full-name")}
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className="relative mb-6">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-300 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="input-group-1"
                name="from_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-main_color focus:border-main_color block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main_color dark:focus:border-main_color"
                placeholder={t("your-email-address")}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <PhoneInput
                placeholder={t("phone-number")}
                value={phoneNumber}
                onChange={setPhoneNumber}
                defaultCountry="US"
                withCountryCallingCode
              />
            </div>
            <div className="mb-6">
              <input
                type="text"
                id="subject"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={t("subject")}
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block p-2.5 overflow-hidden w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={t("your-message")}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="text-center mx-auto">
                <MainButton text="submit-request" submit={true}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
