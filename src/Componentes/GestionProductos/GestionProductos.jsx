import React, { useState, useEffect } from 'react';
import { db } from '../../Firebase/Config';
import { FormularioProducto } from '../Formulario/FormularioProducto';
import {
  collection,
  getDocs,
  deleteDoc,
  addDoc,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { capitalizarPrimeraLetra } from '../Capitalice/Formato';

const datosFormIniciales = {
  id: '',
  nombre: '',
  precio: '',
  stock: '',
};

const GestionProductos = () => {
  const [productos, setProductos] = useState([]);
  const [datosForm, setDatosForm] = useState(datosFormIniciales);
  const [imagenFile, setImagenFile] = useState(null);
  const [docIdEditando, setDocIdEditando] = useState(null); // null = modo crear, string = modo editar

  // ----- READ -----
  const fetchProductos = async () => {
    const productosRef = collection(db, 'productos');
    const resp = await getDocs(productosRef);

    const listaProductos = resp.docs.map((doc) => ({
      ...doc.data(),
      docId: doc.id,
    }));

    listaProductos.sort((a, b) => Number(a.id) - Number(b.id));
    setProductos(listaProductos);
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  // ----- Manejo de inputs -----
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm((prev) => ({ ...prev, [name]: value }));
  };

  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  // ----- Subida a Imgbb -----
  const subirImagenAImgbb = async (archivo) => {
    const formData = new FormData();
    formData.append('image', archivo);

    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    const respuesta = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      { method: 'POST', body: formData }
    );

    const data = await respuesta.json();

    if (!data.success) {
      throw new Error('La subida de la imagen a Imgbb falló.');
    }

    return data.data.url;
  };

  // ----- CREATE / UPDATE (mismo submit, según el modo) -----
  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    // Validación de ID duplicado (solo aplica al crear un producto nuevo)
    if (!docIdEditando) {
      const idYaExiste = productos.some((p) => p.id === datosForm.id);
      if (idYaExiste) {
        alert(`Ya existe un producto con el ID ${datosForm.id}. Elegí otro.`);
        return;
      }
    }

    // En modo edición la imagen es opcional (se puede dejar la que ya tenía)
    if (!imagenFile && !docIdEditando) {
      alert('Por favor, seleccioná una imagen para el producto.');
      return;
    }

    try {
      let urlImagen = datosForm.imagen; // conserva la imagen actual si no se sube una nueva

      if (imagenFile) {
        urlImagen = await subirImagenAImgbb(imagenFile);
      }

      const productoCompleto = {
        ...datosForm,
        nombre: capitalizarPrimeraLetra(datosForm.nombre),
        imagen: urlImagen,
      };

      if (docIdEditando) {
        // UPDATE
        const docRef = doc(db, 'productos', docIdEditando);
        await updateDoc(docRef, productoCompleto);
        alert('¡Producto actualizado con éxito!');
      } else {
        // CREATE
        const productosCollection = collection(db, 'productos');
        await addDoc(productosCollection, productoCompleto);
        alert('¡Producto agregado con éxito!');
      }

      cancelarEdicion();
      fetchProductos(); // refresca la lista
    } catch (error) {
      console.error('Error en el proceso de envío:', error);
      alert('Hubo un error al guardar el producto. Por favor, intentá de nuevo.');
    }
  };

  // ----- Cargar datos de un producto en el form para editarlo -----
  const handleEditar = (producto) => {
    setDatosForm({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      stock: producto.stock,
      imagen: producto.imagen,
    });
    setDocIdEditando(producto.docId);
    setImagenFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelarEdicion = () => {
    setDatosForm(datosFormIniciales);
    setImagenFile(null);
    setDocIdEditando(null);
  };

  // ----- DELETE -----
  const handleDelete = async (docId) => {
    const confirmacion = window.confirm(
      '¿Está seguro de que desea eliminar este producto?'
    );
    if (confirmacion) {
      const docRef = doc(db, 'productos', docId);
      await deleteDoc(docRef);
      setProductos(productos.filter((prod) => prod.docId !== docId));
      alert('Producto eliminado.');
    }
  };

  return (
    <div>
      <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">Gestión de Productos</h2>

      <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-3 sm:px-0">
        <FormularioProducto
          datosForm={datosForm}
          manejarCambio={manejarCambio}
          manejarCambioImagen={manejarCambioImagen}
          manejarEnvio={manejarEnvio}
        />
        {docIdEditando && (
          <button className='text-center text-lg cursor-pointer font-medium rounded-lg p-1 mb-2 bg-[#f8af99] text-black mt-2 mr-3 hover:bg-red-700' onClick={cancelarEdicion}>
            Cancelar edición
          </button>
        )}

      </div>
      <hr />
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-center">Lista de Productos</h3>
      <ul className="flex flex-col gap-2 px-3 sm:px-0 max-w-4xl mx-auto">
        {productos.map((prod) => (
          <li key={prod.docId} className="border border-gray-700 p-2 gap-3 sm:gap-5 flex flex-col sm:flex-row items-start sm:items-center">
            <span className="text-sm sm:text-base wrap-break-words"> ID {prod.id} - {prod.nombre} - ${prod.precio}</span>

            <div className="flex flex-row sm:flex-col gap-2 sm:ml-auto w-full sm:w-auto">
              <button
                className="text-center text-base sm:text-lg rounded-lg cursor-pointer font-medium p-1 bg-[#d2e97d] text-black hover:bg-blue-700 flex-1 sm:flex-none"
                onClick={() => handleEditar(prod)}
              >
                Editar
              </button>
              <button
                className="text-center text-base sm:text-lg font-medium rounded-lg cursor-pointer p-1 bg-[#f8af99] text-black hover:bg-red-700 flex-1 sm:flex-none"
                onClick={() => handleDelete(prod.docId)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GestionProductos;