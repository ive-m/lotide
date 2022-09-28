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

const letterPositions = function(sentence) {
  const results = {};
  const s = sentence.replace(/\s+/g, '');
  for (const letter of s) {
    if (results[letter] in results === false) {
      const value = [];
      for (let i = 0; i < s.length; i++) {
        if (letter === s[i]) {
          value.push(i);
        }
      }
      results[letter] = value;
    }
  }
  return results;
};



const sentence = "lighthouse in the house";

assertArraysEqual(letterPositions(sentence)["l"], [0]);
assertArraysEqual(letterPositions(sentence)["i"], [1, 10]);
assertArraysEqual(letterPositions(sentence)["s"], [8, 18]);
console.log(letterPositions(sentence));