import useData from "./useProductData";
import { Product } from "./useProducts";

const useSmartphones = () => useData<Product>('/products/category/smartphones');

export default useSmartphones;