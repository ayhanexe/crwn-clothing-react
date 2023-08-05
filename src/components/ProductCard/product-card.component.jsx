import { useContext } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

export default function ProductCard({ product }) {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => addItemToCart(product)}>
        Add to card
      </Button>
    </div>
  );
}
