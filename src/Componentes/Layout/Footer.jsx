
function Footer() {
    return (
        <footer className="bg-(--color-fifth) p-6 flex flex-col gap-6">
            
            {/* Cards de miembros */}
            <div className="flex items-start justify-around gap-5 ">
                
                {/* Card CEO */}
                <div className="flex items-center gap-3 bg-(--color-primary) p-3 rounded-lg">
                    <img
                        className="h-12 w-12 object-cover rounded-2xl shrink-0"
                        src="ceo.png"
                        alt="CEO Miembro del equipo"
                    />
                    <div className="flex flex-col">
                        <strong>JHONLEN CORREA</strong>
                        <p className="text-sm">CEO</p>
                    </div>
                </div>

                {/* Card CFO */}
                <div className="flex items-center gap-3 bg-(--color-primary) p-3 rounded-lg">
                    <img
                        className="h-12 w-12 object-cover rounded-2xl shrink-0"
                        src="cfo.png"
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
                        src="cto.png"
                        alt="CTO Miembro del equipo"
                    />
                    <div className="flex flex-col">
                        <strong>AUGUSTO SANCHEZ</strong>
                        <p className="text-sm">CTO</p>
                    </div>
                </div>

            </div>

            {/* Nav */}
            <nav>
                <ul className="flex flex-col gap-6 text-lg">
                    <li className="hover:text-(--color-primary)"><a href="">INICIO</a></li>
                    <li className="hover:text-(--color-primary)"><a href="">PRODUCTOS</a></li>
                    <li className="hover:text-(--color-primary)"><a href="">CONTACTO</a></li>
                    <li className="hover:text-(--color-primary)"><a href="">INFORMACION</a></li>
                </ul>
            </nav>

            {/* Copyright */}
            <p className="text-sm text-center">Copyright 2026 - Todos los derechos reservados</p>

        </footer>
    )
}

export default Footer