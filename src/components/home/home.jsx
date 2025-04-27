import { pizzas } from "../../data/pizzas";
import CardPizza from "../CardPizza/CardPizza";

function Home() {
  return (
    <div className="contenedor-pizza">
      {pizzas.map((pizza, index) => (
        <CardPizza
          key={index}
          img={pizza.imagen}
          ingredients={pizza.ingredients}
          name={pizza.nombre}
          price={pizza.precio}
        />
      ))}
    </div>
  );
}

export default Home;
