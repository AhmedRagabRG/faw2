export enum BookType {
  PAPER = "paper",
  EBOOK = "ebook",
  SHOWCASE = "showcase"
}

export interface IBook {
  isbn: string;
  title: string;
  price: number;
  year: number;
  type: BookType;
}