import { Product } from "./product.model";
import { Unit } from "./unit.model";

export interface ProductInList {
    product : Product;
    quantity : number;
    unit : Unit;
}