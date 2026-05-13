function NavBar() {
    return (
        <nav className="flex pr-20">
            <ul className="flex items-end justify-ceneter gap-10 text-lg ">
                <li className="hover:text-(--color-primary)"><a href="">INICIO</a></li>
                <li className="hover:text-(--color-primary)"><a href="">PRODUCTOS</a></li>
                <li className="hover:text-(--color-primary)"><a href="">CONTACTO</a></li>
                <li className="hover:text-(--color-primary)"><a href="">INFORMACION</a></li>
            </ul>
        </nav>
    )
}
export default NavBar