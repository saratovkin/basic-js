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
  let symbols = str.split('');
  let char;
  let result = []
  for (let i = 0, amount; i < symbols.length; i++) {
    amount = 0;
    char = symbols[i];
    while (char == symbols[i]) {
      amount++;
      i++;
    }
    i--;
    (amount > 1) ? (result.push(amount + char)) : (result.push(char));
  }
  return result.join('');
}