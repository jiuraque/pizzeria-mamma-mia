import { pizzas } from "../../data/pizzas";
import CardPizza from "../CardPizza/CardPizza";

function Home() {
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
