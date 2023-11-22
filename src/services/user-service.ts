import create from "./http-service";

// interface FetchResponse<T> {
//     products: T[];
//   }
  
  export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
  }
  



export default create('/products?skip=5&limit=100');