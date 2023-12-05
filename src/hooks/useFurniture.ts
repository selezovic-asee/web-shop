import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useFurniture = () => useProductData<Product>('/products/category/furniture');

export default useFurniture;