import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { addItemToCart } from "../../store/cart/cart.action";

import "./product-card.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addItemToCartHandler = (cartItems, itemToAdd) =>
    dispatch(addItemToCart(cartItems, itemToAdd));
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={() => addItemToCartHandler(cartItems, product)}
      >
        Add to card
      </Button>
    </div>
  );
}
