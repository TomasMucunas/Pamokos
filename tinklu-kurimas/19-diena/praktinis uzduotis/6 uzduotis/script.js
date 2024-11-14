const books = [
  { title: "Knyga #1", price: 10.25 },
  { title: "Knyga #2", price: 5.15 },
  { title: "Knyga #3", price: 7.32 },
  { title: "Knyga #4", price: 54.01 },
  { title: "Knyga #5", price: 77.17 },
];

function printBooks() {
  books.map((book, index) => console.log(`${index + 1}. ${book.title}`));
}

function countBooks() {
  return books.length;
}

function addBook(title, price) {
  books.push({ title, price });
}

function printLastBook() {
  const lastBook = books[books.length - 1];
  console.log(`Paskutinė knyga: ${lastBook.title}, Kaina: ${lastBook.price}`);
}

function calculateTotalValue() {
  let total = 0;
  books.forEach((book) => (total += book.price));
  return total;
}

function applyDiscount() {
  books.forEach((book) => {
    if (book.price > 10) {
      const oldPrice = book.price;
      const newPrice = oldPrice * 0.75;
      console.log(`!!! Nukainuota !!!`);
      console.log(
        `Knyga: ${
          book.title
        }, Sena kaina: ${oldPrice}, Perdavimo kaina: ${newPrice.toFixed(
          2
        )}, Pritaikyta nuolaida -25%`
      );
    }
  });
}

function sortBooksByPrice() {
  const sortedBooks = [...books].sort((a, b) => a.price - b.price);
  console.log("Knygos nuo pigiausios iki brangiausios:");
  sortedBooks.forEach((book) => console.log(`${book.title}: ${book.price}`));
}

function sortBooksByTitle() {
  const sortedAsc = [...books].sort((a, b) => a.title.localeCompare(b.title));
  const sortedDesc = [...books].sort((a, b) => b.title.localeCompare(a.title));

  console.log("Knygos pagal pavadinimą (A-Z):");
  sortedAsc.forEach((book) => console.log(book.title));

  console.log("Knygos pagal pavadinimą (Z-A):");
  sortedDesc.forEach((book) => console.log(book.title));
}

function filterExpensiveBooks() {
  const expensiveBooks = books.filter((book) => book.price > 7.5);
  console.log("Knygos brangesnės nei 7.5 eur:");
  expensiveBooks.forEach((book) => console.log(book.title));
}

printBooks();
console.log("Knygų skaičius:", countBooks());
addBook("Knyga #6", 2.75);
printLastBook();
console.log("Bendra knygų kaina:", calculateTotalValue());
applyDiscount();
sortBooksByPrice();
sortBooksByTitle();
filterExpensiveBooks();
