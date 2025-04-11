import { useState } from "react";
import Button from "react-bootstrap/Button";

function Token() {
  const [activo, setActivo] = useState(false);

  const handleClick = () => {
    setActivo(!activo);
  };

  return (
    <div>
      {activo ? (
        <>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={handleClick}
          >
            🔓 Profile
          </Button>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={handleClick}
          >
            🔒 Logout
          </Button>
        </>
      ) : (
        <>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={handleClick}
          >
            🔐 Login
          </Button>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={handleClick}
          >
            🔐 Register
          </Button>
        </>
      )}
    </div>
  );
}

export default Token;
