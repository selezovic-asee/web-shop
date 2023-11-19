import useShoppingCart from "./useShoppingCart";

const useAuth = () => {
    const { profile, user } = useShoppingCart();
    return user && profile;
  };

  export default useAuth;

