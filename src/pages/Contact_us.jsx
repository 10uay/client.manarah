import Contact_us_Intro from "./Contact-us/Contact_us_Intro";
import {useTranslation} from '../utils/Imports'
import Contact_us_locations from "./Contact-us/Contact_us_locations";
import SendARequest from "../components/SendARequest";



export default function Contact_us() {
  const { t } = useTranslation();

  return (
    <div className=" container mx-auto lg:px-5 px-2">
      <Contact_us_Intro t={t} />
      <div className="mb-28">
        <Contact_us_locations t={t} />
      </div>
      <SendARequest t={t} />
    </div>
  );
}
