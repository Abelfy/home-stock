import { ProductInCart } from "../models/product-in-cart.model";
import { Product } from "../models/product.model";
import { Unit } from "../models/unit.model";


export interface AppState {
    products: ReadonlyArray<Product>;
    cart: ReadonlyArray<ProductInCart>;
    units: ReadonlyArray<Unit>;
}