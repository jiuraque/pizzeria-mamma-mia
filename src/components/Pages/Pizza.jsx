import { useState, useEffect } from "react";
import CardPizza from '../CardPizza/CardPizza';
import { useParams } from "react-router-dom";


function Pizza() {
  const { pizzaId } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/pizzas/${pizzaId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPizza(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [pizzaId]);

  if (loading) {
    return <p>Cargando pizza...</p>;
  }

  if (error) {
   return <p>Error: {error.message}</p>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      {pizza ? (
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
        <p>Pizza no encontrada.</p>
      )}
    </div>
  );
}



export default Pizza;