import Productos from "./ItemListContainer";
import AgregarCarrito from "../Boton/AgregarCarrito";

export function Item({ productos }) {
    return (

        <div className="grid grid-cols-3">
            {productos.map((producto) => (
                <div key={producto.id}>

                    <div className="border-white text-left  h-60 w-110 border-2 rounded-lg p-4 m-4 flex justify-between items-center gap-4 ">
                        <img
                        className="flex object-contain h-60 w-40" 
                        src={`${import.meta.env.BASE_URL}${producto.imagen}`} 
                        alt={producto.nombre} width="150" />

                        <div>
                            <h2 className="text-2xl font-semibold">{producto.nombre}</h2>
                            <p className="mb-13 text-xl">Precio: ${producto.precio}</p>
                            <AgregarCarrito texto="Agregar al carrito" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Item;