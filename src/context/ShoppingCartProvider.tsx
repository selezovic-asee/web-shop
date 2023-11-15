import { ReactNode } from "react";
import ShoppingCart from "../components/ShoppingCart";
import useContextValues from "../hooks/useContextValues";
import useProducts from "../hooks/useProducts";
import ShoppingCartContext from "./ShoppingCartContext";

interface Props {
  children: ReactNode;
}

const ShoppingCartProvider = ({ children }: Props) => {
  const { data, error, isLoading } = useProducts();

  const {
    cartItems,
    cartQuantity,
    closeCart,
    decreaseCartQuantity,
    getItemQuantity,
    increaseCartQuantity,
    openCart,
    removeFromCart,
    isOpen,
  } = useContextValues();

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
        data,
        error,
        isLoading,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
