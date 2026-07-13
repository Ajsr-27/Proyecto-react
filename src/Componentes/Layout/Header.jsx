import NavBar from "../NavBar/NavBar";

function Header() {
    return (
        <header className="bg-(--color-fifth) p-3 sm:p-4 flex items-center justify-between gap-2">
            <div>
                <img 
                className="h-14 w-auto sm:h-20 sm:w-56 md:h-25 md:w-70 object-contain "
                src="Neko_logo.png" 
                alt="Neko Store Logo" />
            </div>
            
            < NavBar />
        </header>
    );
};
export default Header;