import { useEffect } from "react";

export default function ItemListContainer() {

  useEffect(() => {
    fetch("/data/productos.json")
      .then((respuesta) => {
        console.log("Respuesta cruda:", respuesta);
        return respuesta.json();
      })
      .then((datos) => {
        console.log("¡Productos cargados!", datos);
      })
      .catch((error) => {
        console.error("¡Ups! Hubo un error:", error);
      })
      .finally(() => {
        console.log("Intento de carga finalizado.");
      });
  }, []);

  return (
    <div>
      
    </div>
  );
}
