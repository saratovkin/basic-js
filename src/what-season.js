import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) { 
  if (!(date instanceof Date && !isNaN(date.valueOf()))) {
    throw new Error('Invalid date!');
  }
  if (date === undefined) {
    return ('Unable to determine the time of year!')
  }
  let month = date.getMonth();
  if (month == 11 || month < 2) {
    return 'winter';
  }
  if (month >= 2 && month <= 4) {
    return 'spring';
  }
  if (month >= 5 && month <= 7) {
    return 'summer';
  }
  if (month >= 8 && month <= 10) {
    return 'fall';
  }
  return day;
}
