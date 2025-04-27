import { pizzas } from "../../data/pizzas";
import CardPizza from "../CardPizza/CardPizza";

function Home() {
  return (
    <>
      <div className="contenedor-pizza">
        {pizzas.map((pizza) => (
          <CardPizza>
            desc={pizza.desc} 
            id={pizza.id} 
            img={pizza.img} 
            ingredients={pizza.ingredients} 
            name={pizza.name} 
            price={pizza.price}
          </CardPizza>
        ))}
      </div>
    </>
  );
}

export default Home;
