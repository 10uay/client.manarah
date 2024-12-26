import {
  FaLocationDot,
  IoMailSharp,
  BsFillTelephoneOutboundFill,
} from "../../utils/Imports";
import {
  motion,
  container,
} from "@/utils/framer_motion_vars";
import BoxReveal from "@/components/magicui/box-reveal";

export default function Contact_us_locations({ t }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="container mx-auto"
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-2 gap-10">
        <div className="p-3 flex flex-col h-full rounded-3xl ">
          <div className="h-[350px] relative">
            <img
              src="/images/location-one.webp"
              width="300"
              height="300"
              alt="first site"
              loading="lazy"
              className="w-full h-full rounded-3xl object-cover shadow-gray-500 shadow-lg"
            />

            <div className="absolute left-[5%] bottom-[5%] text-white font-semibold text-2xl">
              <BoxReveal boxColor={"#49ceb4"} duration={0.5}>
                <p>{t("location-one")}</p>
              </BoxReveal>
            </div>
          </div>
          <div className="pt-8 text-sm space-y-2 mx-8">
            <p className="flex items-center gap-3 ">
              <FaLocationDot className="text-[17px]" />
              {t("address-one")}
            </p>
            <p className="flex items-center gap-3">
              <IoMailSharp className="text-[17px]" />
              {t("email")}
            </p>
            <p className="flex gap-3 items-center">
              <BsFillTelephoneOutboundFill className="text-[17px]" />
              <bdi> {t("mobile-ksa")}</bdi>
            </p>
          </div>
        </div>
        <div className="p-3 flex flex-col h-full rounded-3xl">
          <div className="h-[350px] relative">
            <img
              src="/images/location-one.webp"
              width="300"
              height="300"
              alt="secound site"
              loading="lazy"
              className="w-full h-full rounded-3xl object-cover shadow-gray-500 shadow-lg"
            />

            <div className="absolute left-[5%] bottom-[5%] text-white font-semibold text-2xl">
              <BoxReveal boxColor={"#49ceb4"} duration={0.5}>
                <p>{t("location-two")}</p>
              </BoxReveal>
            </div>
          </div>
          <div className="pt-8 text-sm space-y-2 mx-8">
            <p className="flex items-center gap-3">
              <FaLocationDot className="text-[17px]" />
              {t("address-two")}
            </p>
            <p className="flex items-center gap-3">
              <IoMailSharp className="text-[17px]" />
              {t("email")}
            </p>
            <p className="flex gap-3 items-center">
              <BsFillTelephoneOutboundFill className="text-[17px]" />
              <bdi> {t("mobile-ge")}</bdi>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
