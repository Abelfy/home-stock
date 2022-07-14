import { Product } from "../models/product.model";


export interface AppState {
    products: ReadonlyArray<Product>;
    cart: ReadonlyArray<string>; 
}