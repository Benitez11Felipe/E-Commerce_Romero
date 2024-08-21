import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../CardProduct/CardProduct.css";

const CardProduct = ({ product, onAddToCart }) => {
  const price = product.price ? parseFloat(product.price) : 0;
  const formattedPrice = !isNaN(price) ? price.toFixed(2) : "0.00";

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const productExists = cart.find((item) => item.id === product.id);

    if (productExists) {
      productExists.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    onAddToCart(product);
  };

  return (
    <div className="card">
      <Link to={`/productos/item/${product.id}`} className="card-link">
        <img
          src={product.image}
          alt={product.title || "Producto sin título"}
          className="card-image"
        />
        <div className="card-content">
          <h3 className="card-title">{product.title || "Sin título"}</h3>
          <p className="card-description">
            {product.description || "Sin descripción disponible"}
          </p>
          <p className="card-price">${formattedPrice}</p>
        </div>
      </Link>
      <button className="cardButton" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default CardProduct;
