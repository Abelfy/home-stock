import { ProductInList } from "./models/product-in-cart.model";
import { Product } from "./models/product.model";
import { Unit } from "./models/unit.model";
import { User } from "./models/user.model";
import * as auth from "../auth/state/auth.reducers";
import { EntityState } from "@ngrx/entity";

export interface AppState {
    products: EntityState<Product>
    cart: EntityState<ProductInList>;
    units: ReadonlyArray<Unit>;
    //authState : auth.State;
}