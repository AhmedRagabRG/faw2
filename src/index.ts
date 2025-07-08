import { BookTesting } from "./BookTesting";

const bookTesting = new BookTesting();

bookTesting.addPaperBook("123456", "Paper Book", 500, 2019, 10, 50);
bookTesting.addEbook("1234567", "E Book", 10, 2018, "pdf", "https:");
bookTesting.addShowcaseBook("12345678", "Showcase Book", 10, 2020);


bookTesting.removeOutdatedBooks(20);
bookTesting.buyBook("123456", 1, 'Cairo, Egypt');