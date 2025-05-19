import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); //

  const addToCart = (pizza) => {
    const exists = cart.find((p) => p.id === pizza.id);

    if (exists) {
      setCart(
        cart.map((p) => (p.id === pizza.id ? { ...p, count: p.count + 1 } : p))
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(cart.map((p) => (p.id === id ? { ...p, count: p.count + 1 } : p)));
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((p) => (p.id === id ? { ...p, count: p.count - 1 } : p))
        .filter((p) => p.count > 0)
    );
  };

  const total = cart.reduce((sum, p) => sum + p.price * p.count, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increase, decrease, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
