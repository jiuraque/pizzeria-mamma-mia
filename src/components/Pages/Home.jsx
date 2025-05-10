import { useState, useEffect } from "react";
import CardPizza from "../CardPizza/CardPizza";

function Home() {
  const [pizzas, setPizzas] = useState([]);

  const consulApi = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setPizzas(data)
  };

  useEffect(() => {
    consulApi();
    }, []);

  return (
    <div className="contenedor-pizza">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          id={pizza.id}
          name={pizza.name}
          price={pizza.price}
          img={pizza.img}
          ingredients={pizza.ingredients}
          desc={pizza.desc}
        />
      ))}
    </div>
  );
}

export default Home;
