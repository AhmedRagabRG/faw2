import { IBook } from "./IBook";

export interface IEbook extends IBook {
    filetype: string;
    url: string;
}