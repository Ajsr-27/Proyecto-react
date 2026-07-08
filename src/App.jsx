import ItemListContainer from "./Componentes/Items/ItemListContainer";
import FormularioContenedor from './Componentes/Formulario/FormularioContenedor';
import { Routes, Route } from 'react-router-dom';
import Layout from "./Componentes/Layout/Layout";
import Inicio from "./Componentes/Layout/Inicio";
import Cart from "./Componentes/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos" element={<ItemListContainer Mensaje={"Productos Destacados"} />} />
        <Route path="/contacto" element={<FormularioContenedor />} />
        <Route path="/carrito" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;