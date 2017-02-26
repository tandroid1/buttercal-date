var tape = require("tape"),
    foo = require("../");

tape("date() returns the answer to the ultimate question of life, the universe, and everything.", function(test) {
  test.equal(date.date(), 42);
  test.end();
});
