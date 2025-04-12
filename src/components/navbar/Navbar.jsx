import "./Navbar.css";
import Token from "../../utils/token";
import Button from "react-bootstrap/Button";
import { formatPrice } from "../../utils/FormatPrice";

function Navbar() {
  const total = 25000;
  return (
    <>
      <nav className="navbar">
        <div className="left">
          <h2>Pizzería Mamma Mía!</h2>
          <Button variant="outline-light">🍕 Home</Button>
          <Token />
        </div>
        <div className="right">
          <Button variant="outline-primary">🛒 Total: ${formatPrice(total)}</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
