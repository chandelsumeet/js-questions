const books = [
  {
    title: "Alice in wonderland",
    author: "sumeet",
  },
  {
    title: "Lord of rings",
    author: "ritesh",
  },
  {
    title: "Iron Man",
    author: "rahul",
  },
];

function findBookByTitle(books, title) {
  return books.find((book) => book.title.toLowerCase() === title.toLowerCase());
}

console.log(findBookByTitle(books, "Lord of rings"));
