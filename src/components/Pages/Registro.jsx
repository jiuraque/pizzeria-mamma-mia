import { useState } from "react";
import "../Registro/Registro.css";

const Registro = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const validarDatos = (e) => {
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
    alert("¡Formulario enviado correctamente!");
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
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Ingresa tu Contraseña: </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>
        <div className="form-group">
          <label>Confirma tu Contraseña:</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            value={confirmarContraseña}
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
