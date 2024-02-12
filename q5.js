const expenses = {
  food: 1000,
  rent: 2500,
};

function calculateExpenses(expenses) {
  let sum = 0;
  for (let item in expenses) {
    sum += expenses[item];
  }
  return sum;
}
console.log(calculateExpenses(expenses));
