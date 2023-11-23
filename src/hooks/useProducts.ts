import useData from "./useProductData";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

const useProducts = () => useData<Product>("/products?skip=5&limit=100");

export default useProducts;