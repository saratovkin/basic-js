import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str,options) {
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 0;
  }
  if (options.separator === undefined) {
    options.separator = '+';
  }
  if (options.addition === undefined) {
    options.addition = '';
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 0;
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
  if (options.addition != '') {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      str += options.addition + options.additionSeparator;
    }
    str = str.substring(0, str.length - options.additionSeparator.length);
  }
  if (options.repeatTimes != 0) {
    let result = '';
    for (let i = 0; i < options.repeatTimes; i++) {
      result += str + options.separator;
    }
    result = result.substring(0, result.length - options.separator.length);
    str = result;
  }
  return str;
}

