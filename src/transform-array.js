import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} result initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('arr parameter must be an instance of the Array!');
  }
  result = [...arr];
  let index = 0;
  if (result.indexOf('--discard-prev') != -1) {
    index = result.indexOf('--discard-prev');
    result.splice(index, 1);
    if (index != 0) {
      result.splice(index - 1, 1);
    }
  }
  if (result.indexOf('--discard-next') != -1) {
    index = result.indexOf('--discard-next');
    result.splice(index, 1);
    if (index != result.length) {
      result.splice(index, 1);
    }
  }
  if (result.indexOf('--double-prev') != -1) {
    index = result.indexOf('--double-prev');
    result.splice(index, 1);
    console.log(result);
    if (index != 0) {
      result.splice(index - 1, 0, result[index - 1]);
    }
  }
  if (result.indexOf('--double-next') != -1) {
    index = result.indexOf('--double-next');
    result.splice(index, 1);
    if (index != result.length) {
      result.splice(index, 0, result[index]);
    }
  }
  return result;
}

console.log(transform([]));