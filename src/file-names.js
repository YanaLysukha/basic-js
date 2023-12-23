const { NotImplementedError } = require('../extensions/index.js');

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
function renameFiles(names) {
  const renameFiles = [];
  let counter = 1;

  for (const name of names) {
    if (!renameFiles.includes(name)) {
      renameFiles.push(name);
    } else if (name.includes('(')) {
      const changedName = `${name}(1)`;
      renameFiles.push(changedName);
    } else if (renameFiles.includes(name)) {
      const changedName = `${name}(${counter})`;
      renameFiles.push(changedName);
      counter += 1;
    }
  }
  return renameFiles;
}

module.exports = {
  renameFiles
};
