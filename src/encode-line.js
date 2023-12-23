const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let encodeArr = [];

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      counter += 1;
    } else {
      const encodePart = counter === 1 ? `${str[i]}` : `${counter}${str[i]}`;
      encodeArr.push(encodePart);
      counter = 1;
    }
  }
  return encodeArr.join('');
}

module.exports = {
  encodeLine
};
