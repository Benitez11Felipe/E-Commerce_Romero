import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes
import './ItemDetailContainer.css';
import Navbar2 from '../../components/Navabar2/Navbar2';

const ItemDetailContainer = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  return (
    <>
    <Navbar2/>
    <div className="item-detail">
      <img src={product.image} alt={product.title} className="item-image" />
      <div className="item-content">
        <h1 className="item-title">{product.title}</h1>
        <p className="item-description">{product.description}</p>
        <p className="item-price">${product.price}</p>
        <button className="item-button" onClick={() => onAddToCart()}>
          Agregar al carrito
        </button>
      </div>
    </div>
    </>
  );
};

// Validar las props
ItemDetailContainer.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemDetailContainer;
