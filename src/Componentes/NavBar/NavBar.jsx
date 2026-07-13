import { useState } from "react";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useCart } from "../../Context/CartContext";
import { useAuth } from '../../Context/AuthContext';


function NavBar() {

    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();
    const { user, logout } = useAuth();//agregamos los datos de autenticación
    const [menuAbierto, setMenuAbierto] = useState(false);

    const cerrarMenu = () => setMenuAbierto(false);

    return (
        <nav className="flex-1 flex justify-end lg:pr-20 relative">

            {/* Botón hamburguesa, solo visible en mobile/tablet */}
            <button
                className="lg:hidden text-3xl cursor-pointer p-1"
                onClick={() => setMenuAbierto(!menuAbierto)}
                aria-label="Abrir menú"
            >
                {menuAbierto ? <MdClose /> : <MdMenu />}
            </button>

            {/* Menú */}
            <ul
                className={`
                    flex text-lg gap-4 lg:gap-10
                    ${menuAbierto ? "flex" : "hidden"} lg:flex
                    flex-col lg:flex-row
                    items-start lg:items-end
                    absolute lg:static top-full right-0 mt-2 lg:mt-0
                    bg-(--color-fifth) lg:bg-transparent
                    p-4 lg:p-0
                    rounded-lg lg:rounded-none
                    shadow-lg lg:shadow-none
                    w-56 lg:w-auto
                    z-50
                `}
            >

                {user?.rol === 'admin' && (
                    <li className="hover:text-(--color-primary)" onClick={cerrarMenu}><Link to="/GestionCupones">CUPONES</Link></li>
                )}

                <li className="hover:text-(--color-primary)" onClick={cerrarMenu}><Link to="/ProduBD">PRODUCTOS</Link></li>

                <li className="hover:text-(--color-fourth)" onClick={cerrarMenu}><Link to="/carrito" className="flex items-center"><MdOutlineShoppingCart size={30} />{totalItems > 0 && <span
                    className="bg-[#9e8477] rounded-full text-black px-2">{totalItems}</span>}</Link></li>
                {user ? (
                    <>{/* Mostrar Gestion SOLO si el usuario es admin */}

                        {user.rol === 'admin' && (<li className="hover:text-(--color-primary)" onClick={cerrarMenu}><Link to="/GestionProductos">GESTION</Link></li>)}

                        <li className="text-sm lg:text-base">Hola, {user.email}</li>
                        <li>
                            <button
                                className="hover:text-(--color-primary) cursor-pointer"
                                onClick={() => { logout(); cerrarMenu(); }}>Cerrar Sesión</button>
                        </li>
                    </>
                ) : (
                    <li className="hover:text-(--color-primary)" onClick={cerrarMenu}><Link to="/login">LOGIN</Link></li>
                )}
            </ul>
        </nav>
    )
};
export default NavBar