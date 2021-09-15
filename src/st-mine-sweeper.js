import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let temp = Array(matrix.length + 2).fill(false).map(() => Array(matrix[0].length + 2).fill(false));
  for (let i = 1; i < temp.length - 1; i++) {
    for (let j = 1; j < temp[0].length - 1; j++) {
      temp[i][j] = matrix[i - 1][j - 1];
    }
  }
  for (let i = 1; i < temp.length - 1; i++) {
    for (let j = 1; j < temp[i].length - 1; j++) {
      let counter = 0;
      if (temp[i][j - 1]) {
        counter++;
      }
      if (temp[i][j + 1]) {
        counter++;
      }
      if (temp[i - 1][j]) {
        counter++
      }
      if (temp[i + 1][j]) {
        counter++
      }
      if (temp[i - 1][j - 1]) {
        counter++
      }
      if (temp[i - 1][j + 1]) {
        counter++
      }
      if (temp[i + 1][j - 1]) {
        counter++
      }
      if (temp[i + 1][j + 1]) {
        counter++
      }
      matrix[i - 1][j - 1] = counter;
    }
  }
  return matrix;
}
