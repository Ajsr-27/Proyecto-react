import React, { useState } from "react";
import { Link } from "react-router-dom";
import Registro from "./Registro";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Usuario logueado:", user);
                navigate('/'); 
            })

            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error en el login:", errorCode, errorMessage);
                alert("Error: credenciales incorrectas " + errorMessage);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl flex overflow-hidden m-4">

                {/* Panel izquierdo con degradé */}
                <div className="hidden md:flex flex-col justify-between w-1/2 p-8 bg-gradient-to-br from-(--color-primary) via-(--color-fourth) to-(--color-fifth) rounded-2xl m-3">
                    <span className="text-transparent text-4xl font-bold">*</span>
                    <div className="text-taupe-900">
                        <p className="text-2xl mb-2">Podés fácilmente</p>
                        <h2 className="text-2xl font-bold leading-snug">
                            Acceder a tu tienda personal para gestionar tus compras
                        </h2>
                    </div>
                </div>

                {/* Panel derecho con el formulario */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h1 className="text-2xl font-bold mb-2">Bienvenido a Neko Store</h1>
                    <p className="text-gray-500 text-sm mb-6">
                        Accedé a tus pedidos, favoritos y perfil en un solo lugar.
                    </p>

                    <form onSubmit={handleLogin} className="flex flex-col gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700">Correo electrónico</label>
                            <input
                                type="email"
                                placeholder="tuemail@ejemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">Contraseña</label>
                            <input
                                type="password"
                                placeholder="••••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-[#ecd1b8] hover:bg-purple-700 text-black font-medium rounded-lg py-2.5 mt-2 transition-colors"
                        >
                            Iniciar sesión
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500 mt-6">
                        ¿No tenés cuenta?{" "}
                        <Link to="/Registro" className="text-purple-600 font-medium hover:underline">
                            Registrate
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;