import { AbstractModel } from "./abstract.model";

export interface Unit extends AbstractModel {
    id: string;
    libelle: string;
    abbr: string;
}