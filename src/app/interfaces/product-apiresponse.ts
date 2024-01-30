import { Product } from "./product";

export interface ProductAPIResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}
