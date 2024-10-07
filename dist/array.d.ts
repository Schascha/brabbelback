/**
 * Finds a value in array recursively
 * @param {any[]} array - The array to query
 * @param {any|any[]} value - The value or array of values to find
 * @return {boolean} Returns `true` if value is found, else `false`
 */
export declare function has(array: any[], value: any | any[]): boolean;
/**
 * Checks if value or array is empty
 * @param {any|any[]} value - The value or array to check
 * @return {boolean} Returns `true` if value is empty, else `false`
 */
export declare function isEmpty(value: any | any[]): boolean;
/**
 * Returns last element from array
 * @param {any[]} array - The array to query
 * @return {any} Returns the last element of the array or undefined
 */
export declare function last(array: any[]): any;
/**
 * Returns next element from array
 * @param {number} index - The index to query
 * @param {any[]} array - The array to query
 * @param {boolean} [loop=true] - Disable infinite array loop
 * @returns {any} Return the previous element of the array
 */
export declare function next(index: number, array: any[], loop?: boolean): any;
/**
 * Returns previous element from array
 * @param {number} index - The index to query
 * @param {any[]} array - The array to query
 * @param {boolean} [loop=true] - Disable infinite array loop
 * @returns {any} Returns the previous element of the array
 */
export declare function prev(index: number, array: any[], loop?: boolean): any;
/**
 * Prints a value or an array of values
 * @param {any|any[]} value - The value or array of values to print
 * @param {string} [separator=', '] - The join separator
 * @returns {string} Returns the value as a string
 */
export declare function print(value: any | any[], separator?: string): string;
/**
 * Pushs a value or an array of values recursively
 * @param {any[]} array - The array to add values to
 * @param {any[]} value - The value or array of values to add
 * @param {boolean} [unique=true] - If `true`, only unique values will be added
 * @returns {number|undefined} Returns the size of the array or undefined
 */
export declare function push(array: any[], value: any[], unique?: boolean): number | undefined;
/**
 * Returns random element from array
 * @param {any[]} array - The array to query
 * @return {any} Returns a random element or undefined
 */
export declare function random(array: any[]): any;
/**
 * Randomize array
 * @param {any[]} array - The array to be shuffled through
 * @returns {any} Returns the shuffled array or undefined
 */
export declare function shuffle(array: any[]): any;
/**
 * Returns value as an array if it's not one
 * @param {any|any[]} value - The value to convert to an array
 * @returns {any[]} Returns the value as an array
 */
export declare function toArray(value?: any | any[]): any[];
