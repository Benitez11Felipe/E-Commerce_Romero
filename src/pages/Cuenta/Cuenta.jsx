import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cuenta.css";

const Cuenta = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setSuccess("¡Se Registo exitosamente!");
      setErrors("");

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          email: user.email,
          name: user.name,
        })
      );

      setTimeout(() => navigate("/checkout"), 3000);
    } else {
      setErrors("Correo electrónico o contraseña incorrectos.");
      setSuccess("");
    }
  };

  return (
    <div className="cuenta">
      <div className="form-container">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errors && <p className="error">{errors}</p>}
          {success && <p className="success">{success}</p>}
          <button className="botonInicio" type="submit">
            Iniciar Sesión
          </button>
        </form>
        <p className="register-link">
          ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default Cuenta;
