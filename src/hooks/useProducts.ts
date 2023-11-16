import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userService, { Product } from "../services/user-service";

const useProducts = () => {
  const [data, setData] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll<Product>();
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

  return { data, error, isLoading }
}

export default useProducts;