import React from "react";
import Product from "./product"; // Import the Product component (if it's in a separate file)
import { Products } from "../../products";
import "./shop.css";
import {
  textVariants,
  sliderVariants,
  fadeInAnimationVariants,
  hoverVariants,
} from "../../js/framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ProductSkeleton from "./product-skeleton";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <motion.h1
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Zach Tech Shop
        </motion.h1>
      </div>
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="products"
      >
        {Products.map((product) => (
          <Product data={product} key={product.id} />
        ))}
        {Products.map((product) => (
          <ProductSkeleton />
        ))}
      </motion.div>
    </div>
  );
};

export default Shop;
