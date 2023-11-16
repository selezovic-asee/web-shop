import { Navigate, Outlet } from "react-router-dom";
import useShoppingCart from "../hooks/useShoppingCart";
import LogIn from "../pages/LogIn";

const useAuth = () => {
  const { profile, user } = useShoppingCart();
  return user && profile;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
