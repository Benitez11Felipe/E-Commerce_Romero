import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Loader from "../../components/Loader/Loader";
import "./CartList.css";

const CartList = ({ onAddToCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cart);
        onAddToCart();
      } catch (error) {
        console.error("Error al recuperar los productos del carrito:", error);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();

    return () => {
      setCartItems([]);
      setLoading(true);
    };
  }, [onAddToCart]);

  const handleClearCart = () => {
    if (
      window.confirm(
        "¿Estás seguro de que quieres borrar todos los productos del carrito?"
      )
    ) {
      localStorage.removeItem("cart");
      setCartItems([]);
      onAddToCart();
    }
  };

  const handleProceedToCheckout = () => {
    navigate("/cuenta");
  };

  const handleIncreaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    onAddToCart();
  };

  const handleDecreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
          : item
      )
      .filter((item) => item.quantity > 0);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    onAddToCart();
  };

  const handleRemoveItem = (id) => {
    if (
      window.confirm(
        "Este producto se eliminará de tu carrito. ¿Quieres continuar?"
      )
    ) {
      const updatedCart = cartItems.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      onAddToCart();
    }
  };

  if (loading) {
    return <Loader />;
  }

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-list">
      <h2>Productos en el carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Título</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link to={`/productos/item/${item.id}`}>
                      <img src={item.image} alt={item.title} />
                    </Link>
                  </td>
                  <td>
                    <Link to={`/productos/item/${item.id}`}>{item.title}</Link>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button
                      className="Hola"
                      onClick={() => handleDecreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="Hola"
                      onClick={() => handleIncreaseQuantity(item.id)}
                    >
                      +
                    </button>
                    <button
                      className="Eliminar"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <p>
              Total de la compra:{" "}
              <span className="total-amount">
                ${getTotalPrice().toFixed(2)}
              </span>
            </p>
          </div>
          <div className="cart-actions">
            <button className="clear-cart" onClick={handleClearCart}>
              Borrar todos los productos
            </button>
            <button
              className="proceed-checkout"
              onClick={handleProceedToCheckout}
            >
              Proceder a la compra
            </button>
          </div>
        </>
      )}
    </div>
  );
};

CartList.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default CartList;
