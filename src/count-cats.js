const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let earsCount = 0;
  for (const arr of matrix) {
    for (const item of arr) {
      if (item === '^^') {
        earsCount += 1;
      }
    }
  }
  return earsCount;
}

module.exports = {
  countCats
};
