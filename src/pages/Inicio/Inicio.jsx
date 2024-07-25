import "./Inicio.css";
import Footer from "../../components/Footer/Footer";
import Slide from "../../components/Slide/Slide";
import Decision from "../../components/Decision/Decision";

function Inicio() {
  return (
    <>
      <Slide />
      <img className="metodoDePago" src="/src/images/varios/metodosPagos.png" />
      <Decision />
      <Footer />
    </>
  );
}

export default Inicio;