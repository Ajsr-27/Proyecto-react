import Header from "./Header";
import Footer from "./Footer";
import ItemListContainer from "../Items/ItemListContainer";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main className="min-h-screen flex items-center justify-center text-2xl text-(--color-dark)">
                {children}
                <ItemListContainer />
            </main>
            <Footer />
        </div>
    );
}
export default Layout;
