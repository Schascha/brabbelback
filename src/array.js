/**
 * Finds a value in array recursively
 * @param {*[]} array - The array to query
 * @param {*|*[]} value - The value or array of values to find
 * @return {boolean} Returns `true` if value is found, else `false`
 */
export function has(array, value) {
	if (!array || !value) {
		return false;
	}
	array = toArray(array);
	return Array.isArray(value)
		? value.find((el) => has(array, el))
		: array.includes(value);
}

/**
 * Checks if value or array is empty
 * @param {*|*[]} value - The value or array to check
 * @return {boolean} Returns `true` if value is empty, else `false`
 */
export function isEmpty(value) {
	if (Array.isArray(value)) {
		return !value.length || value.find((el) => isEmpty(el));
	}

	return value === null || value === '';
}

/**
 * Returns last element from array
 * @param {any[]} array - The array to query
 * @return {*} Returns the last element of the array or undefined
 */
export function last(array) {
	if (Array.isArray(array)) {
		return array[array.length - 1];
	}
}

/**
 * Returns next element from array
 * @param {number} index - The index to query
 * @param {any[]} array - The array to query
 * @param {boolean} [loop=true] - Disable infinite array loop
 * @returns {*} Return the previous element of the array
 */
export function next(index, array, loop = true) {
	if (Array.isArray(array)) {
		const next = index + 1;
		return array[loop ? next % array.length : next];
	}
}

/**
 * Returns previous element from array
 * @param {number} index - The index to query
 * @param {any[]} array - The array to query
 * @param {boolean} [loop=true] - Disable infinite array loop
 * @returns {*} Returns the previous element of the array
 */
export function prev(index, array, loop = true) {
	if (Array.isArray(array)) {
		const length = array.length;
		const prev = index - 1;
		return array[loop ? (prev + length) % length : prev];
	}
}

/**
 * Prints a value or an array of values
 * @param {*|*[]} value - The value or array of values to print
 * @param {string} [separator=', '] - The join separator
 * @returns {string} Returns the value as a string
 */
export function print(value, separator = ', ') {
	return toArray(value).join(separator);
}

/**
 * Pushs a value or an array of values recursively
 * @param {*[]} array - The array to add values to
 * @param {*[]} value - The value or array of values to add
 * @param {boolean} [unique=true] - If `true`, only unique values will be added
 * @returns {number|undefined} Returns the size of the array or undefined
 */
export function push(array, value, unique = true) {
	if (!Array.isArray(array) || !value) {
		return;
	}

	if (Array.isArray(value)) {
		value.forEach((el) => push(array, el));
	} else {
		if (!unique || (unique && !array.includes(value))) {
			array.push(value);
		}
	}

	return array.length;
}

/**
 * Returns random element from array
 * @param {any[]} array - The array to query
 * @return {*} Returns a random element or undefined
 */
export function random(array) {
	if (Array.isArray(array)) {
		return array[Math.floor(Math.random() * array.length)];
	}
}

/**
 * Randomize array
 * @param {*[]} array - The array to be shuffled through
 * @returns {*} Returns the shuffled array or undefined
 */
export function shuffle(array) {
	if (Array.isArray(array)) {
		return array
			.map((a) => [Math.random(), a])
			.sort((a, b) => a[0] - b[0])
			.map((a) => a[1]);
	}
}

/**
 * Returns value as an array if it's not one
 * @param {*|*[]} value - The value to convert to an array
 * @returns {*[]} Returns the value as an array
 */
export function toArray(value = []) {
	return Array.isArray(value) ? value : [value];
}
