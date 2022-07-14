import { AbstractModel } from "./abstract.model";

export interface Product extends AbstractModel {
    id : string;
    status : string;
    name: string;
    marque: string;
    etiquette: string;    
}