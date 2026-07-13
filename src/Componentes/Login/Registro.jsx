import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Registro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reseteamos cualquier error previo
        try {
            // Intentamos crear el nuevo usuario en Firebase
            await createUserWithEmailAndPassword(auth, email, password);
            // Si la creación es exitosa, lo redirigimos al inicio
            // Firebase ya gestiona el estado de sesión automáticamente
            navigate('/');
        } catch (error) {
            // Aquí es donde manejamos el caso específico que nos interesa
            if (error.code === 'auth/email-already-in-use') {
                // Usamos window.confirm para hacer la pregunta al usuario
                const quiereLoguearse = window.confirm('Este correo electrónico ya está registrado. ¿Desea intentar iniciar sesión?');
                if (quiereLoguearse) {
                    // Si el usuario confirma, lo redirigimos a la página de login
                    navigate('/login');
                } else {
                    // Si el usuario cancela, lo redirigimos a la página de inicio
                    navigate('/');
                }
            } else {

                // Para cualquier otro error (contraseña débil, email inválido, etc.),
                // mostramos un mensaje genérico.
                setError('Ocurrió un error al registrar el usuario. Verifique los datos e intente nuevamente.');
                console.error("Error en el registro:", error.message);
            }
        }
    }; 

        return (
            <div className="min-h-screen flex items-center justify-center px-2 sm:px-4">
                <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl flex overflow-hidden m-2 sm:m-4">

                    {/* Panel izquierdo con degradé */}
                    <div className="hidden md:flex flex-col justify-between w-1/2 p-8 bg-linear-to-br from-(--color-primary) via-(--color-fourth) to-(--color-fifth) rounded-2xl m-3">
                        <span className="text-transparent text-4xl font-bold">*</span>
                        <div className="text-taupe-900">
                            <p className="text-2xl mb-2">Podés fácilmente</p>
                            <h2 className="text-2xl font-bold leading-snug">
                                Acceder a tu tienda personal para gestionar tus compras
                            </h2>
                        </div>
                    </div>

                    {/* Panel derecho con el formulario */}
                    <div className="w-full md:w-1/2 p-5 sm:p-8 md:p-12 flex flex-col justify-center">
                        <h1 className="text-xl sm:text-2xl font-bold mb-2">Bienvenido a Neko Store</h1>
                        <p className="text-gray-500 text-sm mb-6">
                            Accedé a tus pedidos, favoritos y perfil en un solo lugar.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Nombre y apellido</label>
                                <input
                                    type="text"
                                    placeholder="Juan Pérez"
                                    className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Correo electrónico</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="tuemail@ejemplo.com"
                                    required
                                    className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Numero de teléfono</label>
                                    <input
                                        type="text"
                                        placeholder="123-456-7890"
                                        required
                                        className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-gray-700">Contraseña</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••••"
                                    className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#ecd1b8] hover:bg-purple-700 text-black font-medium rounded-lg py-2.5 mt-2 transition-colors">
                                Registrate
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    export default Registro;