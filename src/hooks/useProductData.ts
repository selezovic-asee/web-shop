import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useShoppingCart from "./useShoppingCart";

interface FetchResponse<T> {
  products: T[];
}

//iako je ovo mock ne sviđa mi se kako je složen
//razlog ta to je to što miješaš wrapper za pozivanje endpointa sa stateom
//uvijek moraš imati stateless layer prije poziva fetcha
//dakle recimo da imaš hook koji ti vraća funkciju koju koristiš za pozivanje remote endpointa
//i onda state management radiš zasebno gdje ti treba 

//definitivno ti fali refresh funkcionalnost
const useProductData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { inputValue } = useShoppingCart();

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal
      })
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [inputValue]);

  return { data, error, isLoading }
}

export default useProductData;