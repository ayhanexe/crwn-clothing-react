import { CART_ACTION_TYPES } from "./cart.types";

import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, product) => {
    const isProductExistingInState = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );
  
    if (isProductExistingInState) {
      return cartItems.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...product, quantity: 1 }];
  };
  
  const removeCartItem = (cartItems, cartItemRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemRemove.id);
    }
  
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  
  const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
  };
  
  
export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
