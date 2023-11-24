import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useSmartphones = () => useProductData<Product>('/products/category/smartphones');

export default useSmartphones;