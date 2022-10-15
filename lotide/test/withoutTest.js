const assertArraysEqual= require('../assertArraysEqual');
const without= require('../without');

/*console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3], [1, "2"])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3", "1"])); // => ["2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);*/

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // true
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // true
assertArraysEqual(without([1, 2, 3], [1, "2"]), [1, 2, 3]); // false
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3", "1"]), []); //false

