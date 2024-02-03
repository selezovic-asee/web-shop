import React from "react";
import { CartItem } from "../hooks/useContextValues";
import { Product } from "../hooks/useProducts";

//ovo je interface na type, nemoj dodavati suffix type praksa za typeove je samo da nazoveš kao ono što je dok je za interface
//da dodaš prefix "I"
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
  //ovdje editor radi probleme s "any". Istraži kako postaviti tsconfig.json da ti dozvoljava any
  profile: any;
  user: any[];
  inputValue: string;
  setInputValue: React.Dispatch<string>;
  categoryProduct: string;
  setCategoryProduct: React.Dispatch<string>;
  expanded: boolean;
  setExpanded: React.Dispatch<boolean>;
}

const ShoppingCartContext = React.createContext<ShoppingCartContextType>(

  //čemu force cast to bi on trebao znati. Davao ti je error zato što si stavio da su svi propertyi required
  //a ti zapravo želiš da si optional možeš ručno staviti upitinike ili možeš primjeniti partial koje će učiniti sve optional sa Partial<ShoppingCartContextType>
  //ugl nemoj force castat sa "as"
  {} as ShoppingCartContextType
);

export default ShoppingCartContext;
