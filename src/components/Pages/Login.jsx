import "../Login/Login.css";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(form);
    if (result.token) {
      navigate("/profile");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="text-danger">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

