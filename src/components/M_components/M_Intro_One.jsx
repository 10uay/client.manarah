import WhatsAppButton from "@/components/WhatsAppButton";
import { useTranslation, FaPlayCircle, useState } from "@/utils/Imports";
import { Modal } from "flowbite-react";
import ReactPlayer from "react-player";
import BoxReveal from "@/components/magicui/box-reveal";
import { motion, middleImage } from "@/utils/framer_motion_vars";

export default function M_Intro_One({ info, domain }) {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="min-h-fit lg:pt-14 pt-2 lg:pb-28 pd-10 container mx-auto lg:text-start text-center px-3">
      <div className="flex justify-center items-center flex-wrap gap-7">
        <div className="w-full lg:flex-1 order-2 lg:order-1">
          <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl 2xl:leading-[5rem] capitalize md:leading-[3.5rem] font-bold max-w-[630px] 2xl:max-w-[670px] max-h-fit text-[#073763] mx-auto lg:mx-0">
            <h1 className="md:text-start text-center md:mx-0 mx-auto w-fit">
              <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
                <strong className="block lg:pb-2">{t(info?.title)}</strong>
              </BoxReveal>
            </h1>
          </div>

          <div className="max-w-[500px] text-[#737195] 2xl:text-xl mt-7 mx-auto lg:mx-0">
            <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
              <p>{t(info?.para)}</p>
            </BoxReveal>
          </div>

          <div className="flex items-center gap-5 mt-8 lg:justify-start justify-center">
            <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
              <WhatsAppButton text="get-started" />
            </BoxReveal>
            {info?.intro && (
              <BoxReveal boxColor={"#2bfaff"} duration={0.5}>
                <button
                  type="button"
                  className="text-primary font-medium gap-2 flex items-center"
                  onClick={() => setOpenModal(true)}
                >
                  <FaPlayCircle className="w-10 h-10" />
                  {t("intro-video")}
                </button>
              </BoxReveal>
            )}

            {/* modal */}
            <Modal
              dismissible
              show={openModal}
              onClose={() => setOpenModal(false)}
            >
              <Modal.Header>{t("intro-video")}</Modal.Header>
              <Modal.Body className="p-0">
                <ReactPlayer
                  url="https://new.webapi.alalmiyalhura.com/storage/files/new_services/1707312662___file_Turning%20visions%20into%20realities%20is%20what%20we%20do%20best%20At%20Al%20Almiya%20Alhura...mp4"
                  controls
                />
              </Modal.Body>
              <Modal.Footer className="py-2">
                {/* <Button color="gray" onClick={() => setOpenModal(false)}>
                    Decline
                  </Button> */}
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className="w-full lg:flex-1 lg:w-[400px] lg:h-[400px] order-1 lg:order-2">
          <motion.img
            variants={middleImage}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src={`${domain}/${info?.img}`}
            alt={t(info?.title)}
            className="mx-auto aspect-auto w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] object-contain"
            width="450"
            height="450"
          />
        </div>
      </div>
    </div>
  );
}
