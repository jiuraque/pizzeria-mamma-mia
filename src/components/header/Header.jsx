import React from "react";
import headerImg from "../../assets/imgs/Header.jpg"

function Header() {
  return (
    <>
      <header
        style={{
          height: "300px",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1>¡Pizzería Mamma Mia!</h1>
        <h3>¡Tenemos las mejores pizzas que podrás encontrar!</h3>
        <br />
      </header>
    </>
  );
}

export default Header;
