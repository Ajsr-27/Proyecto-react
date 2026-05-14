import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'; // Importamos Outlet
// Todo lo que pongamos dentro de <Layout> en App.jsx será el "children".
function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};
export default Layout;