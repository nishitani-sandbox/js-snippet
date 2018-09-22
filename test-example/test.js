const test = require('ava');
const { ERROR_ARGS_MUST_BE_STRING, sum } = require('./');

test('when passed multiple numbers as args, returns sum of thme', function(t) {
  t.is(sum(1, 2, 3), 6);
});

test('when args include not a number, ERROR_ARGS_MUST_BE_STRING thrown', function(t) {
  const err = t.throws(function() {
    sum(1, "2");
  });
  t.is(err.message, ERROR_ARGS_MUST_BE_STRING.message);
});