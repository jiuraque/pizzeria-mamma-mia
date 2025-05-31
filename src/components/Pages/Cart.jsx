import { useContext, useState } from "react";
import { UserContext } from "../../Context/userContext";
import { useCart } from "../../Context/CartContext";
import { formatPrice } from "../../utils/FormatPrice";
import "../Cart/Cart.css";

const Cart = () => {
  const { cart, increase, decrease, total } = useCart();
  const { token } = useContext(UserContext);
  const [mensaje, setMensaje] = useState("");

  const pagar = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      const data = await res.json();
      setMensaje("✅ ¡Compra realizada con éxito!");
    } catch (err) {
      setMensaje("❌ Error al realizar la compra");
    }
  };

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

      <button className="btn btn-dark mt-2" onClick={pagar} disabled={!token || cart.length === 0}>
        {token ? "Pagar" : "Inicia sesión para pagar"}
      </button>

      {mensaje && <p className="mt-2 mensaje">{mensaje}</p>}
    </div>
  );
};

export default Cart;
