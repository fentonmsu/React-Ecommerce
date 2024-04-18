import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Checkout from "./pages/checkout/checkout";
import Success from "./pages/checkout/Success";
import Cancel from "./pages/checkout/Cancel";
import { Toggle } from "./components/Toggle";

import useLocalStorage from "use-local-storage";
import {
  textVariants,
  sliderVariants,
  fadeInAnimationVariants,
  hoverVariants,
} from "./js/framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// import navbar from "./js/navbar";

import "./css/lightbox.css";
import "./css/navbar.css";

// function MyComponent() {
//     useEffect(() => {
//         lightbox(); // this will execute when the component mounts
//     }, []); // empty dependency array ensures it only runs once on mount
// }
const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <motion.div
      className="App"
      variants={textVariants}
      initial="initial"
      animate="animate"
      data-theme={isDark ? "dark" : "light"}
    >
      {/* everything will have access to what we put into the provider */}
      <ShopContextProvider>
        <Toggle
          isChecked={isDark}
          // make the opposite value
          handleChange={() => setIsDark(!isDark)}
        ></Toggle>
        <Router>
          {/* put navbar hear for all to see */}
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Shop></Shop>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/checkout" element={<Checkout></Checkout>}></Route>
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </motion.div>
  );
};

export default App;
