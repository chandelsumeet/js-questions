const emp1 = {
  name: "sumeet",
  address: {
    street: "1826 1st floor",
    pinCode: "110009",
  },
};
const emp2 = {
  name: "sumeet chandel",
  address: {
    street: "1826 1st floor",
    pinCode: "110009",
  },
};

function compareTwoObject(obj1, obj2) {
  // if (Object.keys[obj1].length != Object.keys[obj2].length) return false;
  for (let item in obj1) {
    if (typeof obj1[item] == "object") {
      compareTwoObject(obj1[item], obj2[item]);
    } else if (obj1[item] !== obj2[item]) {
      return false;
    }
  }
  return true;
}
console.log(compareTwoObject(emp1, emp2));
