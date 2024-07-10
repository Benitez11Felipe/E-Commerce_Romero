import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Inicio / Productos"/>
      <Footer />
    </>
  );
}

export default App;

/*
import Slide from "./components/Slide/Slide";
import Decision from "./components/Decision/Decision";

<Slide />
<img className="metodoDePago" src="/src/images/varios/metodosPagos.png" />
<Decision />
*/
