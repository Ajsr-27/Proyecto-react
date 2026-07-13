import React from 'react';

export function FormularioProducto({ datosForm = {}, manejarCambio, manejarEnvio,manejarCambioImagen }) {
    return (
        <div className="flex flex-col w-full h-auto max-w-2xl mx-auto my-4 sm:my-8 md:m-12 p-3 sm:p-4 bg-(--color-fifth) border-solid rounded-lg gap-4">
            <form onSubmit={manejarEnvio}>
                <h3 className="text-lg sm:text-xl font-bold mb-4">Agregar Nuevo Producto</h3>

                <div className="mb-3 ">
                    <label className="block mb-1 text-lg font-medium ">ID del Producto:</label>
                    <input
                        type="number"
                        placeholder="Ej: 12345"
                        name="id"
                        value={datosForm.id}
                        onChange={manejarCambio}
                        className="hover:bg-(--color-fourth) p-2 border border-gray-500 rounded px-2 py-1 w-full"
                    />
                </div>
                <div className="mb-3 ">
                    <label className="block mb-1 text-lg font-medium ">Nombre del Producto:</label>
                    <input
                        type="text"
                        placeholder="Ej: Teclado Mecánico"
                        name="nombre"
                        value={datosForm.nombre}
                        onChange={manejarCambio}
                        className="hover:bg-(--color-fourth) p-2 border border-gray-500 rounded px-2 py-1 w-full"
                    />
                </div>

                <div className="mb-3">
                    <label className="block mb-1 text-lg font-medium">Precio:</label>
                    <input
                        type="number"
                        placeholder="Ej: 95"
                        name="precio"
                        value={datosForm.precio}
                        onChange={manejarCambio}
                        className="hover:bg-(--color-fourth) p-2 border border-gray-500 rounded px-2 py-1 w-full"
                    />
                </div>

                <div className="mb-3">
                    <label className="block mb-1 text-lg font-medium ">Stock:</label>
                    <input
                        type="number"
                        placeholder="Ej: 20"
                        name="stock"
                        value={datosForm.stock}
                        onChange={manejarCambio}
                        className="hover:bg-(--color-fourth) p-2 border border-gray-500 rounded px-2 py-1 w-full"
                    />
                </div>

                <div className="mb-3 flex flex-col sm:flex-row sm:items-center gap-2">
                    <label className="block mb-1 text-lg font-medium shrink-0">Imagen: </label>
                    <input
                        type="file"
                        name="imagen"
                        onChange={manejarCambioImagen}
                        className="w-full cursor-pointer hover:text-(--color-light) text-sm sm:text-base"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600 w-full"
                >
                    Guardar Producto
                </button>
            </form>
        </div>
    );
}