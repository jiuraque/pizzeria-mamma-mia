import { useCart } from "../../Context/CartContext";
import { formatPrice } from "../../utils/FormatPrice";
import "../Cart/Cart.css";

const Cart = () => {
  const { cart, increase, decrease, total } = useCart(); 

  return (
    <div className="cart">
      <h2>🛒 Carrito</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <img src={pizza.img} alt={pizza.name} width="80" />
            <div>
              <h4>{pizza.name}</h4>
              <p>Precio: ${formatPrice(pizza.price)}</p>
              <p>Cantidad: {pizza.count}</p>
              <button onClick={() => increase(pizza.id)}>➕</button>
              <button onClick={() => decrease(pizza.id)}>➖</button>
            </div>
          </div>
        ))
      )}

      <h3>Total: ${formatPrice(total)}</h3>
      <button className="btn btn-dark">Pagar</button>
    </div>
  );
};

export default Cart;
