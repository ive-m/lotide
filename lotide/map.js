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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} ===  ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  } return results;
};

const numbers = [2, 4, 6, 8, 10];
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(numbers, num => num * 2), [4, 8, 12, 16, 20]);
assertArraysEqual(map(words, word => word.toUpperCase()), ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
assertArraysEqual(map(numbers, num => num / 2), [1, 2, 3, 4, 5]);