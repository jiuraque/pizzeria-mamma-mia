import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">404</h1>
      <p className="lead">Oops... la página que buscas no existe 🧐</p>
      <Button variant="dark" onClick={() => navigate("/")}>
        Volver al inicio
      </Button>
    </div>
  );
};

export default NotFound;
