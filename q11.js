const arr = ["sumeet", "rahul", "yogesh chaudhary"];

function findLongestWord(arr) {
  let maxLen = 0;
  let word = "";
  for (let item of arr) {
    if (item.length > maxLen) {
      max = item.length;
      word = item;
    }
  }
  return word;
}

console.log(findLongestWord(arr));
