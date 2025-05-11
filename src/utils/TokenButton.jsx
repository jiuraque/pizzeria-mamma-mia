import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function TokenButton() {
  const [logueada, setLogueada] = useState(false);
  const navigate = useNavigate();

  const irA = (ruta) => {
    navigate(ruta);
  };

  const cerrarSesion = () => {
    setLogueada(false);
    navigate("/login");
  };

  return (
    <>
      {logueada ? (
        <>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={() => irA("/profile")}
          >
            🔓 Profile
          </Button>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={cerrarSesion}
          >
            🔒 Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={() => {
              setLogueada(true); 
              irA("/login");
            }}
          >
            🔐 Login
          </Button>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={() => irA("/Registro")}
          >
            🔐 Register
          </Button>
        </>
      )}
    </>
  );
}

export default TokenButton;

