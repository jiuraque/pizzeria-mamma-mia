import "./Navbar.css";
import Token from '../../utils/TokenButton';
import Button from "react-bootstrap/Button";
import { formatPrice } from "../../utils/FormatPrice";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  const total = 19190;

  return (
    <>
    <BsNavbar expand="md" bg="dark" variant="dark" className="px-4 py-3">
      <Container fluid>
        <BsNavbar.Brand href="#">Pizzería Mamma Mía!</BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2">
          <Link to="/">
              <Button variant="outline-light">🍕 Home</Button>
            </Link>
            <Token />
          </Nav>
          <div className="d-flex">
          <Link to="/cart">
              <Button variant="outline-primary ">
                🛒 Total: ${formatPrice(total)}
              </Button>
            </Link>
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
    </>
  );
}

export default Navbar;

