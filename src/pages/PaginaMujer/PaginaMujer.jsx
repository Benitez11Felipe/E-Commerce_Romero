import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CardProduct from "../../components/CardProduct/CardProduct";
import "../PaginaMujer/PaginaMujer.css";
import Navbar2 from "../../components/Navabar2/Navbar2";
import Loader from "../../components/Loader/Loader";
import { db } from "../../main";
import { collection, getDocs, query, where } from "firebase/firestore";

const PaginaMujer = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "items");
        const q = query(
          productsCollection,
          where("category", "==", "women's clothing")
        );
        const productsSnapshot = await getDocs(q);
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

PaginaMujer.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default PaginaMujer;
