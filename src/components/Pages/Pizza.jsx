import { useState, useEffect } from "react";
import CardPizza from '../CardPizza/CardPizza';

 function Pizza() {
  const [pizza, setPizza] = useState([]);

  const consulApi = async () => {
    const url = "http://localhost:5000/api/pizzas/p001";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPizza(data)
  };

  useEffect(() => {
    consulApi();
    }, []);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      {pizza.id ? (
        <CardPizza
          key={pizza.id}
          id={pizza.id}
          name={pizza.name}
          price={pizza.price}
          img={pizza.img}
          ingredients={pizza.ingredients}
          desc={pizza.desc}
        />
      ) : (
        <p>Cargando Pizza...</p>
      )}
    </div>
  );
}






export default Pizza;