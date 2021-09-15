import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  // if (Array.isArray(members)) {
  //   let result = '';
  //   members.forEach((item) => {
  //     if (typeof item == 'string')
  //       result += item.trim()[0];
  //   });
  //   return (result.length != 0) ? result.toLowerCase().split('').sort().join('').toUpperCase() : (false);
  // }
  // return false;
  return true;
}
