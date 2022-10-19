
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

module.exports=countLetters;