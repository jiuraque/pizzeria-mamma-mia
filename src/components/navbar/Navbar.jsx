import "./Navbar.css";
import Token from "../../utils/token";
import Button from "react-bootstrap/Button";
import { formatPrice } from "../../utils/FormatPrice";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";

function Navbar() {
  const total = 25000;

  return (
    <>
    <BsNavbar expand="md" bg="dark" variant="dark" className="px-4 py-3">
      <Container fluid>
        <BsNavbar.Brand href="#">Pizzería Mamma Mía!</BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2">
            <Button variant="outline-light">🍕 Home</Button>
            <Token />
          </Nav>
          <div className="d-flex">
            <Button variant="outline-primary">
              🛒 Total: ${formatPrice(total)}
            </Button>
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
    </>
  );
}

export default Navbar;

