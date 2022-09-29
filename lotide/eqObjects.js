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

const eqObjects = function(object1, object2) {
  const ob1KeysArray = Object.keys(object1);
  const ob2KeyArray = Object.keys(object2);
  if (ob1KeysArray.length !== ob2KeyArray.length) {
    return false;
  }
  for (const key of ob1KeysArray) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key]))
        return false;
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }  return true;
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const abcd = { a: "1", c: "3", b: "h" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { d: ["2", 3] , c: "1"};

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(ba, ab), true);
assertEqual(eqObjects(abcd, abc), false);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd, ab), false);
assertEqual(eqObjects(cd2, cd3), false);