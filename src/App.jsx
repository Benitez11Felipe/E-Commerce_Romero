import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Inicio from "./pages/Inicio/Inicio";
import Productos from "./pages/ItemListContainer/Productos";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import { useState } from "react";
import PaginaHombre from "./pages/PaginaHombre/PaginaHombre";
import Joyeria from "./pages/Joyeria/Joyeria";
import Electronica from "./pages/Electronica/Electronica";
import PaginaMujer from "./pages/PaginaMujer/PaginaMujer";
import Footer from "./components/Footer/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Router>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos onAddToCart={addToCart} />} />
        <Route path="/productos/item/:id" element={<ItemDetailContainer onAddToCart={addToCart} />} />
        <Route path="/productos/PaginaHombre" element={<PaginaHombre onAddToCart={addToCart} />} />
        <Route path="/productos/Joyeria" element={<Joyeria onAddToCart={addToCart} />} />
        <Route path="/productos/Electronica" element={<Electronica onAddToCart={addToCart} />} />
        <Route path="/productos/PaginaMujer" element={<PaginaMujer onAddToCart={addToCart} />} />
      </Routes>
    </Router>
      <Footer/>
    </>
  );
}

export default App;
