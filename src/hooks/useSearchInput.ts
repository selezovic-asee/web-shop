import useProductData from "./useProductData";
import { Product } from "./useProducts";

const useSearchInput = (searchText: string) => useProductData<Product>('/products/search?q=' + searchText);

export default useSearchInput;