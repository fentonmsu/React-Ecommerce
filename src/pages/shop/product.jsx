import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Lightbox from "../../components/lightbox";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  // need access to cartItems state
  const { addToCart, cartItems } = useContext(ShopContext);

  // the amount of product in cart
  const cartItemAmount = cartItems[id];
  return (
    //   maps to the array
    <div className="product">
      {productName}
      {/* <img src={productImage}></img> */}
      <Lightbox src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      {/* mapping through the array */}
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}{" "}
      </button>
    </div>
  );
};

export default Product;
