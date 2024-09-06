/**
 * Gives you the ability to get random items from an array
 * (e.g): arrayRandomItem([2,3,4,5]) // Returns 4
 * arrayRandomItem([2,3,4,'5']) // Returns '5'
 *
 * @param {T[]} array - The array passed into the function
 * @returns {T} Returns a random item from the initial array
 */
export const arrayRandomItem = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

/**
 * Gives you the ability to randomly pick an item from an array
 * or specify from what index you want the item to be picked from.
 *
 * @param {T[]} array - The array passed into the function
 * @param {number} [index] - Determines if you want to function to pick from that index
 * @returns {T} Returns a random or indexed item from the array
 */
export const arrayPickOne = <T>(array: T[], index?: number): T => {
  const selectedIndex = index ?? Math.floor(Math.random() * array.length);
  const [item] = array.splice(selectedIndex, 1);
  return item;
};

/**
 * Gives you the ability to remove anything from an array with a custom function
 * passed as a callback to specify the conditions for removal
 *
 * (e.g): arrayRemove([2,3,5,6], (item, index) => item === 3) // Returns [3]
 * arrayRemove([2,3,5,6], (_, index) => index < 1) // Returns [5,6]
 *
 * @template T
 * @param {T[]} arr - The array passed into the function
 * @param {Function} predicate - Custom function passed as a callback
 * @returns {T[]} Returns array with the conditions met
 */
export const arrayRemove = <T>(
  arr: T[],
  predicate: (item: T, index: number) => boolean
): T[] => {
  const result: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i], i)) {
      result.unshift(arr.splice(i, 1)[0]);
    }
  }
  return result;
};

/**
 * Gives you the ability to shuffle positions of an array, index
 * and also its items.
 *
 * @template T
 * @param {T[]} array - The array passed into the function
 * @returns {T[]} Returns a shuffled array from the initial array
 */
export const arrayShuffleItems = <T>(array: T[]): T[] => {
  for (let i = array.length; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * Gives you the ability to remove a member of the array by value
 * ignoring all of its other items.
 *
 * @template T
 * @param {T[]} array - The array passed into the function
 * @param {T} value - The matching value you want removed
 * @returns {T[]} Returns the array with the item removed
 */
export const arrayRemoveItemOnce = <T>(array: T[], value: T): T[] => {
  const index = array.indexOf(value);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
};

/**
 * Removes all occurrences of a given value from an array.
 *
 * @template T
 * @param {T[]} array - The array to modify.
 * @param {T} value - The value to remove.
 * @returns {T[]} The modified array with the value removed.
 */
export const arrayRemoveItemAll = <T>(array: T[], value: T): T[] =>
  array.filter((item) => item !== value);

/**
 * Gives you the ability to join array items with custom separators.
 *
 * @param {Array<any>} arr - The array passed into the function
 * @param {string} separator - The separator between items
 * @param {string} end - The last separator index
 * @returns {string} Returns the array as a custom string
 */
export const arrayJoin = (
  arr: any[],
  separator: string = "",
  end: string = separator
): string => {
  if (arr.length <= 1) return arr.join("");
  return arr.slice(0, -1).join(separator) + end + arr.slice(-1);
};
