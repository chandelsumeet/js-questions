const user = {
  username: "sumeet",
  email: "sumeetchandel321@gmail.com",
  age: 25,
};

function addProperty(user) {
  user["isActive"] = true;
}

addProperty(user);
console.log(user);
