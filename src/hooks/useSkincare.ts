import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useSkincare = () => useProductData<Product>('/products/category/skincare')

export default useSkincare;