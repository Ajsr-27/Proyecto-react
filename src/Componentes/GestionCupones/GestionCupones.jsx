import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/Config';

function GestionCupones() {

    const [cupones, setCupones] = useState([]);
    const [codigo, setCodigo] = useState('');
    const [descuento, setDescuento] = useState('');

    // Cargar cupones
    const obtenerCupones = async () => {
        try {
            const respuesta = await getDocs(collection(db, "cupones"));

            const lista = respuesta.docs.map((docItem) => ({
                id: docItem.id,
                ...docItem.data()
            }));

            setCupones(lista);

        } catch (error) {
            console.error("Error al obtener los cupones:", error);
            alert("Ocurrió un error al cargar los cupones.");
        }
    };

    useEffect(() => {
        obtenerCupones();
    }, []);

    // Crear cupón
    const crearCupon = async (e) => {
        e.preventDefault();

        if (!codigo || !descuento) return;

        try {
            await addDoc(collection(db, "cupones"), {
                codigo: codigo,
                descuento: Number(descuento)
            });

            setCodigo('');
            setDescuento('');

            obtenerCupones(); // refresca la lista

        } catch (error) {
            console.error("Error al crear el cupón:", error);
            alert("Ocurrió un error al crear el cupón.");
        }
    };

    // Eliminar cupón
    const eliminarCupon = async (id) => {
        try {
            await deleteDoc(doc(db, "cupones", id));
            obtenerCupones(); // refresca la lista

        } catch (error) {
            console.error("Error al eliminar el cupón:", error);
            alert("Ocurrió un error al eliminar el cupón.");
        }
    };

    return (
        <div className="p-3 sm:p-5 min-h-full">

            <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">Administración de Cupones</h2>

            <form onSubmit={crearCupon} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 mb-3">

                <input
                    className="text-sm font-black text-gray-900 sm:mr-2 mb-0 sm:mb-3 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-white w-full sm:w-auto"
                    type="text"
                    placeholder="Código"
                    required
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                />

                <input
                    className="text-sm font-black text-gray-900 sm:mr-4 w-full sm:w-30 mb-0 sm:mb-3 border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-white"
                    type="number"
                    placeholder="Descuento"
                    min="1"
                    max="100"
                    required
                    value={descuento}
                    onChange={(e) => setDescuento(e.target.value)}
                />

                <button 
                    className="text-center text-base sm:text-lg font-medium rounded-lg p-1 bg-[#c7f899] text-black hover:bg-[#a8d57a] transition-colors w-full sm:w-auto"
                    type="submit">
                    Crear Cupón
                </button>

            </form>

            <hr />

            <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">Listado de Cupones</h3>

            {
                cupones.map((cupon) => (

                    <div
                        key={cupon.id}
                        className="border border-black rounded-lg p-2 mb-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0"
                    >
                        <p className="text-sm sm:text-base">
                            <strong>Código:</strong> {cupon.codigo}
                        </p>

                        <p className="text-sm sm:text-base">
                            <strong>Descuento:</strong> {cupon.descuento}%
                        </p>

                        <button
                            className='text-center text-base sm:text-lg cursor-pointer font-medium rounded-lg p-1 bg-[#f8af99] text-black hover:bg-red-700 w-full sm:w-auto'
                            onClick={() => eliminarCupon(cupon.id)}
                        >
                            Eliminar
                        </button>

                    </div>

                ))
            }

        </div>
    );
}

export default GestionCupones;