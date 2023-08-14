// const add = require("./exampleModule").add;



// Individual tests can be run using the "it" or "test" methods, they are aliased and are equivalent
/* This test suite is written in Jest. There are many more methods other than "toBe"
    Go to: https://jestjs.io/docs/en/expect
    to find more options if "toBe" doesn't fit your use case.
    */
// In addition to expected, "happy path", behaviour as above, you should also test your edge cases

describe('Example tests', function() {
  var testfunc = function() { return 'Hello'; };
  it ('Should console log \'Hello\'', function() {
    expect(testfunc()).toBe('Hello');
  });
});