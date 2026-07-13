import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'; // Importamos Outlet
// Todo lo que pongamos dentro de <Layout> en App.jsx será el "children".
function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};
export default Layout;