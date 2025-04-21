import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (!email.trim() || !contraseña.trim()) {
      setErrorMessage("Todos los campos son obligatorios");
      return;
    }

    if (contraseña.length < 6) {
      setErrorMessage("La contraseña debe tener al menos 6 caracteres");
    } else {
      setErrorMessage("");
    }

    if (contraseña >= 123456) {
      alert("¡Bienvenido!");
    } else {
      alert("Error: Los datos son incorrectos");
    }
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <h1>Login</h1>
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
        <button type="submit" className="btn btn-dark">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Login;
