import NavBar from "../NavBar/NavBar";

function Header() {
    return (
        <header className="bg-(--color-fifth) p-4 flex items-center justify-between">
            <div>
                <img 
                className="h-25 w-70 object-contain cursor-pointer"
                src="Neko_logo.png" 
                alt="Neko Store Logo" />
            </div>
            
            < NavBar />
        </header>
    );
};
export default Header;