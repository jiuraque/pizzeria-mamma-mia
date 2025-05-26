import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../Context/userContext";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
