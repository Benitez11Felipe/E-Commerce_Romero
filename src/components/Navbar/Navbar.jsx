import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div id="navbarIzquierda">
        <img
          className="fotoNavbar"
          src="/src/images/icono/icono.jpg"
          alt="Logo"
        />
      </div>
      <div id="encabezado">
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos" className={({ isActive }) => (isActive ? "active" : "")}>
              Productos
            </NavLink>
          </li>
        </ul>
      </div>
      <div id="navbarDerecha">
        <CartWidget />
      </div>
    </div>
  );
}

export default Navbar;
