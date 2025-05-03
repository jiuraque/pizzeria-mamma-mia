import React from "react";
import { formatPrice } from "../../utils/FormatPrice";
import "./CardPizza.css";


const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="card card-pizza shadow-sm">
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="pizza-info text-center">
          <h5 className="card-title">{name}</h5>

          <hr className="divider" />

          <p className="card-price">
            <strong>Precio:</strong> ${formatPrice(price)}
          </p>
       

        <hr className="divider" />

          <ul className="card-ingredients">
          🍕{ingredients.join(', ')}
          </ul>

          <hr className="divider" />

          <img src={img} className="card-img-top pizza-img" alt={name} />

          <hr className="divider" />

          <p className="card-desc">🍕{desc}</p>

        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-dark btn-sm fixed-btn">
            Ver más 👀
          </button>
          <button className="btn btn-dark btn-sm fixed-btn">Añadir 🛒</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CardPizza;
