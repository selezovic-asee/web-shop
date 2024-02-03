import { useContext } from "react";
import ShoppingCartContext from "../context/ShoppingCartContext";

//nepotreban wrapper sakriva korištenje contexta
//ako se već radi ovako nešto dodaš useShoppingCartContext da se zna da se koristi context
const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export default useShoppingCart;