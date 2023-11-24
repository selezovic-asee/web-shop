import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useLaptops = () => useProductData<Product>('/products/category/laptops');

export default useLaptops;