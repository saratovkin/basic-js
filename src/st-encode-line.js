import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  let result = [];
  str.split('').forEach((item) => {
    let reg = new RegExp(item, 'g');
    result.push(str.match(reg).length + item);
  });
  function unique(value, index, self) {
    return self.indexOf(value) === index;
  }
  return result.filter(unique).join('');
}

