// import Picture1 from "/public/images/Home_Into_1.webp";
// import Picture2 from "/public/images/Home_Into_2.webp";
// import Picture3 from "/public/images/Home_Into_3.webp";
// import Picture4 from "/public/images/logo.png";
// import Picture5 from "/public/images/Home_Into_5.webp";
// import Picture6 from "/public/images/Home_Into_6.webp";
// import Picture7 from "/public/images/Home_Into_7.webp";
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useRef } from "react";
// import "./ScrollTrigger_Image_Zoom.css";
import RetroGrid from "@/components/ui/retro-grid";

export default function ScrollTrigger_Image_Zoom() {
  return (
    <div className="relative flex h-[620px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border-none bg-background  ">
      <span className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-main_color  to-secondary_color bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
        Manarah Al-Abtkar
      </span>

      <RetroGrid />
    </div>
  );
}
