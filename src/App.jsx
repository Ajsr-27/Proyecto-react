import ItemListContainer from "./Componentes/Items/ItemListContainer";
import { Routes, Route } from 'react-router-dom';
import Layout from "./Componentes/Layout/Layout";
import Cart from "./Componentes/Cart/Cart";
import Login from "./Componentes/Login/Login";
import Registro from "./Componentes/Login/Registro";
import ProduBD from "./Componentes/ProductosBD/ProductosBD";
import GestionProductos from "./Componentes/GestionProductos/GestionProductos";
import ProtectedRoute from "./Componentes/ProtectedRoute/PotectedRoute";
import GestionCupones from "./Componentes/GestionCupones/GestionCupones";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ProduBD />} />
        <Route path="/GestionCupones"
          element={<ProtectedRoute rolesPermitidos={['admin']}>
            <GestionCupones />
          </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/produBD" element={<ProduBD />} />
        <Route path="/GestionProductos"
          element={<ProtectedRoute rolesPermitidos={['admin']}>
            <GestionProductos />
          </ProtectedRoute>} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/Registro" element={<Registro />} />
      </Route>
    </Routes>
  );
}

export default App;