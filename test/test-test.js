var tape = require("tape"),
    mytest = require("../");

tape("test() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(mytest.test(), 42);
  test.end();
});
