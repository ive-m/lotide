const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(first, second) {
  let flag = true;
  if (first.length !== second.length) {
    flag = false;
  } else {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return flag = false;
      }
    }
  } return flag;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["3", "2", "3", "4"], ["1", "2", "3", "4"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false

assertEqual(eqArrays([0, 2, 6, 8], [0, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["3", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);