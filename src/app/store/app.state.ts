import { ProductInList } from "./models/product-in-cart.model";
import { Unit } from "./models/unit.model";
import { EntityState } from "@ngrx/entity";
import { Label } from "./models/label.model";
import { Product } from "./models/product.model";

export interface AppState {
    cart: EntityState<ProductInList>;
    products: EntityState<Product>;
    units: EntityState<Unit>;
    labels: EntityState<Label>;
}