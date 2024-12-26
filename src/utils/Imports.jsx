import useMouse from "@react-hook/mouse-position";
import { useRef, useState, useEffect, lazy, Suspense, forwardRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { AttrPlugin } from "gsap/AttrPlugin";
// gsap.registerPlugin(AttrPlugin);

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

import {
  Button,
  Modal,
  Label,
  TextInput,
  FileInput,
  Textarea,
  Dropdown,
} from "flowbite-react";

// icons
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";
import { MdHighQuality } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaMobileAlt } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GrHostMaintenance } from "react-icons/gr";
import { FaServer } from "react-icons/fa";
import { GiServerRack } from "react-icons/gi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { TbPresentationAnalytics } from "react-icons/tb";
import { MdOutlineCorporateFare } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { TbUsersGroup } from "react-icons/tb";
import { PiBuildingOffice } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AiOutlineShopping } from "react-icons/ai";
import { GiSpades } from "react-icons/gi";
import { FaQuoteLeft } from "react-icons/fa";
import { IoIosCodeWorking } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { MdArrowCircleLeft } from "react-icons/md";
import { MdArrowCircleRight } from "react-icons/md";
import { HiMiniShieldCheck } from "react-icons/hi2";
import { GrChat } from "react-icons/gr";
import { GrAscend } from "react-icons/gr";
import { FaEye } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { FaMedal } from "react-icons/fa6";
import { SiParrotsecurity } from "react-icons/si";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { app } from "@/firebase.config.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { CircularProgressbar } from "react-circular-progressbar";

export {
  useMouse,
  useRef,
  useState,
  useEffect,
  forwardRef,
  PropTypes,
  // gsap,
  // ScrollTrigger,
  // useGSAP,
  lazy,
  Suspense,
  i18n,
  initReactI18next,
  useTranslation,
  cookies,
  FaFacebook,
  FaTiktok,
  RiTwitterXFill,
  FaLinkedinIn,
  FaInstagram,
  MdOutlineSecurity,
  IoIosSpeedometer,
  MdHighQuality,
  FaLocationDot,
  IoMailSharp,
  BsFillTelephoneOutboundFill,
  HiOutlineComputerDesktop,
  FaMobileAlt,
  FaCloudUploadAlt,
  GrHostMaintenance,
  FaServer,
  GiServerRack,
  RiShoppingBag4Fill,
  TbPresentationAnalytics,
  MdOutlineCorporateFare,
  MdOutlineManageAccounts,
  FaCheck,
  FaProjectDiagram,
  TbUsersGroup,
  PiBuildingOffice,
  HiOutlineShoppingBag,
  AiOutlineShopping,
  GiSpades,
  FaQuoteLeft,
  IoIosCodeWorking,
  FaPlayCircle,
  MdArrowCircleLeft,
  MdArrowCircleRight,
  HiMiniShieldCheck,
  Link,
  useLocation,
  //
  Dropdown,
  Button,
  Modal,
  Label,
  TextInput,
  FileInput,
  Textarea,
  GrChat,
  GrAscend,
  FaEye,
  BsCalendarDateFill,
  MdKeyboardDoubleArrowRight,
  TbMessage,
  FaRegEye,
  TbTargetArrow,
  FaMedal,
  SiParrotsecurity,
  BsLightningChargeFill,
  FaWhatsapp,
  MdOutlineAlternateEmail,
  app,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  CircularProgressbar,
  axios,
};
