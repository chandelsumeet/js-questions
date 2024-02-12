const emp = {
  name: "sumeet",
  address: {
    street: "1826 1st floor",
    pinCode: 110009,
  },
};

function deepCopy(obj) {
  let newObj = {};
  for (let item in obj) {
    if (obj[item] == "object") {
      newObj[item] = deepCopy(obj[item]);
    } else {
      newObj[item] = obj[item];
    }
  }
  return newObj;
}
console.log(deepCopy(emp));
