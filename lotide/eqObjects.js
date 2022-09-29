const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const ob1KeysArray = Object.keys(object1);
  const ob2KeyArray = Object.keys(object2);
  if (ob1KeysArray.length !== ob2KeyArray.length) {
    return false;
  }
  for (const key of ob1KeysArray) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abcd = { a: "1", c: "3", b: "h" };

console.log(eqObjects(ab, ba)); // => true
console.log(eqObjects(ab, abc)); // => false

assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => true
assertEqual(eqObjects(ba, ab), true); // => true
assertEqual(eqObjects(abcd, abc), false); // => true