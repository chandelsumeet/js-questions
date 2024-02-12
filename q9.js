const family = {
  grandParent: {
    count: 2,
    parent: {
      count: 2,
      siblings: {
        count: 1,
      },
    },
  },
};

function countFamilyMembers(family) {
  let count = 0;
  for (let item in family) {
    if (family[item] == "object") count += countFamilyMembers(family[item]);
    else {
      count += family[item].count;
    }
  }
  return count;
}
console.log(countFamilyMembers(family));
