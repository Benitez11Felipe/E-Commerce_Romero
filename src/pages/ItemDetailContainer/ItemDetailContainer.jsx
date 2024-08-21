import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Navbar2 from "../../components/Navabar2/Navbar2";
import { db } from "../../main";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import { addToCart } from "../../Contexts/CartContext/CartContext";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "items", id);
        const productDoc = await getDoc(productRef);
        if (productDoc.exists()) {
          const data = productDoc.data();
          const price =
            typeof data.price === "number"
              ? data.price
              : parseFloat(data.price) || 0;
          setProduct({ id: productDoc.id, ...data, price });
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <h3>No se encontró el producto</h3>;

  const handleAddToCart = () => {
    const added = addToCart({ ...product, quantity });
    if (added) {
      onAddToCart(product);
      console.log("Producto añadido al carrito:", product);
    }
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <Navbar2 />
      <div className="item-detail">
        <img src={product.image} alt={product.title} className="item-image" />
        <div className="item-content">
          <h1 className="item-title">{product.title}</h1>
          <p className="item-description">{product.description}</p>
          <p className="item-price">${product.price.toFixed(2)}</p>
          <div className="item-quantity">
            <button className="quantity-button" onClick={decrementQuantity}>
              -
            </button>
            <span className="quantity-value">{quantity}</span>
            <button className="quantity-button" onClick={incrementQuantity}>
              +
            </button>
          </div>
          <button className="item-button" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

ItemDetailContainer.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default ItemDetailContainer;
