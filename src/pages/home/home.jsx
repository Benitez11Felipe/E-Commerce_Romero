import "../home/home.css";
import Footer from "../../components/Footer/Footer";
import Slide from "../../components/Slide/Slide";
import Decision from "../../components/Decision/Decision";

function home() {
  return (
    <>
      <Slide />
      <img className="metodoDePago" src="/src/images/varios/metodosPagos.png" />
      <Decision />
      <Footer />
    </>
  );
}

export default home;