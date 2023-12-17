const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    switch (arr[i]) {
      case '--discard-prev':
        if (typeof newArr[i - 1] !== 'undefined') {
          newArr.pop();
        }
        break;
      case '--double-prev':
        if (i !== 0) {
          if (typeof newArr[i - 1] !== 'undefined') {
            newArr.push(newArr[i - 1]);
          }
        }
        break;
      case '--double-next':
        if (i !== arr.length - 1) {
          newArr.push(arr[i + 1]);
        }
        break;
      case '--discard-next':
        i += 1;
        break;
      default:
        newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = {
  transform
};
