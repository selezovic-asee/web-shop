import useProductData from "./useProductData";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: string;
}

const useProducts = () => useProductData<Product>("/products?skip=5&limit=0");

export default useProducts;