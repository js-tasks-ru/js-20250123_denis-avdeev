/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const oldKeyValues = Object.entries(obj);
  const tempMap = new Map(oldKeyValues);
  for (let key of fields) {
    tempMap.delete(key);
  }
  return Object.fromEntries(tempMap);
};
