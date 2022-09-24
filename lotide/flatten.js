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

const flatten = function(nestedArray) {
  let flattenArray = [];
  for (const element of nestedArray) {
    if (!Array.isArray(element)) {
      flattenArray.push(element);
    } else {
      for (const iterator of element) {
        flattenArray.push(iterator);
      }
    }
  }
  return flattenArray;
};
/*
console.log(flatten([1, 2, [3, 4], 5, [6]]));// => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([[1, 2, 3], [1], [2, 3]]), [1, 2, 3, 1, 2, 3]);//pass

assertArraysEqual(flatten([["1", "2", "3"], [1, 2, "3"], ["1", "2"]]), ["1", "2", "3", 1, 2, "3", "1", "2"]); //pass

assertArraysEqual(flatten([[1, 2, 3], [1, "2"], [1, 2, 3]]), ["1", "2", "3", 1, 2, "3", "1", "2"]);// fail

assertArraysEqual(flatten([["1", "2", "3"], [1, 2, "3", "1"]]), ["1", "2", "3", 1, 2, "3", "1"]);//pass*/
