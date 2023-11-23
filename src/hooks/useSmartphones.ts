import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import smartphoneService from "../services/smartphon-service";
import { Product } from "./useProducts";

const useSmartphones = () => {
    const [smartphones, setSmartphones] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = smartphoneService.getAll<Product>();
    request
      .then((res) => {
        setSmartphones(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { smartphones, error, isLoading }
};

export default useSmartphones;