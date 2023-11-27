import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useMotorcycle = () => useProductData<Product>('/products/category/motorcycle');

export default useMotorcycle;