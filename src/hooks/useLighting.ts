import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useLighting = () => useProductData<Product>('/products/category/lighting');

export default useLighting;