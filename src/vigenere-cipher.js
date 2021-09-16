import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

export default class VigenereCipheringMachine {
  constructor(flag) {
    this.flag = flag;
  }
  encrypt(str, key) {
    if (str == undefined || key == undefined) {
      throw new Error("Incorrect arguments!");
    }
    let strCode;
    let keyCode;
    let finalCode;
    str = str.toUpperCase();
    key = key.toUpperCase();
    while (str.length > key.length) {
      key += key;
    }
    for (let i = 0, j = 0; i < str.length; i++, j++) {
      strCode = str[i].charCodeAt(0) - 65;
      keyCode = key[j].charCodeAt(0) - 65;
      if (strCode >= 0) {
        if (strCode + keyCode > 25) {
          finalCode = strCode + keyCode - 26 + 65;
        } else {
          finalCode = strCode + keyCode + 65;
        }
        str = str.replaceAt(i, String.fromCharCode(finalCode));
      } else {
        j--;
      }
    }
    if (this.flag === false) {
      str = str.split('').reverse().join('');
    }
    return str;
  }
  decrypt(str, key) {
    if (str == undefined || key == undefined) {
      throw new Error("Incorrect arguments!");
    }
    let strCode;
    let keyCode;
    let finalCode;
    str = str.toUpperCase();
    key = key.toUpperCase();
    while (str.length > key.length) {
      key += key;
    }
    for (let i = 0, j = 0; i < str.length; i++, j++) {
      strCode = str[i].charCodeAt(0) - 65;
      keyCode = key[j].charCodeAt(0) - 65;
      if (strCode >= 0) {
        if (strCode < keyCode) {
          finalCode = 26 - keyCode + strCode;
        } else {
          finalCode = strCode - keyCode;
        }
        str = str.replaceAt(i, String.fromCharCode(finalCode + 65));
      } else {
        j--;
      }
    }
    if (this.flag === false) {
      str = str.split('').reverse().join('');
    }
    return str;
  }
}







