import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <main className="min-h-screen flex items-center justify-center text-2xl text-(--color-dark)">
                {children}
            </main>
            <Footer />
        </div>
    );
}
export default Layout;