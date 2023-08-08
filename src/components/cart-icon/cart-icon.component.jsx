import { useContext } from "react";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  SelectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action";

export default function CartIcon() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(SelectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const setIsCartOpenHandler = (bool) => dispatch(setIsCartOpen(bool));

  const toggleIsCartDropdown = () => setIsCartOpenHandler(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartDropdown}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
