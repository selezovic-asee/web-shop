import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import productService from "../services/product-service";


export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const useProducts = () => {
  const [products, setData] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = productService.getAll<Product>();
    request
      .then((res) => {
        setData(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { data: products, error, isLoading }
}

export default useProducts;