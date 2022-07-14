import { AbstractModel } from "./abstract.model";

export interface Label extends AbstractModel {
    id : string;
    libelle: string;
    color : string;
}