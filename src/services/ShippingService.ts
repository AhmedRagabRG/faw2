import { IPaperBook } from "../interfaces/IPaperBook";

export class ShippingService {
    constructor() {}

    ship(book: IPaperBook, address: string) {
        console.log(`Shipping book '${book.title}' ISBN ${book.isbn} Weight: ${book.weight} to ${address}`);
    }
}