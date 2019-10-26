import shuffle from 'lodash.shuffle';


/** Constants */

export const tinyTransparentGif = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
export const browserSupportsIntersectionObserver = 'IntersectionObserver' in window;


/** getShuffledEntriesIntoArray
 *  - Returns the given array or a new array,
 *  - with the requested ammount of entries (the given number is shuffled).
 *  - The injected new entries will have the type of numbers
*/

export const getShuffledEntriesIntoArray = (numberOfWantedEntries, arrayToPopulate = []) => {
  const temporaryArray = [];
  for (let i = 1; i <= numberOfWantedEntries; i++) { temporaryArray.push(i);}
  const newShuffledEntries = shuffle(temporaryArray);
  return [...arrayToPopulate, ...newShuffledEntries];
};


/** counter
 *  - Adds the first argument to the second argument
 *  - Returns a number
 */

export const counter = (numberToAdd = 1, variableToStore = 0) => variableToStore + numberToAdd;;
