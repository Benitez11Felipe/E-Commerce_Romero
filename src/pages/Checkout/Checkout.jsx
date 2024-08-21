import { db } from "../../main.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import "./Checkout.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
    } else {
      navigate("/cuenta");
    }

    const fetchCartItems = () => {
      try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(cart);
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
  }, [navigate]);

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const getTotalQuantity = () =>
    cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleConfirmPurchase = async () => {
    if (user) {
      const userName = user.name || "Usuario";
      const totalAmount = getTotalPrice().toFixed(2);
      const totalItems = getTotalQuantity();

      const confirmed = window.confirm(
        `${userName} desea realizar su compra con un total de $${totalAmount} con sus ${totalItems} productos?`
      );

      if (confirmed) {
        try {
          const docRef = await addDoc(collection(db, "Compras"), {
            items: cartItems.map((item) => ({
              name: item.title,
              quantity: item.quantity,
              unitPrice: item.price,
              totalPrice: (item.price * item.quantity).toFixed(2),
            })),
            totalPrice: totalAmount,
            date: new Date().toISOString(),
          });

          const orderId = docRef.id;
          alert(`Pedido realizado con éxito. El ID de su pedido es ${orderId}`);

          localStorage.removeItem("cart");
          setCartItems([]);
          navigate("/");
          window.location.reload();
        } catch (error) {
          console.error("Error al guardar la compra en Firebase:", error);
        }
      }
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="checkout">
      <h2>Resumen de la Compra</h2>
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
                    <img src={item.image} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="checkout-total">
            <p>
              Total de la compra:{" "}
              <span className="total-amount">
                ${getTotalPrice().toFixed(2)}
              </span>
            </p>
          </div>
          <button className="confirm-purchase" onClick={handleConfirmPurchase}>
            Comprar como {user ? user.email : "...@gmail.com"}
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
