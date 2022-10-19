
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

module.exports=letterPositions;

