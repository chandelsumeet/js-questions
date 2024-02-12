const fruitBasket = {
  apple: 100,
  banana: 250,
  grape: 500,
};

function filterFruitsByQuantity(basket, amount) {
  let obj = {};
  for (let item in basket) {
    if (basket[item] >= amount) {
      obj[item] = basket[item];
    }
  }
  return obj;
}
console.log(filterFruitsByQuantity(fruitBasket, 150));
