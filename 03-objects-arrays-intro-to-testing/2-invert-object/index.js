/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  if (typeof obj === 'object') {

    if (Object.keys(obj).length === 0) {
      return {};
    }

    const checkArr = Object.values(obj).map((item) => {
      return item !== null && typeof item === 'object';
    });
    if (!checkArr.includes(true)) {
      const invertedArray = Object.entries(obj).map((item) => {
        return [item[0], item[1]] = [item[1], item[0]];
      });
      return Object.fromEntries(invertedArray);
    }
  } 
  return undefined;

}