import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 1;
  let result = {};
  for (let i = 1; i <= disksNumber; i++) {
    turns = Math.pow(2, i);
  }
  result.turns = turns - 1;
  turnsSpeed = turnsSpeed / 3600;
  result.seconds = Math.floor(result.turns / turnsSpeed);
  return result;
}

