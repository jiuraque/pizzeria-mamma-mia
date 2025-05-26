import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/userContext";

const PublicRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  return token ? <Navigate to="/" /> : children;
};

export default PublicRoute;
