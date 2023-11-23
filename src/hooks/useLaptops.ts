import useData from "./useProductData";
import { Product } from "./useProducts";

const useLaptops = () => useData<Product>('/products/category/laptops');

export default useLaptops;