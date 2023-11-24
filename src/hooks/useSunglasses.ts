import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useSunglasses = () => useProductData<Product>('/products/category/sunglasses');

export default useSunglasses;