import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export interface CartItem {
  id: number;
  quantity: number;
}

const useContextValues = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [categoryProduct, setCategoryProduct] = useState('');
  const [expanded, setExpanded] = useState(false);

  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  //ovaj kod će se izvoditi pri svakom renderu to je loše trebaš složiti neki computed state budem ti ja nabrzinu složio
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  //alternativa za kod iznad imaš, cartQuantity se izračunava samo kada se promjene cartItemsi i to se sprema u state
  const cartQuantity2 = useComputedState({
    compute: () => cartItems.reduce(
      (quantity, item) => item.quantity + quantity,
      0,
    ),
    dependencies: [cartItems]
  })

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      //ne koristiti == operator nikad, ovo se riješi s uskličnikom ispred
      //ako stalno findaš po id-u razmisli o tome da array pretvoris u object gdje je id key
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
        //nepotreban else
      } else {
        //čudno je tu raditi map budući da tražiš jedan item i dižeš mu quantity ima više smisla koristiti find
        // ako item postoji samo item.quantity++ i to je to, (to možeš jer su objekti reference tj. ako im promijeniš property to se svugdje promijeni), ako ne postoji onda ga dodaš
        return currItems.map((item) => {
          if (item.id === id) {

            return { ...item, quantity: item.quantity + 1 };
            //nepotreban else
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currItems) => {
      //primjedbe iste kao za increase
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


  return { cartItems, cartQuantity, closeCart, decreaseCartQuantity, getItemQuantity, increaseCartQuantity, openCart, removeFromCart, isOpen, inputValue, setInputValue, categoryProduct, setCategoryProduct, expanded, setExpanded };
}

export default useContextValues;


export interface IComputedStateParams<T> {
  compute: () => T,
  dependencies: unknown[]
}

export const useComputedState = <T>({ compute, dependencies }: IComputedStateParams<T>) => {
  const [state, setState] = useState(compute());

  useEffect(() => {
    setState(compute());
  },
    [...dependencies]
  );

  return state;
}