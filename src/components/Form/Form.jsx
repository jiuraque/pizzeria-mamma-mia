import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const [error, setError] = useState(false);

  const validacion = (e) => {
    e.preventDefault();
  };

  if (!email.trim() || !contraseña.trim() || !confirmarContraseña.trim()) {
    setError(true);
    return;
  }
  setError(false);
  setEmail("");
  setContraseña("");
  setConfirmarContraseña("");

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>
        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setConfirmarContraseña(e.target.value)}
            value={confirmarContraseña}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default Form;
