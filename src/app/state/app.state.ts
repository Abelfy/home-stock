import { ProductInCart } from "./models/product-in-cart.model";
import { Product } from "./models/product.model";
import { Unit } from "./models/unit.model";
import { User } from "./models/user.model";
import * as auth from "../auth/state/auth.reducers";

export interface AppState {
    products: ReadonlyArray<Product>;
    cart: ReadonlyArray<ProductInCart>;
    units: ReadonlyArray<Unit>;
    //authState : auth.State;
}