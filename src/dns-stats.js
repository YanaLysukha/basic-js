const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (const domain of domains) {
    const splitedDomain = domain.split('.').reverse();
    let result = '';
    for (const part of splitedDomain) {
      result += `.${part}`;
      obj[result] = Object.hasOwn(obj, result) ? obj[result] + 1 : 1;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
