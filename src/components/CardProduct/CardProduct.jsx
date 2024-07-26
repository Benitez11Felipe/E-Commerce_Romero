import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../CardProduct/CardProduct.css';

const CardProduct = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <Link to={`/productos/item/${product.id}`} className="card-link">
        <img src={product.image} alt={product.title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-description">{product.description}</p>
          <p className="card-price">${product.price}</p>
        </div>
      </Link>
      <button className="card-button" onClick={() => onAddToCart()}>
        Agregar al carrito
      </button>
    </div>
  );
};

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired
};

export default CardProduct;
