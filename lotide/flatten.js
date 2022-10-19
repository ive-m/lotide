
const flatten = function(nestedArray) {
  let flattenArray = [];
  for (const element of nestedArray) {
    if (!Array.isArray(element)) {
      flattenArray.push(element);
    } else {
      for (const iterator of element) {
        flattenArray.push(iterator);
      }
    }
  }
  return flattenArray;
};

module.exports= flatten;