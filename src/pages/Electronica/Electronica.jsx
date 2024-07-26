import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardProduct from "../../components/CardProduct/CardProduct";
import "../Electronica/Electronica.css";
import Navbar2 from "../../components/Navabar2/Navbar2";

const Electronica = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/category/electronics"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar2 />
      <div className="Productos">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </>
  );
};

Electronica.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default Electronica;
