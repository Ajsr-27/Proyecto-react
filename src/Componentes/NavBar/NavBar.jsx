import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useCart } from "../../Context/CartContext";

function NavBar() {

    const {getCartQuantity} = useCart();
    const totalItems = getCartQuantity();

    return (
        <nav className="flex pr-20">
            <ul className="flex items-end justify-ceneter gap-10 text-lg ">
                <li className="hover:text-(--color-primary)"><Link to="/">INICIO</Link></li>
                <li className="hover:text-(--color-primary)"><Link to="/productos">DESTACADOS</Link></li>
                <li className="hover:text-(--color-primary)"><Link to="/produBD">PRODUCTOS BD</Link></li>
                <li className="hover:text-(--color-primary)"><Link to="/GestionProductos">GESTION</Link></li>
                <li className="hover:text-(--color-primary)"><Link to="/login">LOGIN</Link></li>
                <li className="hover:text-(--color-fourth)"><Link to="/carrito" className="flex items-center "><MdOutlineShoppingCart size={30} />{totalItems > 0 && <span
                className="bg-[#9e8477] rounded-full text-black px-2">{totalItems}</span>}</Link></li>
            </ul>
        </nav> 
    )
}
export default NavBar