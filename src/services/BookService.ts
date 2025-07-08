import { BookType, IBook } from "../interfaces/IBook";
import { IEbook } from "../interfaces/IEbook";
import { IPaperBook } from "../interfaces/IPaperBook";
import { MailService } from "./MailService";
import { ShippingService } from "./ShippingService";

export class BookService {
  private inventory: IBook[] = [];

  constructor() { }

  add(book: any) {
    let bookData: IBook | IPaperBook | IEbook;

    switch (book.type) {
      case BookType.PAPER:
        bookData = {
          isbn: book.isbn,
          title: book.title,
          price: book.price,
          year: book.year,
          type: BookType.PAPER,
          stock: book.stock,
          weight: book.weight,
        };
        break;
      case BookType.EBOOK:
        bookData = {
          isbn: book.isbn,
          title: book.title,
          price: book.price,
          year: book.year,
          type: BookType.EBOOK,
          filetype: book.filetype,
          url: book.url,
        };
        break;
      case BookType.SHOWCASE:
        bookData = {
          isbn: book.isbn,
          title: book.title,
          price: book.price,
          year: book.year,
          type: BookType.SHOWCASE,
        };
        break;
      default:
        throw new Error("Invalid book type");
    }

    this.inventory.push(bookData);
    console.log(`Added book '${book.title}' ISBN ${book.isbn}`);
  }

  removeOutdatedBooks(yearsPassed: number) {
    const currentYear = new Date().getFullYear();
    const thresholdYear = currentYear - yearsPassed;

    const outdatedBooks = this.inventory.filter(book => book.year < thresholdYear);
    this.inventory = this.inventory.filter(book => book.year >= thresholdYear);
    console.log(`Removed ${outdatedBooks.map(book => book.title).join(", ")}`);
    return outdatedBooks;
  }

  buyBook(isbn: string, quantity: number = 1, address?: string, email?: string) {
    const book = this.inventory.find(book => book.isbn === isbn);
    if (!book) {
      throw new Error("Book not found");
    }

    if (book.type === BookType.SHOWCASE) {
      throw new Error("this is a showcase book");
    }

    if (book.type === BookType.PAPER) {
      if ((book as IPaperBook).stock === 0) {
        throw new Error("Book out of stock");
      }

      if (quantity > (book as IPaperBook).stock) {
        throw new Error("Not enough stock");
      }

      (book as IPaperBook).stock -= quantity;
      console.log(`Bought book '${book.title}' ISBN ${book.isbn} Price: ${book.price} Quantity: ${quantity}`);
      const shippingService = new ShippingService();
      shippingService.ship(book as IPaperBook, address || "");
    } else if (book.type === BookType.EBOOK) {
      console.log(`Bought ebook '${book.title}' ISBN ${book.isbn}`);
      const mailService = new MailService();
      mailService.send(book as IEbook, email || "");
    }
  }
}
