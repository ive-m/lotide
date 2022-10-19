
const without = function(sourceArray, itemsToRemoveArray) {
  let newItems = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemoveArray.includes(sourceArray[i])) {
      newItems.push(sourceArray[i]);
    }
  }
  return newItems;
};

module.exports= without;