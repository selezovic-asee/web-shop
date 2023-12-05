import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useBag = () => useProductData<Product>('/products/category/womens-bags')

export default useBag;