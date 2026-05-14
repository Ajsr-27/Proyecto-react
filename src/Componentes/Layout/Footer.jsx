import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-(--color-fifth) p-6 flex flex-col gap-6">

            {/* Cards de miembros */}
            <div className="flex items-start justify-around gap-5 ">

                {/* Card CEO */}
                <div className="flex items-center gap-3 bg-(--color-primary) p-3 rounded-lg">
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
                <div className="flex items-center gap-3 bg-(--color-primary) p-3 rounded-lg">
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
                <div className="flex items-center gap-3 bg-(--color-primary) p-3 rounded-lg">
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

            <div className="flex flex-row items-center justify-around relative">
                <nav>
                    <ul className="flex flex-col gap-6 text-lg">
                        <li className="hover:text-(--color-primary)"><a href="">INICIO</a></li>
                        <li className="hover:text-(--color-primary)"><a href="">DESTACADOS</a></li>
                        <li className="hover:text-(--color-primary)"><a href="">CONTACTO</a></li>
                    </ul>
                </nav>
                <div className="flex flex-col gap-4 justify-center items-center ">
                    <strong className="text-xl absolute top-0 " >SÍGUENOS EN NUESTRAS REDES SOCIALES</strong>
                    <div className="flex gap-3 ">
                        <FaFacebook className="size-10" />
                        <FaInstagram className="size-10" />
                        <IoMdMail className="size-10" />
                        <FaTiktok className="size-9" />
                    </div>
                </div>
                <img className="size-50"
                    src="Neko_logo.png"
                    alt="Logo de la empresa" />
            </div>

            {/* Copyright */}
            <p className="text-sm text-center">Copyright 2026 - Todos los derechos reservados</p>

        </footer>
    )
}

export default Footer