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

const middle = function(array) {
  let middle = [];
  let arrayLength = array.length;
  if (arrayLength < 3) {
    return middle;
  } else {
    let mid = Math.trunc(arrayLength / 2);
    if (arrayLength % 2 !== 0) {
      middle.push(array[mid]);
    } else {
      middle.push(array[mid - 1]);
      middle.push(array[mid]);
    }
  } return middle;
};

console.log(middle([]));
console.log(typeof (middle([1, 2, 3, 4, 5])));
console.log(middle(["1", 2, "h", 4, "o"]));
console.log(middle([1, "2"]));
console.log(middle([1, "2", 3, "5", 6, 7]));

assertArraysEqual(middle([]), []); //pass
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //pass
assertArraysEqual(middle(["1", 2, "h", 4, "o"]), ["h"]);//pass
assertArraysEqual(middle([1, "2"]), []);//pass
assertArraysEqual(middle([1, "2", 3, 5, 6, 7]), [3, "5"]);//fail