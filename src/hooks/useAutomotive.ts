import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useAutomotive = () => useProductData<Product>('/products/category/automotive');

export default useAutomotive;