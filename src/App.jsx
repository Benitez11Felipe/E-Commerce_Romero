import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/ItemListContainer/Productos";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import PaginaHombre from "./pages/PaginaHombre/PaginaHombre";
import Joyeria from "./pages/Joyeria/Joyeria";
import Electronica from "./pages/Electronica/Electronica";
import PaginaMujer from "./pages/PaginaMujer/PaginaMujer";
import Footer from "./components/Footer/Footer";
import CartList from "./pages/CartList/CartList";
import Cuenta from "./pages/Cuenta/Cuenta";
import Registro from "./pages/Registro/Registro";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalCount);
  };

  const addToCart = () => {
    updateCartCount();
  };

  return (
    <>
      <Router>
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/productos"
            element={<Productos onAddToCart={addToCart} />}
          />
          <Route
            path="/productos/item/:id"
            element={<ItemDetailContainer onAddToCart={addToCart} />}
          />
          <Route
            path="/productos/PaginaHombre"
            element={<PaginaHombre onAddToCart={addToCart} />}
          />
          <Route
            path="/productos/Joyeria"
            element={<Joyeria onAddToCart={addToCart} />}
          />
          <Route
            path="/productos/Electronica"
            element={<Electronica onAddToCart={addToCart} />}
          />
          <Route
            path="/productos/PaginaMujer"
            element={<PaginaMujer onAddToCart={addToCart} />}
          />
          <Route
            path="/CartList"
            element={<CartList onAddToCart={addToCart} />}
          />
          <Route path="/cuenta" element={<Cuenta />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
