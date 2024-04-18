import React from "react";
import "./product-skeleton.css"

const ProductSkeleton = () => {
  // need access to cartItems state
  // the amount of product in cart
  return (
    //   maps to the array
      <div className="product-skeleton">
      <span className="product-text-skeleton"></span>
      {/* <img src={productImage}></img> */}
      <div className="product-image-skeleton"></div>
      <div className="description">
        <p>
          <span className="product-text-skeleton"></span>
        </p>
        <p>
          <span className="product-text-skeleton"></span>
        </p>
      </div>
      {/* mapping through the array */}
      <button className="product-button-skeleton">
       
      </button>
    </div>
  );
};

export default ProductSkeleton;
