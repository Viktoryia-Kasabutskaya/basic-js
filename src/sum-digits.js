const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let digits = String(n).split("");

  function getResultSum() {
    const sum = digits.reduce((result, number) => result + Number(number), 0);
    digits = String(sum).split("");
    if (sum >= 10) {
      getResultSum();
    }
  }

  getResultSum();
  return Number(digits[0]);
}

module.exports = {
  getSumOfDigits,
};
