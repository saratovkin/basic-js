import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
    for (let i = 0; i < names.length; i++) {
        let temp = names[i];
        names[i] = '';
        let counter = 1;
        let check = 0;
        while (check != -1) {
            check = names.indexOf(temp);
            if (check != -1) {
                names[check] = names[check] + `(${counter})`;
            }
            check = names.indexOf(temp);
            counter++;
        }
        names[i] = temp;
    }
    return names;
}