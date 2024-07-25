import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardProduct from "../../components/CardProduct/CardProduct";
import '../Productos/Productos.css';

const Productos = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="Productos">
      {products.map(product => (
        <CardProduct key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

Productos.propTypes = {
  onAddToCart: PropTypes.func.isRequired
};

export default Productos;