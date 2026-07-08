import React from "react";
import { useCart } from "../../Context/CartContext";

const Cart = () => {
  const { cart, clearCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-center mt-10">El carrito está vacío</h1>
        <p className="text-center mt-5">Agrega productos para continuar la compra.</p>
      </div>
    );
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Carrito de Compras</h1>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.nombre}</h4>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio unitario: ${item.precio}</p>
          <p>Subtotal: ${item.precio * item.quantity}</p>
        </div>))}
      <hr />
      <h3>Total a pagar: ${getCartTotal()}</h3>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
    );
};

export default Cart;