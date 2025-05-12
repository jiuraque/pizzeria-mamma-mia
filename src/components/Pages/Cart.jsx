import { useEffect, useState } from "react";
import { pizzaCart as initialCart } from "../../data/pizzas";
import { formatPrice } from "../../utils/FormatPrice";
import "../Cart/Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  const totales = cart.reduce(
    (suma, pizza) => suma + pizza.price * pizza.count,
    0
  );

  useEffect(() => {
    localStorage.setItem("cartTotal", totales);
  }, [totales]);

  const aumentar = (id) => {
    const nuevoCarrito = cart.map((pizza) => {
      if (pizza.id === id) {
        return { ...pizza, count: pizza.count + 1 };
      }
      return pizza;
    });
    setCart(nuevoCarrito);
  };

  const disminuir = (id) => {
    const nuevoCarrito = cart
      .map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, count: pizza.count - 1 };
        }
        return pizza;
      })
      .filter((pizza) => pizza.count > 0);

    setCart(nuevoCarrito);
  };

  const total = cart.reduce(
    (suma, pizza) => suma + pizza.price * pizza.count,
    0
  );

  return (
    <div className="cart">
      <h2>🛒 Carrito</h2>

      {cart.map((pizza) => (
        <div key={pizza.id} className="cart-item">
          <img src={pizza.img} alt={pizza.name} width="80" />
          <div>
            <h4>{pizza.name}</h4>
            <p>Precio: ${formatPrice(pizza.price)}</p>
            <p>Cantidad: {pizza.count}</p>
            <button onClick={() => aumentar(pizza.id)}>➕</button>
            <button onClick={() => disminuir(pizza.id)}>➖</button>
          </div>
        </div>
      ))}

      <h3>Total: ${formatPrice(totales)}</h3>
      <button className="btn btn-dark">Pagar</button>
    </div>
  );
};

export default Cart;
