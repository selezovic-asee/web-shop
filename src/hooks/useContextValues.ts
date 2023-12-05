import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export interface CartItem {
    id: number;
    quantity: number;
  }

    const useContextValues = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [inputValue, setInputValue] = useState('');
      const [categoryProduct, setCategoryProduct] = useState('');

      const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        "shopping-cart",
        []
  );

      const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
      );
    
      const openCart = () => setIsOpen(true);
    
      const closeCart = () => setIsOpen(false);
    
      const getItemQuantity = (id: number) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
      };
    
      const increaseCartQuantity = (id: number) => {
        setCartItems((currItems) => {
          if (currItems.find((item) => item.id === id) == null) {
            return [...currItems, { id, quantity: 1 }];
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
              } else {
                return item;
              }
            });
          }
        });
      };
    
      const decreaseCartQuantity = (id: number) => {
        setCartItems((currItems) => {
          if (currItems.find((item) => item.id === id)?.quantity === 1) {
            return currItems.filter((item) => item.id !== id);
          } else {
            return currItems.map((item) => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return item;
              }
            });
          }
        });
      };
    
      const removeFromCart = (id: number) => {
        setCartItems((currItems) => {
          return currItems.filter((item) => item.id !== id);
        });
      };


      return { cartItems, cartQuantity, closeCart, decreaseCartQuantity, getItemQuantity, increaseCartQuantity, openCart, removeFromCart, isOpen, inputValue, setInputValue, categoryProduct, setCategoryProduct };
}

export default useContextValues;