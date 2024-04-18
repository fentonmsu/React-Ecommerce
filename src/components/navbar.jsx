import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, shoppingCard } from "phosphor-react";
import "./navbar.css";
import { motion } from "framer-motion";
import {
  textVariants,
  sliderVariants,
  fadeInAnimationVariants,
  hoverVariants,
} from "../js/framer-motion";
import { ShopContext } from "../context/shop-context";
// import {SignInSignUp} from "./SignInSignUp";

function Navbar() {
  const { cartItems, getItemsNumber } = useContext(ShopContext);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [itemsNumber, setItemsNumber] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    console.log(cartItems);
    setItemsNumber(getItemsNumber());
    console.log(itemsNumber);
  }, [cartItems]);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
  };

  return (
    <nav className={navbarVisible ? "navbar" : "navbar navbar-hidden"}>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="links"
      >
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart
          <ShoppingCart className="shopping-cart-icon" size={20}></ShoppingCart>
          {itemsNumber > 0 && itemsNumber}
        </Link>
      </motion.div>
    </nav>
  );
}

export default Navbar;
