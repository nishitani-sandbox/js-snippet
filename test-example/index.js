const ERROR_ARGS_MUST_BE_STRING = new Error('all args must be string');

function sum(...nums) {
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i] !== 'number') {
      throw ERROR_ARGS_MUST_BE_STRING;
    }
  }

  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    s += nums[i];
  }
  return s;
}

module.exports = { ERROR_ARGS_MUST_BE_STRING, sum };