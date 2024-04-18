import React from "react";
import { motion } from "framer-motion";

import {
  textVariants,
  sliderVariants,
  fadeInAnimationVariants,
  hoverVariants,
} from "./framer-motion";

const Cancel = () => {
  return (
    <motion.div variants={sliderVariants} initial="initial" animate="animate">
      <motion.h1 variants={sliderVariants} initial="initial" animate="animate">
        Cancel
      </motion.h1>
      <motion.h2 variants={sliderVariants} initial="initial" animate="animate">
        Your payment was cancelled
      </motion.h2>
    </motion.div>
  );
};

export default Cancel;
