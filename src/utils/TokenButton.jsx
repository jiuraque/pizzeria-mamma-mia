import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";

function Token() {
  const [activo, setActivo] = useState(false);

  const handleClick = () => {
    setActivo(!activo);
  };

  const navigate = useNavigate();

  return (
    <>
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
            onClick={() => navigate('/Login')}
          >
            🔐 Login
          </Button>
          <Button
            variant="outline-light"
            className="me-2"
            onClick={() => navigate('/Registro')}
          >
            🔐 Register
          </Button>
        </>
      )}
    </div>
    </>
  );
}

export default Token;
