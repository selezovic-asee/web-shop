import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import smartphoneService from "../services/smartphon-service";

const useProductData = <T>() => {
    const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = smartphoneService.getAll<T>();
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
};

export default useProductData;