import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Lightbox from "../../components/lightbox";

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    //   how we want each item in our cart to look like
    <div className="cartItem">
      {/* <img className="cart_img" src={productImage} /> */}
      <Lightbox className="cart_img" src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>$ {price}</p>
        {/* changing the amount of products in the cart */}
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          ></input>
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
