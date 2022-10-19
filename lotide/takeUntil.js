
const takeUntil = function (array, callback) {
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else break;
  }
  return results;
};

module.exports= takeUntil;