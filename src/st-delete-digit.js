import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let arr = n.toString().split('')
  let max = 0;
  let digit = null;
  for (let i = 0; i < arr.length; i++) {
    digit = arr[i];
    arr[i] = '';
    if (arr.join('') >= max) {
      max = arr.join('');
    }
    arr[i] = digit;
  }
  return +max;
}