/**
 * Finds a value in array recursively.
 * @param {any[]} array The array to query.
 * @param {*} value The search element.
 * @return {boolean} Returns `true` if `value` is in `array`, else `false`.
 */
 export function has(array: any[], value: any): boolean;
 /**
  * Checks if value or array is empty.
  * @param {*} value The value to inspect
  * @return {boolean} Returns `true` if `value` is empty, else `false`.
  */
 export function isEmpty(value: any): boolean;
 /**
  * Returns last element from array.
  * @param {any[]} array The array The array to query.
  * @return {*} Returns the last element of `array`.
  */
 export function last(array: any[]): any;
 /**
  * Returns next element from array.
  * @param {number} index
  * @param {any[]} array The array to query.
  * @param {boolean} [loop=true] Disable infinite array loop.
  * @returns {*} Return the previous element of `array`.
  */
 export function next(index: number, array: any[], loop?: boolean): any;
 /**
  * Returns previous element from array.
  * @param {number} index
  * @param {any[]} array The array to query.
  * @param {boolean} [loop=true] Disable infinite array loop.
  * @returns {*} Returns the previous element of `array`.
  */
 export function prev(index: number, array: any[], loop?: boolean): any;
 /**
  * Prints a value or an array of values.
  * @param {*} value The value to print
  * @param {*} [separator=', '] The join separator
  * @returns {*} Returns value or joined array of `value`
  */
 export function print(value: any, separator?: any): any;
 /**
  * Pushs a value or an array of values recursively.
  * @param {any[]} array The array to query.
  * @param {*} value The value to be added.
  * @param {boolean} [unique=true] Unique push of strings or numbers to `array`.
  * @returns {*} Returns the size of `array` or undefined.
  */
 export function push(array: any[], value: any, unique?: boolean): any;
 /**
  * Returns random element from array.
  * @param {any[]} array The array to query.
  * @return {*} Returns a random element of `array`.
  */
 export function random(array: any[]): any;
 /**
  * Randomize array.
  * @param {any[]} array The array to be shuffled through.
  * @returns {*} Returns the shuffled array.
  */
 export function shuffle(array: any[]): any;
 /**
  * Returns value as an array if it's not one.
  * @param {*} args The value to inspect.
  * @returns {*} Returns the value as an array.
  */
 export function toArray(...args: any): any;
