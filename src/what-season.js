const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) {
    throw new Error('Invalid date!');
  }

  const monthIndex = date.getMonth();
  if (monthIndex <= 1 || monthIndex === 11) {
    return 'winter';
  }
  if (monthIndex >= 2 && monthIndex <= 4) {
    return 'spring';
  }
  if (monthIndex >= 5 && monthIndex <= 7) {
    return 'summer';
  }
  if (monthIndex >= 8 && monthIndex <= 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
