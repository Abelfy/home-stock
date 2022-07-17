import { AbstractModel } from "./abstract.model";
import { Label } from "./label.model";

export interface Product extends AbstractModel {
    id : string;
    status : string;
    picture : string;
    name: string;
    marque: string;
    etiquette: Label;    
}

export function compareProducts (a: Product, b: Product) {
    return a.name.localeCompare(b.name);
}