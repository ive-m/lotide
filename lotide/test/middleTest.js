
const middle= require('../middle');
const assert = require('chai').assert;


describe("#middle", () => {
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns ['h'] for ['1', 2, 'h', 4, 'o']", () => {
    assert.deepEqual(middle(["1", 2, "h", 4, "o"]), ["h"]); 
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });

  it("returns [] for [1,'2']", () => {
    assert.deepEqual(middle([1,"2"]), []); 
  });

  it("returns [3, 5] for [1, '2', 3, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, "2", 3, 5, 6, 7]), [3, 5]); 
  });


});

