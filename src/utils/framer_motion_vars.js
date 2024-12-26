import { easeInOut, motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const leftCard = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: easeInOut,
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    x: -200,
    transition: {
      ease: easeInOut,
      duration: 0.5,
    },
  },
};
const rightCard = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: easeInOut,
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    x: 200,
    transition: {
      ease: easeInOut,
      duration: 0.5,
    },
  },
};

const middleImage = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: easeInOut,
      duration: 1.6,
    },
  },
};

export { easeInOut, motion, container, leftCard, rightCard, middleImage };