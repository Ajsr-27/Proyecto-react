import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Firebase/Config';
import { capitalizarPrimeraLetra } from '../Capitalice/Formato';
import AgregarCarrito from '../Boton/AgregarCarrito';
import { useCart } from '../../Context/CartContext';

const ProduBD = () => {
    const [productos, setProductos] = useState([]);
    const { addToCart } = useCart();

    useEffect(() => {
        const prodBD = collection(db, "productos");
        getDocs(prodBD).then((resp) => {
            setProductos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                })
            );
        });
    }, []);

    return (
        <div className="px-2 sm:px-0">
            <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">Bienvenido a Nuestra Tienda</h1>

            {/* Contenedor que organiza las tarjetas en filas, con salto de línea automático */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 p-2 sm:p-4">
                {productos.map(prod => (
                    <div
                        key={prod.id}
                        className="border-white text-left w-full max-w-xs sm:w-64 sm:max-w-none border-2 rounded-lg p-3 sm:p-4 flex flex-col items-center gap-2"
                    >
                        <img
                            className="object-contain h-40 sm:h-60 w-32 sm:w-40"
                            src={prod.imagen}
                            alt={prod.nombre}
                        />

                        <h3 className="text-lg sm:text-2xl font-semibold text-center">{capitalizarPrimeraLetra(prod.nombre)}</h3>
                        <p className="mb-1 text-base sm:text-xl">Precio: ${prod.precio}</p>
                        <p className="mb-4 text-base sm:text-xl">Stock: {prod.stock} unidades</p>

                        <AgregarCarrito
                            texto="Agregar al carrito"
                            onClick={() => addToCart(prod, 1)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProduBD;