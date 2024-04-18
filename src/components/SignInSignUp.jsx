import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import "./SignInSignUp.css";
import { motion } from "framer-motion";
import { textVariants, sliderVariants } from "./framer-motion";

const SignInSignUpWithLocalStorage = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localName = localStorage.getItem("name");
  const localPassword = localStorage.getItem("password");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  }, []);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (show) {
        //the enter key was pressed
        handleSignUp();
      } else {
        handleSignIn();
      }
    }
  };
  const handleSignUp = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully");
      window.location.reload();
    }
  };

  const handleSignIn = () => {
    if (
      email.current.value === localEmail &&
      localName &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please enter valid credentials.");
    }
  };
  return (
    <div>
      {showHome ? (
        <Home />
      ) : show ? (
        <motion.div
          className="container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <h1>Hello {localStorage.getItem("name")}</h1>
          <div className="input_space">
            <input placeholder="Email" type="text" ref={email}></input>
          </div>
          <div className="input_space">
            <input
              placeholder="Password"
              type="password"
              ref={password}
              onKeyPress={handleKeyPress}
            ></input>
          </div>
          <button onClick={handleSignIn}>Sign In</button>
        </motion.div>
      ) : (
        <div className="container">
          <div className="input_space">
            <input placeholder="Name" type="text" ref={name}></input>
          </div>
          <div className="input_space">
            <input placeholder="Email" type="text" ref={email}></input>
          </div>
          <div className="input_space">
            <input
              placeholder="Password"
              type="password"
              ref={password}
              onKeyPress={handleKeyPress}
            ></input>
          </div>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default SignInSignUpWithLocalStorage;
