import React from "react";
import "./SignInSignUp.css";
import { motion } from "framer-motion";
import {
  textVariants,
  sliderVariants,
  fadeInAnimationVariants,
} from "./framer-motion";

const Home = () => {
  // need to remove it
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
    >
      Home
      <h1>Home</h1>
      <p>Welcome {localStorage.getItem("name")}</p>
      <button onClick={logout} className="logout">
        Logout
      </button>
      <button onClick={deleteAccount} className="delete">
        Delete Account
      </button>
    </motion.div>
  );
};

export default Home;
