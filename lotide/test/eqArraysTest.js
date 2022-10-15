const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["3", "2", "3", "4"], ["1", "2", "3", "4"])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));// => false

assertEqual(eqArrays([0, 2, 6, 8], [0, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);
assertEqual(eqArrays(["3", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);

assertArraysEqual([0, 2, 3], [0, 2, 3]);
assertArraysEqual([0, 2, 6, 8], [0, 2, 3]);
