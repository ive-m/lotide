

const middle = function(array) {
  let middle = [];
  let arrayLength = array.length;
  if (arrayLength < 3) {
    return middle;
  } else {
    let mid = Math.trunc(arrayLength / 2);
    if (arrayLength % 2 !== 0) {
      middle.push(array[mid]);
    } else {
      middle.push(array[mid - 1]);
      middle.push(array[mid]);
    }
  } return middle;
};

module.exports= middle;