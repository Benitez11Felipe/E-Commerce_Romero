import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";
import PropTypes from 'prop-types';

function CartWidget({ cartCount }) {
  return (
    <div className="cart-icon">
      <FaShoppingCart />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
}

CartWidget.propTypes = {
  cartCount: PropTypes.number.isRequired
};

export default CartWidget;
