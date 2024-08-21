import "./Navbar2.css";
import { NavLink } from "react-router-dom";

function Navbar2() {
  return (
    <div className="navbar2">
      <div id="encabezado2">
        <ul>
          <li>
            <NavLink
              to="/productos/PaginaHombre"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Ropa de Hombre
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productos/Joyeria"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Joyería
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productos/electronica"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Electrónica
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/productos/PaginaMujer"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Ropa de Mujer
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar2;
