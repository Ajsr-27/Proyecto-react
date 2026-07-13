import React from "react";
import { useCart } from "../../Context/CartContext";
import { capitalizarPrimeraLetra } from '../Capitalice/Formato';

const Cart = () => {
  const { cart, clearCart, getCartTotal, removeOneFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">El carrito está vacío</h1>
        <p className="text-center mt-5 text-sm sm:text-base">Agrega productos para continuar la compra.</p>
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-5">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">Carrito de Compras</h1>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 p-2 sm:p-4">
        {cart.map(item => (
          <div
            key={item.id}
            className="border-white text-left w-full max-w-xs sm:w-64 sm:max-w-none border-2 rounded-lg p-3 sm:p-4 flex flex-col items-center gap-2"
          >
            <img
              className="object-contain h-40 sm:h-60 w-32 sm:w-40"
              src={item.imagen}
              alt={item.nombre}
            />

            <h3 className="text-lg sm:text-2xl font-semibold text-center">{capitalizarPrimeraLetra(item.nombre)}</h3>
            <p className="mb-1 text-base sm:text-xl">Precio: ${item.precio}</p>
            <p className="text-base sm:text-xl">Cantidad: {item.quantity}</p>
            <p className="mb-4 text-base sm:text-xl">Subtotal: ${item.precio * item.quantity}</p>

            <button
              className="text-center text-base sm:text-lg font-medium rounded-lg p-1 bg-[#f8af99] text-black hover:bg-red-700 transition-colors px-4"
              onClick={() => removeOneFromCart(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <hr className="my-5" />
      <h3 className="text-xl sm:text-2xl font-bold text-center px-2">Total a pagar: ${getCartTotal()}</h3>

      <div className="flex justify-center mt-4">
        <button
          className="text-center text-base sm:text-lg font-medium rounded-lg p-2 bg-[#f8af99] text-black hover:bg-red-700 transition-colors px-6"
          onClick={clearCart}
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;