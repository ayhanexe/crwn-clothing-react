import { useContext } from "react";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";

export default function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        )) : <EmptyMessage>Your cart is empty</EmptyMessage>}
      </CartItems>
      <Link to="/checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </CartDropdownContainer>
  );
}
