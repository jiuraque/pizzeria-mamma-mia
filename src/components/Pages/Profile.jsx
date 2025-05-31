import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const { token, email, logout, getProfile } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      getProfile();
    }
  }, [token]);

  return (
    <div className="container text-center mt-5">
      <h2>👤 Perfil del Usuario</h2>
      <p><strong>Email:</strong> {email}</p>
      <Button variant="dark" onClick={logout}>
        Cerrar sesión 🔒
      </Button>
    </div>
  );
};

export default Profile;

