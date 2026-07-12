import React, { useState } from 'react';
import { FormularioProducto } from '../Formulario/FormularioProducto';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { capitalizarPrimeraLetra } from '../Capitalice/Formato';

const datosFormIniciales = {
  id: '',
  nombre: '',
  precio: '',
  stock: '',
};

export function FormularioContenedor() {
  const [datosForm, setDatosForm] = useState(datosFormIniciales);
  const [imagenFile, setImagenFile] = useState(null);

  // Maneja los inputs de texto/número (id, nombre, precio, stock)
  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm((prev) => ({ ...prev, [name]: value }));
  };

  // Maneja el input type="file" por separado (no usa value/onChange igual)
  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  // Sube el archivo a Imgbb y devuelve la URL pública de la imagen
  const subirImagenAImgbb = async (archivo) => {
    const formData = new FormData();
    formData.append('image', archivo);

    const apiKey = import.meta.env.VITE_IMGBB_API_KEY;
    const respuesta = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await respuesta.json();

    if (!data.success) {
      throw new Error('La subida de la imagen a Imgbb falló.');
    }

    return data.data.url; // URL pública de la imagen ya subida
  };

  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    if (!imagenFile) {
      alert('Por favor, seleccioná una imagen para el producto.');
      return;
    }

    try {
      // 1. Subimos la imagen primero y obtenemos su URL
      const urlImagen = await subirImagenAImgbb(imagenFile);

      // 2. Armamos el producto completo con la URL ya obtenida
      const productoCompleto = { ...datosForm,
        nombre: capitalizarPrimeraLetra(datosForm.nombre),
         imagen: urlImagen };

      console.log('Enviando producto a Firebase:', productoCompleto);

      const db = getFirestore();
      const productosCollection = collection(db, "productos");
      await addDoc(productosCollection, productoCompleto);

      // Producto guardado con éxito: reseteamos el formulario
      setDatosForm(datosFormIniciales);
      setImagenFile(null);
      alert("¡Producto agregado con éxito!");
    } catch (error) {
      console.error("Error en el proceso de envío:", error);
      alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
    }
  };

  return (
    <div className="flex flex-col items-center w-4xl m-auto">
      <FormularioProducto
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarCambioImagen={manejarCambioImagen}
        manejarEnvio={manejarEnvio}
      />
    </div>
  );
}

export default FormularioContenedor;