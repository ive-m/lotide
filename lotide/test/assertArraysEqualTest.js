const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([], ["1 ", "2 ", "ho"]);// failed
assertArraysEqual([1, 2, 3], ["1 ", "2 ", "3"]);// failed
assertArraysEqual(["ho", "ho", "ho"], [1, "2 ", "ho"]);// failed
assertArraysEqual(["ho", "ho", "ho"], ["ho", "ho", "ho"]);// passed
assertArraysEqual(["ho", "ho", "ho", "ho"], ["ho", "ho", "ho"]);// passed
module.exports= assertArraysEqual;