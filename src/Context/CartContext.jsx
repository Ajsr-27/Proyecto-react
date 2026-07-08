import React, { useState, useContext, createContext } from 'react';

export const CartContext = createContext();

export const useCart = () => {

    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe ser usado dentro de un CartProvider');");
    }
    return context;
};

export const CartProvider = ({ children }) => {
     const [cart, setCart] = useState([]);

     const addToCart = (product, quantity) => {
        const itemInCart = cart.find((item) => item.id === product.id);
        if (itemInCart) {
            const updatedCart = cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            );
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity }]);
        }
    }; // Busca si el producto ya está en el carrito. Si está → suma la cantidad. Si no está → lo agrega como nuevo.

    const clearCart = () => {
        setCart([]);
    }; //Vacía el carrito

    const getCartQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }; // Recorre el carrito y suma todas las cantidades. Sirve para mostrar, por ejemplo, el numerito de productos en un ícono 🛒.

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
    }; // Recorre el carrito y suma el precio de cada producto multiplicado por su cantidad. Sirve para mostrar el total a pagar.

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, getCartQuantity, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};





