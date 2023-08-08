import React, { useContext } from "react";

import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
        {cartItems.map((cartItem) => {
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>
      <span className="total">Total: {cartTotal}$</span>
    </div>
  );
}
