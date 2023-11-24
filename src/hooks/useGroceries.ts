import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useGroceries = () => useProductData<Product>('/products/category/groceries');

export default useGroceries;