import { useContext, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";


import "./checkout.css";
import { motion } from "framer-motion";
import {
  textVariants,
  sliderVariants,
  fadeInAnimationVariants,
  hoverVariants,
} from "./framer-motion";
import { ShopContext } from "../../context/shop-context";
import { Products } from "../../products";

// defer stripe from loading

let stripePromise;
const getStripe = () => {
  // get a new instance to redirect
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  // call that before your check out
  return stripePromise;
};

const Checkout = () => {
        const { cartItems, getTotalCartAmount } =
          useContext(ShopContext);
        const totalAmount = getTotalCartAmount();
  const [stripeError, setStripeError] = useState(null);
  // redirect to checkout returns a promise
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1O6dHQArt9ohDQr4dyrNeJbg",
    quantity: 1,
  };

  const cartProducts = []
  Products.forEach(item => {
    if (cartItems[item.id] !== 0)
    {
// map the products in the cart to have the stripe object structure 
      cartProducts.push({
        price: item.stripePrice, 
        quantity: cartItems[item.id]
      })
    }
  })
  const checkoutOptions = {
    lineItems: cartProducts,
    mode: "payment",
    // use for redirect
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };
  const redirectToCheckout = async () => {
    console.log(checkoutOptions);
    setLoading(true);
    const stripe = await getStripe();
    // returns a promise error if there is any
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);
    // save the error to the new state
    if (error) setStripeError(error.message);
    setLoading(false);
  };
  // if something is wronge with stripe, show the error
  if (stripeError) alert(stripeError);

  return (
    <motion.div
      className="checkout"
      variants={sliderVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1 variants={textVariants} initial="initial" animate="animate">
        Stripe Checkout
      </motion.h1>
      <motion.p
        className="checkout-title"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
     
      </motion.p>
      {Products.map((product) => {
        if (cartItems[product.id] !== 0) {
            return <div key={product.id}>{product.productName }</div>;
        }
      })}
      <motion.p
        className="checkout-description"
        variants={textVariants}
        initial="initial"
        animate="animate"
      ></motion.p>
      <motion.h1
        className="checkout-price"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        ${totalAmount}
      </motion.h1>
      {/* <motion.img
        className="checkout-product-image"
        variants={textVariants}
        initial="initial"
        animate="animate"
        src={ProductImage}
        alt="Product"
      /> */}
      <motion.button
        className="checkout-button"
        variants={textVariants}
        initial="initial"
        animate="animate"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
        <motion.div
          className="grey-circle"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="purple-circle"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            {/* <img className="icon" src={CardIcon} alt="credit-card-icon" /> */}
          </motion.div>
        </motion.div>
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.p
            className="text"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            {isLoading ? "Loading.." : "Buy"}
          </motion.p>
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default Checkout;
