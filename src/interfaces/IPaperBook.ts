import { IBook } from "./IBook";

export interface IPaperBook extends IBook {
    stock: number;
    weight: number;
}