describe('Example tests', function() {
  var testfunc = function() { return 'Hello'; };
  it ('Should console log \'Hello\'', function() {
    expect(testfunc()).toBe('Hello');
  });
});