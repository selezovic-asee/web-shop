import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useFragnaces = () => useProductData<Product>('/products/category/fragrances');

export default useFragnaces;