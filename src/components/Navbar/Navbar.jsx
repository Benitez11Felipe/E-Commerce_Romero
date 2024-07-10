import "./Navbar.css";
import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  const [activeItem, setActiveItem] = useState("Productos");


  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <>
      <div className="navbar">
        <div id="navbarIzquierda">
          <img
            className="fotoNavbar"
            src="/src/images/icono/icono.jpg"
            alt="Logo"
          />
          <h1>Panda Showroom</h1>
        </div>
        <div id="encabezado">
          <ul>
            <li
              className={activeItem === "Inicio" ? "active" : ""}
              onClick={() => handleItemClick("Inicio")}
            >
              <a>Inicio</a>
            </li>
            <li
              className={activeItem === "Productos" ? "active" : ""}
              onClick={() => handleItemClick("Productos")}
            >
              <a>Productos</a>
            </li>
            <li
              className={activeItem === "Buzos" ? "active" : ""}
              onClick={() => handleItemClick("Buzos")}
            >
              <a>Buzos</a>
            </li>
            <li
              className={activeItem === "Pantalones" ? "active" : ""}
              onClick={() => handleItemClick("Pantalones")}
            >
              <a>Pantalones</a>
            </li>
          </ul>
        </div>
        <div id="navbarDerecha">
          <CartWidget/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
