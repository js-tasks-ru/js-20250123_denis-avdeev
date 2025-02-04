/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {

  if (string && size === undefined) {
    return string;

  } else if (string && size) {
    const tempArr = string.split('');
    const finalArr = [tempArr[0]];
    let count = 0;
    for (let i = 1; i < tempArr.length; i++) {
      if (tempArr[i] !== tempArr[i - 1]) {
        finalArr.push(tempArr[i]);
        count = 0;
      } else if (tempArr[i] === tempArr[i - 1]) {
        count++;
        if (count < size) {
          finalArr.push(tempArr[i]);
        }
      }
    }
    return finalArr.join('');

  } else {
    return '';
  }
}
