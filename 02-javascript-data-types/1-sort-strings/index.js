/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const tempArr = arr.slice().sort((a, b) => {
    const comparison = a.localeCompare(b, ['ru', 'en'], { sensitivity: 'base' });
    if (comparison === 0) {
      return b.localeCompare(a, ['ru', 'en'], {sensitivity: 'case'});
    }
    return comparison;
  });
  if (param == 'asc') {
    return tempArr;
  } else if (param == 'desc') {
    return tempArr.reverse();
  }
}