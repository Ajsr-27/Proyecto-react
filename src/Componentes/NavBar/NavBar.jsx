import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="flex pr-20">
            <ul className="flex items-end justify-ceneter gap-10 text-lg ">
                <li className="hover:text-(--color-primary)"><Link to="/">INICIO</Link></li>
                <li className="hover:text-(--color-primary)"><Link to="/productos">DESTACADOS</Link></li>
                <li className="hover:text-(--color-primary)"><Link to="/contacto">CONTACTO</Link></li>
                <li className="hover:text-(--color-primary)"><Link to="/carrito"><MdOutlineShoppingCart size={30} /></Link></li>
            </ul>
        </nav> 
    )
}
export default NavBar