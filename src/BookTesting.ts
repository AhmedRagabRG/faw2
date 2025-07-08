import { BookType } from "./interfaces/IBook";
import { BookService } from "./services/BookService";

export class BookTesting {
    private bookService: BookService;

    constructor() {
        this.bookService = new BookService();
    }

    addPaperBook(isbn: string, title: string, price: number, year: number, stock: number, weight: number) {
        this.bookService.add({
            isbn,
            title,
            price,
            year,
            type: BookType.PAPER,
            stock,
            weight,
        });
    }

    addEbook(isbn: string, title: string, price: number, year: number, filetype: string, url: string) {
        this.bookService.add({
            isbn,
            title,
            price,
            year,
            type: BookType.EBOOK,
            filetype,
            url,
        });
    }

    addShowcaseBook(isbn: string, title: string, price: number, year: number) {
        this.bookService.add({
            isbn,
            title,
            price,
            year,
            type: BookType.SHOWCASE,
        });
    }

    removeOutdatedBooks(yearsPassed: number) {
        this.bookService.removeOutdatedBooks(yearsPassed);
    }

    buyBook(isbn: string, quantity: number = 1, address?: string, email?: string) {
        this.bookService.buyBook(isbn, quantity, address, email);
    }
}