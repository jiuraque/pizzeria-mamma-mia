import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/userContext";
import "../Registro/Registro.css";

const Registro = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validarDatos = async (e) => {
    e.preventDefault();

    if (!email.trim() || !contraseña.trim() || !confirmarContraseña.trim()) {
      setErrorMessage("Todos los campos son obligatorios");
      return;
    }

    if (contraseña.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (contraseña !== confirmarContraseña) {
      setErrorMessage("Las contraseñas no coinciden");
      return;
    }

    setErrorMessage("");

   
    const resultado = await register({ email, password: contraseña });

    if (resultado.token) {
      navigate("/profile"); 
    } else {
      setErrorMessage(resultado.message || "Error al registrar usuario");
    }
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <h1>Registro</h1>

        <div className="form-group">
          <label>Ingresa tu Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Ingresa tu Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Confirma tu Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={confirmarContraseña}
            onChange={(e) => setConfirmarContraseña(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Registro;

