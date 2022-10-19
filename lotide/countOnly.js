
const countOnly = function(allItems, itemsToCount) {
  let obj = {};
  for (const key in itemsToCount) {
    if (itemsToCount[key] === true) {
      let count = 0;
      for (const item of allItems) {
        if (item === key) {
          count++;
        }
      } if (count !== 0) {
        obj[key] = count;
      }
    }
  } return obj;
};

module.exports=countOnly;

