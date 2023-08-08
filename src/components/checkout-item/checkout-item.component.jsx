import { useContext } from "react";
import "./checkout-item.styles.scss";
import { useDispatch, useSelector } from "react-redux";

import {
  clearItemFromCart,
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

export default function CheckoutItem({ cartItem }) {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const clearItemFromCartHandler = (cartItems, itemToClear) =>
    dispatch(clearItemFromCart(cartItems, itemToClear));
  const addItemToCartHandler = (cartItems, itemToAdd) =>
    dispatch(addItemToCart(cartItems, itemToAdd));
  const removeItemFromCartHandler = (cartItems, itemToRemove) =>
    dispatch(removeItemFromCart(cartItems, itemToRemove));

  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => removeItemFromCartHandler(cartItems, cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => addItemToCartHandler(cartItems, cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        onClick={() => clearItemFromCartHandler(cartItems, cartItem)}
        className="remove-button"
      >
        &#10005;
      </div>
    </div>
  );
}
