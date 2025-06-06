
import './App.css'
import { Inicio } from './assets/componentes/Inicio';
import { Menu } from './assets/componentes/Menu'
import Carrito from './assets/componentes/Carrito';
import { Route, Routes } from "react-router-dom";
import Detalle from './assets/componentes/Detalle';
import { PizzasProvider } from './context/Context';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Footer } from './assets/componentes/Footer';

function App() {

  return (
    <>
    <PizzasProvider>
      <Menu/>
      <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/pizza/:id" element={<Detalle/>}/>
      <Route path="/carrito" element={<Carrito/>}/>
      </Routes>
      <Footer/>
    </PizzasProvider>
    </>
  )
}

export default App
