import { ReactNode } from "react";
import ShoppingCart from "../components/ShoppingCart";
import useContextValues from "../hooks/useContextValues";
import useProducts from "../hooks/useProducts";
import useUserData from "../hooks/useUserData";
import ShoppingCartContext from "./ShoppingCartContext";

interface Props {
  children: ReactNode;
}

const ShoppingCartProvider = ({ children }: Props) => {
  const { data, error, isLoading } = useProducts();
  const { login, logOut, profile, user } = useUserData();

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
    inputValue,
    setInputValue,
    categoryProduct,
    setCategoryProduct,
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
        login,
        logOut,
        profile,
        user,
        inputValue,
        setInputValue,
        categoryProduct,
        setCategoryProduct,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
