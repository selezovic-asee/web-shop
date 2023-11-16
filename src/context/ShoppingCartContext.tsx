import React from "react";
import { Product } from "../services/user-service";
import { CartItem } from "../hooks/useContextValues";

interface ShoppingCartContextType {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartQuantity: number;
  cartItems: CartItem[];
  data: Product[];
  error: string;
  isLoading: boolean;
  login: () => void;
  logOut: () => void;
  profile: any;
}

const ShoppingCartContext = React.createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType
);

export default ShoppingCartContext;
