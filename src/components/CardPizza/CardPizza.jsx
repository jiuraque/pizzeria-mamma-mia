import React, { useState } from "react";
import { formatPrice } from "../../utils/FormatPrice";
import "./CardPizza.css";


const CardPizza = ({ name, price, ingredients, img, desc }) => {
  const [expandir, setExpandir] = useState(false);

  return (
    <div className="card card-pizza shadow-sm d-flex flex-column">
    <img src={img} className="card-img-top pizza-img" alt={name} />
    
    <div className="card-body d-flex flex-column justify-content-between">
      <div className="pizza-info text-center">
        <h5 className="card-title">{name}</h5>
  
        <hr className="divider" />
  
        <p className="card-price">
          <strong>Precio:</strong> ${formatPrice(price)}
        </p>
  
        <hr className="divider" />
  
        <p className="card-ingredients">🍕 {ingredients.join(", ")}</p>
  
        <hr className="divider" />
  
        <p className={`card-desc ${expandir ? "expandida" : "reducida"}`}>🍕 {desc}</p>
        <button
            className="btn btn-sm text-decoration-none"
            onClick={() => setExpandir(!expandir)}
          >
            {expandir ? "▲" : "▼"}
          </button>
      </div>
  
      <div className="d-flex justify-content-between mt-3">
        <button className="btn btn-outline-dark btn-sm fixed-btn">
          Ver más 👀
        </button>
        <button className="btn btn-dark btn-sm fixed-btn">Añadir 🛒</button>
      </div>
    </div>
  </div>  
  );
};

export default CardPizza;
