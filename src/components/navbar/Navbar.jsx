import { useContext } from "react";
import { useCart } from "../../Context/CartContext";
import { UserContext } from "../../Context/userContext";
import "./Navbar.css";
import Button from "react-bootstrap/Button";
import { formatPrice } from "../../utils/FormatPrice";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navbar() {
  const { total } = useCart();
  const { token, logout } = useContext(UserContext); 

  return (
    <BsNavbar expand="md" bg="dark" variant="dark" className="px-4 py-3">
      <Container fluid>
        <BsNavbar.Brand href="#">Pizzería Mamma Mía!</BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="basic-navbar-nav" />

        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2">
            <Link to="/">
              <Button variant="outline-light">🍕 Home</Button>
            </Link>

           
            {!token ? (
              <>
                <Link to="/login">
                  <Button variant="outline-light" className="me-2">
                    🔐 Login
                  </Button>
                </Link>
                <Link to="/registro">
                  <Button variant="outline-light" className="me-2">
                    📝 Register
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/profile">
                  <Button variant="outline-light" className="me-2">
                    🔓 Profile
                  </Button>
                </Link>
                <Button
                  variant="outline-light"
                  className="me-2"
                  onClick={logout}
                >
                  🔒 Logout
                </Button>
              </>
            )}
          </Nav>

          <div className="d-flex">
            <Link to="/cart">
              <Button variant="outline-primary w-100 p-2">
                🛒 Total: ${formatPrice(total)}
              </Button>
            </Link>
          </div>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;
