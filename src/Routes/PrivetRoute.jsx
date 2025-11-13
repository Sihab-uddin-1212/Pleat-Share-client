import { use } from "react";
 
import { Navigate } from "react-router";
import { AuthContext } from "../Auth/AuthContext";
import { Loader } from "lucide-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return  <Loader></Loader>
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivateRoute;