import "./Inicio.css";
import Slide from "../../components/Slide/Slide";
import Decision from "../../components/Decision/Decision";

function Inicio() {
  return (
    <div className=".content">
      <Slide />
      <img className="metodoDePago" src="/src/images/varios/metodosPagos.png" />
      <Decision />
    </div>
  );
}

export default Inicio;