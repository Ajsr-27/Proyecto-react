import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-(--color-fifth) p-4 sm:p-6 flex flex-col gap-6">

            {/* Cards de miembros */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-around gap-4 sm:gap-5">

                {/* Card CEO */}
                <div className="flex items-center gap-3 bg-(--color-primary) p-3 rounded-lg w-full sm:w-auto">
                    <img
                        className="h-12 w-12 object-cover rounded-2xl shrink-0"
                        src="./Equipo/ceo.png"
                        alt="CEO Miembro del equipo"
                    />
                    <div className="flex flex-col">
                        <strong>JOHNLEN CORREA</strong>
                        <p className="text-sm">CEO</p>
                    </div>
                </div>

                {/* Card CFO */}
                <div className="flex items-center gap-3 bg-(--color-primary) p-3 rounded-lg w-full sm:w-auto">
                    <img
                        className="h-12 w-12 object-cover rounded-2xl shrink-0"
                        src="./Equipo/cfo.png"
                        alt="CFO Miembro del equipo"
                    />
                    <div className="flex flex-col">
                        <strong>LUIS RODRIGUEZ</strong>
                        <p className="text-sm">CFO</p>
                    </div>
                </div>

                {/* Card CTO */}
                <div className="flex items-center gap-3 bg-(--color-primary) p-3 rounded-lg w-full sm:w-auto">
                    <img
                        className="h-12 w-12 object-cover shrink-0 rounded-2xl"
                        src="./Equipo/cto.png"
                        alt="CTO Miembro del equipo"
                    />
                    <div className="flex flex-col">
                        <strong>AUGUSTO SANCHEZ</strong>
                        <p className="text-sm">CTO</p>
                    </div>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row items-center justify-around gap-8 lg:gap-4 relative">
                <nav>
                    <ul className="flex flex-col gap-3 sm:gap-6 text-base sm:text-lg text-center">
                        <li className="hover:text-(--color-primary)"><Link to="/ProduBD">PRODUCTOS</Link></li>
                        <li className="hover:text-(--color-primary)"><Link to="/carrito">CARRITO</Link></li>
                        <li className="hover:text-(--color-primary)"><Link to="/Login">LOGIN</Link></li>
                    </ul>
                </nav>
                <div className="flex flex-col gap-4 justify-center items-center">
                    <strong className="text-base sm:text-xl text-center px-2 lg:absolute lg:top-0">SÍGUENOS EN NUESTRAS REDES SOCIALES</strong>
                    <div className="flex gap-3">
                        <FaFacebook className="size-8 sm:size-10" />
                        <FaInstagram className="size-8 sm:size-10" />
                        <IoMdMail className="size-8 sm:size-10" />
                        <FaTiktok className="size-7 sm:size-9" />
                    </div>
                </div>
                <img className="size-32 sm:size-40 lg:size-50"
                    src="Neko_logo.png"
                    alt="Logo de la empresa" />
            </div>

            {/* Copyright */}
            <p className="text-xs sm:text-sm text-center">Copyright 2026 - Todos los derechos reservados</p>

        </footer>
    )
}

export default Footer