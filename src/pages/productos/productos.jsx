import { useEffect, useState } from 'react';
import CardProduct from "../../components/CardProduct/CardProduct";
import '../productos/productos.css';

const Productos = () => {
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
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Productos;
