import { IEbook } from "../interfaces/IEbook";

export class MailService {
    constructor() {}

    send(book: IEbook, email: string) {
        console.log(`Sending ebook '${book.title}' ISBN ${book.isbn} to ${email}`);
    }
}