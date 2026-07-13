// src/Componentes/Inicio/Inicio.jsx
import ItemListContainer from "../Items/ItemListContainer";
import GestionProductos from "../GestionProductos/GestionProductos";

function Inicio() {
    return (
        <>
            <ItemListContainer Mensaje={"Bienvenido a Neko Store"} />
            <GestionProductos />
        </>
    );
}

export default Inicio;