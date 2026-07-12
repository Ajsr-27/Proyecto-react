import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase/Config';
import FormularioContenedor  from'../Formulario/FormularioContenedor';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const GestionProductos = () => {
    const [productos, setProductos] = useState([]);
    const estadoInicialForm = {
        nombre: "",
        precio: 0,
        stock: 0,
        imagen: ""
    };
    useEffect(() => {
        const fetchProductos = async () => {
            const productosRef = collection(db, "productos"); //Ajustar "productos" al nombre de tu colección
            const resp = await getDocs(productosRef);

            const listaProductos = resp.docs.map((doc) => ({
                ...doc.data(),
                docId: doc.id, // ID interno de Firestore (para key y borrado)
            }));

            // Ordenamos por el id manual que cargaste en el formulario
            listaProductos.sort((a, b) => Number(a.id) - Number(b.id));

            setProductos(listaProductos);
        };
        fetchProductos();
    }, []);
    const handleDelete = async (docId) => {
        const confirmacion = window.confirm("¿Está seguro de que desea eliminar este producto ? ");
        if (confirmacion) {
            const docRef = doc(db, "productos", docId);
            await deleteDoc(docRef);
            // Actualizamos el estado local para reflejar el cambio en la UI inmediatamente.
            setProductos(productos.filter(prod => prod.docId !== docId));
            alert("Producto eliminado.");
        }
    };

    return (

        <div>
            <h2>Gestión de Productos</h2>
            
            <FormularioContenedor datosForm={estadoInicialForm} />
            <hr />
            <h3>Lista de Productos</h3>
            <ul>
                {productos.map((prod) => (
                    <li key={prod.docId}>
                        ID {prod.id} - {prod.nombre} - ${prod.precio} - 
                        <button onClick={() => handleDelete(prod.docId)}> Eliminar </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default GestionProductos