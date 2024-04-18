import React from "react";
import { motion } from "framer-motion";

import {
  textVariants,
  sliderVariants,
  fadeInAnimationVariants,
  hoverVariants,
} from "./framer-motion";

const Success = () => {
  return (
    <motion.div variants={sliderVariants} initial="initial" animate="animate">
      <motion.h1 variants={sliderVariants} initial="initial" animate="animate">
        Success
      </motion.h1>
      <motion.h2 variants={sliderVariants} initial="initial" animate="animate">
        Thank you for your purchase!
      </motion.h2>
    </motion.div>
  );
};

export default Success;
