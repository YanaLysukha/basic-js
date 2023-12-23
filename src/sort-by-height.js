const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrWithoutUnits = [];
  for (const item of arr) {
    if (item !== -1) {
      arrWithoutUnits.push(item);
    }
  }
  const sortedArray = arrWithoutUnits.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      sortedArray.splice(i, 0, arr[i]);
    }
  }
  return sortedArray;
}

module.exports = {
  sortByHeight
};
