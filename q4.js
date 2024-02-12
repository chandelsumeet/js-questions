const people = [
  { name: "sumeet", age: 25 },
  { name: "ritesh", age: 28 },
  { name: "rahul", age: 30 },
];

function filterPersonByAge(people, age) {
  return people.reduce((acc, curr) => {
    if (curr.age > age) {
      acc.push(curr.name);
    }
    return acc;
  }, []);
}
console.log(filterPersonByAge(people, 25));
