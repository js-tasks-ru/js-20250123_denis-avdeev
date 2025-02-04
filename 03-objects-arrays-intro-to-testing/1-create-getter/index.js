/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const properties = path.split('.');

  return function(obj) {
    //увы функцию сам не сдюжил и обратился к чату GPT, 
    //дабы не застрять на задаче на долго
    return properties.reduce((acc, prop) => {
      if (acc && acc.hasOwnProperty(prop)) {
        return acc[prop];
      }
      return undefined;
    }, obj);
  };
}
