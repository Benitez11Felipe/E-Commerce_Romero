// App.jsx
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Inicio from './pages/Inicio/Inicio';
import Productos from './pages/Productos/Productos';
import { useState } from 'react';

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos onAddToCart={addToCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
