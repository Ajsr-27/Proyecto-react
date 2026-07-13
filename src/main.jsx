import { BrowserRouter, HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { CartProvider } from './Context/CartContext.jsx';
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './Context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </HashRouter>
);

