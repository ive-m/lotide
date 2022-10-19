
const eqArrays = require('./eqArrays');

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

module.exports= eqObjects;