import { ProductInCart } from "../models/product-in-cart.model";
import { Product } from "../models/product.model";
import { Unit } from "../models/units.model";


export interface AppState {
    products: ReadonlyArray<Product>;
    cart: ReadonlyArray<ProductInCart>;
    units: ReadonlyArray<Unit>;
}