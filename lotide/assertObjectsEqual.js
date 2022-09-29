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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} ===  ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const car1 = {type:"Fiat", model:"500", color:"white"};
const car2 = {type:"Honda", model:"HD200", color:"white"};
const car3 = {type:"Lexus", model:"500", color:"black"};
const car4 = {type:"Lexus", model:"500", color:"black"};

const person1 = {
  firstName: "John",
  lastName: ["Doe", "Doe"],
  age: 50,
  eyeColor: "blue"
};

const person2 = {
  firstName: "John",
  lastName: ["Doe","Doe"],
  age: 50,
  eyeColor: "blue"
};

assertObjectsEqual(car1, car2);
assertObjectsEqual(car3, car4);
assertObjectsEqual(person1, person2);