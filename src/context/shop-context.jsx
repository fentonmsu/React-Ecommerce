import React, { createContext, useState } from "react";
import { Products } from "../products";

export const ShopContext = createContext(null);
// keep track of states and functions that can be accessed in our project, in the shop and the cart, to modify both components

// key of each product id, how many items are currently in the cart and
// create a function that will get the array and create initial state of cart items
// want to create an object equal to the ids of the products, handle the changes

// add in local storage
const getDefaultCart = () => {
  const lsCart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : {};
  let cart = lsCart || {};
  if (Object.keys(cart).length === Products.length) {
    return cart;
  }
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  // define our states everything for logic, this will be an object with 8 properties
  const getItemsNumber = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  // generate total amount in cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    // loop through every item in the cart items object to see if there values are greater than zero, grab that item and multiply it by the quantity and price add that to the total amount, get the item information.
    // find function in of an element in a specific array, some part of it satisfy a condition, find the product
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = Products.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return Math.round(totalAmount * 100) / 100;
  };

  const addToCart = (itemId) => {
    // setting the change of item, alternating the id
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const removeFromCart = (itemId) => {
    // setting the change of item, alternating the id
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  // update cart
  const updateCartItems = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const checkout = () => {
    setCartItems(getDefaultCart());
  };
  // passing this to our provider

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItems,
    getTotalCartAmount,
    checkout,
    getItemsNumber,
  };

  return (
    //   keep track of all my data and organize myh logic from this components, pass it to the provider, wrap around other components all the differne states and conditions for the provider
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
// https://www.youtube.com/watch?v=tEMrD9t85v4&t=1520s
