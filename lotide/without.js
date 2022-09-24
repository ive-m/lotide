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

const without = function(sourceArray, itemsToRemoveArray) {
  let newItems = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemoveArray.includes(sourceArray[i])) {
      newItems.push(sourceArray[i]);
    }
  }
  return newItems;
};
/*console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3], [1, "2"])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3", "1"])); // => ["2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // true
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // true
assertArraysEqual(without([1, 2, 3], [1, "2"]), [1, 2, 3]); // false
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3", "1"]), []); //false

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/