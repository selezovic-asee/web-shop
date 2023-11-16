import { ReactNode, useEffect, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import useContextValues from "../hooks/useContextValues";
import useProducts from "../hooks/useProducts";
import ShoppingCartContext from "./ShoppingCartContext";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";

interface Props {
  children: ReactNode;
}

const ShoppingCartProvider = ({ children }: Props) => {
  const { data, error, isLoading } = useProducts();

  const [user, setUser] = useState<any>([]);
  const [profile, setProfile] = useState<any>({
    name: "",
    email: "",
    picture: "",
  });

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => setProfile(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

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
        login,
        logOut,
        profile,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
