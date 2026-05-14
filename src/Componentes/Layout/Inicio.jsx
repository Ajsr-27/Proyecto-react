// src/Componentes/Inicio/Inicio.jsx
import ItemListContainer from "../Items/ItemListContainer";
import FormularioContenedor from "../Formulario/FormularioContenedor";

function Inicio() {
    return (
        <>
            <ItemListContainer Mensaje={"Bienvenido a Neko Store"} />
            <FormularioContenedor />
        </>
    );
}

export default Inicio;