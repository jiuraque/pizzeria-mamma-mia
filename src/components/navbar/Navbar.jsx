import "./Navbar.css";
import Token from "../../utils/token";
import Button from "react-bootstrap/Button";

function Navbar() {
  let num = 25000;
  const total = num.toLocaleString();

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <h2>Pizzería Mamma Mía!</h2>
          <Button variant="outline-light">🍕 Home</Button>
          <Token />
        </div>
        <div className="right">
          <Button variant="outline-primary">🛒 Total: ${total}</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
