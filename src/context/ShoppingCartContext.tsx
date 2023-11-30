import React from "react";
import { CartItem } from "../hooks/useContextValues";
import { Product } from "../hooks/useProducts";

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
  user: any[];
  inputValue: string;
  setInputValue: React.Dispatch<string>;
}

const ShoppingCartContext = React.createContext<ShoppingCartContextType>(
  {} as ShoppingCartContextType
);

export default ShoppingCartContext;
