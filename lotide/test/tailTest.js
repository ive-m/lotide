
const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1,2,3,4]),[2,3,4]);
  });

  it("returns [5,'5'] for ['5',5,'5']", () => {
    assert.deepEqual(tail(['5', 5,'5']), [5,'5']); 
  });

  it("returns [1, 2, 3, 4] for [0, 1, 2, 3, 4]", () => {
    assert.deepEqual(tail([0,1,2,3,4]),[1,2,3,4]);
  });

  it("returns ['e','r'] for ['e','e','r']", () => {
    assert.deepEqual(tail(['e','e','r']), ['e','r']); 
  });
 

});
