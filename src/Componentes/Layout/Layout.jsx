import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "../Items/ItemListContainer";
import FormularioContenedor from "../Formulario/FormularioContenedor";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main className="min-h-screen p-5 text-2xl text-(--color-dark)">
                    {children}
                    <ItemListContainer Mensaje="Nuestros Productos Destacados" />
                    <FormularioContenedor />
            </main>
            <Footer />
        </div>
    );
}
export default Layout;
