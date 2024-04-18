import React, {useContext} from 'react'
import { Products } from '../../products'
import { Product } from '../shop/product'
import { ShopContext } from '../../context/shop-context'
import CartItem from './cart-item'
import "./cart.css";
import { motion } from "framer-motion";
import { textVariants, sliderVariants } from '../../js/framer-motion'

// go back to the shopping page, navigate to another route
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
  const navigate = useNavigate();
  

  return (
    <div className="cart">
      <div>
        <motion.h1
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Your cart Items
        </motion.h1>
      </div>
      <motion.div
        className="cartItems"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        {/* check if the product has a value greater than zero, if it is not not in the cart */}
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product}></CartItem>;
          }
        })}
      </motion.div>
      {totalAmount > 0 ? (
        <motion.div className="checkout"   variants={textVariants}
        initial="initial"
        animate="animate">
          {/* if the total amount is greater than zero, then display  */}
          <p>Subtotal ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue shopping</button>
          <button onClick={() => navigate("/checkout")}>Checkout</button>
        </motion.div>
      ) : (
        <motion.h1 variants={textVariants} initial="initial" animate="animate">
          Your Cart is Empty.
        </motion.h1>
      )}
    </div>
  );
}
export default Cart