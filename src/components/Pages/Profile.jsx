import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const navigate = useNavigate();

  const emailUsuario = "usuario@ejemplo.com";

  const cerrarSesion = () => {
    alert("Sesión cerrada"); 
    navigate("/login"); 
  };

  return (
    <div className="container text-center mt-5">
      <h2>👤 Perfil del Usuario</h2>
      <p><strong>Email:</strong> {emailUsuario}</p>
      <Button variant="dark" onClick={cerrarSesion}>
        Cerrar sesión 🔒
      </Button>
    </div>
  );
};

export default Profile;
