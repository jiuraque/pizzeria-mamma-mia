import { useState } from "react";
import { pizzaCart as initialCart } from "../../data/pizzas";
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const aumentar = (id) => {
    setCart(cart.map(p =>
      p.id === id ? { ...p, count: p.count + 1 } : p
    ));
  };

  const disminuir = (id) => {
    setCart(cart
      .map(p => p.id === id ? { ...p, count: p.count - 1 } : p)
      .filter(p => p.count > 0)
    );
  };

  const total = cart.reduce((acc, p) => acc + p.price * p.count, 0);

  return (
    <div className="cart">
      <h2>🛒 Carrito</h2>
      {cart.map((pizza) => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.img} alt={pizza.name} width="80" />
          <div>
            <h4>{pizza.name}</h4>
            <p>Precio: ${pizza.price.toLocaleString()}</p>
            <p>Cantidad: {pizza.count}</p>
            <button onClick={() => aumentar(pizza.id)}>➕</button>
            <button onClick={() => disminuir(pizza.id)}>➖</button>
          </div>
        </div>
      ))}
      <h3>Total: ${total.toLocaleString()}</h3>
      <button className="btn btn-dark">Pagar</button>
    </div>
  );
};

export default Cart;
