const students = [
  {
    name: "sumeet",
    grade: "A",
    age: 28,
  },
  {
    name: "sumeet",
    grade: "C",
    age: 25,
  },
  {
    name: "sumeet",
    grade: "B",
    age: 24,
  },
];

function sort(students, key, asc = true) {
  let value = asc ? 1 : -1;
  students.sort((a, b) => {
    if (a[key] < b[key]) {
      return -value;
    } else if (a[key] > b[key]) {
      return value;
    } else return 0;
  });
}

function sortStudents(students) {
  sort(students, "grade", false);
  sort(students, "age", true);
}
sortStudents(students);
console.log(students);
