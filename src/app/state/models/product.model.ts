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