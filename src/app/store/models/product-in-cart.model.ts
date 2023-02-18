import { Product } from "./product.model";
import { Unit } from "./unit.model";

export interface ProductInList {
    product : Product;
    products_id : Product;
    quantity : number;
    unit : Unit;
    bought : boolean;
}