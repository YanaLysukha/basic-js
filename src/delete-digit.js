const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const numbersArray = [];
  for (let i = 0; i < str.length; i += 1) {
    const num = str.slice(0, i) + str.slice(i + 1);
    numbersArray.push(num);
  }
  const sortedNumbers = numbersArray.sort(function(a, b) {
    return a - b;
  });
  return Number(sortedNumbers[sortedNumbers.length - 1]);
}

module.exports = {
  deleteDigit
};
