const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);
  } else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const countLetters = function(sentence) {
  const s = sentence.replace(/\s+/g, '');
  let result = {};
  for (const letter of s) {
    if (result[letter] in result === false) {
      result[letter] = s.split(letter).length - 1;
    }
  }
  return result;
};

let sentence = "A aaa bbbb cccc kkkkaaaaa";
console.log(sentence);
console.log(countLetters(sentence));

