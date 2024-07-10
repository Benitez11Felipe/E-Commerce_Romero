import "./CartWidget.css";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <button onClick={addToCart} className="add-to-cart-btn">
        Agregar al carrito
      </button>
      <div className="cart-icon">
        <FaShoppingCart />
        <span className="cart-count">{cartCount}</span>
      </div>
    </>
  );
}

export default CartWidget;
