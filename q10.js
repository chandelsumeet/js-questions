const products = [
  {
    name: "sumeet",
    price: 3500,
  },
  {
    name: "rahul",
    price: 1500,
  },
  {
    name: "ritesh",
    price: 2500,
  },
];

function sortByProducts(products) {
  return products.sort((a, b) => {
    if (a.price < b.price) {
      return -1;
    } else if (a.price > b.price) {
      return 1;
    } else return 0;
  });
}
sortByProducts(products);
console.log(products);
