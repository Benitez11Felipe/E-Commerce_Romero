import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import PropTypes from "prop-types";
import "./CartWidget.css";

function CartWidget({ cartCount }) {
  return (
    <Link to="/cartlist" className="cart-link">
      <div className="cart-icon">
        <FaShoppingCart />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </Link>
  );
}

CartWidget.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default CartWidget;
