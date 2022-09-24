
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

assertArraysEqual([], ["1 ", "2 ", "ho"]);// failed
assertArraysEqual([1, 2, 3], ["1 ", "2 ", "3"]);// failed
assertArraysEqual(["ho", "ho", "ho"], [1, "2 ", "ho"]);// failed
assertArraysEqual(["ho", "ho", "ho"], ["ho", "ho", "ho"]);// passed
assertArraysEqual(["ho", "ho", "ho", "ho"], ["ho", "ho", "ho"]);// passed