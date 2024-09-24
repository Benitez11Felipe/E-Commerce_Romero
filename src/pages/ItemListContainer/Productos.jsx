import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardProduct from "../../components/CardProduct/CardProduct";
import Navbar2 from "../../components/Navabar2/Navbar2";
import Loader from "../../components/Loader/Loader";
import { db } from "../../main";
import { collection, getDocs } from "firebase/firestore";

const Productos = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "items");
        const productsSnapshot = await getDocs(productsCollection);
        const productsList = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsList);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar2 />
      <div className="Productos">
        {products.length === 0 ? (
          <p>No hay productos disponibles</p>
        ) : (
          products.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))
        )}
      </div>
    </>
  );
};

Productos.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default Productos;
