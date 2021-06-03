/**
 * Finds a value in array recursively.
 * @param  {Array} array The array to query.
 * @param  {*} value The search element.
 * @return {boolean} Returns `true` if `value` is in `array`, else `false`.
 */
 export function has(array, value) {
	if (!array || !value) {
		return false;
	}
	array = toArray(array);
	return (Array.isArray(value))
		? value.find((el) => has(array, el)) : array.includes(value);
}

/**
 * Checks if value or array is empty.
 * @param  {*} value The value to inspect
 * @return {boolean} Returns `true` if `value` is empty, else `false`.
 */
 export function isEmpty(value) {
	if (Array.isArray(value)) {
		return !value.length || value.find(el => isEmpty(el));
	}

	return value === null || value === '';
}


/**
 * Returns last element from array.
 * @param  {Array} array The array The array to query.
 * @return {*} Returns the last element of `array`.
 */
 export function last(array) {
	const length = array && array.length || 0;
	return length ? array[length - 1] : undefined;
}

/**
 * Returns next element from array.
 * @param {number} index
 * @param {Array} array The array to query.
 * @param {boolean} [loop=true] Disable infinite array loop.
 * @returns {*} Return the previous element of `array`.
 */
 export function next(index, array, loop = true) {
	if (Array.isArray(array)) {
		const next = index + 1;
		return array[(loop) ? next % array.length : next];
	}
}

/**
 * Returns previous element from array.
 * @param {number} index
 * @param {Array} array The array to query.
 * @param {boolean} [loop=true] Disable infinite array loop.
 * @returns {*} Returns the previous element of `array`.
 */
 export function prev(index, array, loop = true) {
	if (Array.isArray(array)) {
		const prev = index + array.length - 1;
		return array[(loop) ? prev % array.length : prev];
	}
}

/**
 * Prints a value or an array of values.
 * @param {*} value The value to print
 * @param {*} [separator=', '] The join separator
 * @returns {*} Returns value or joined array of `value`
 */
 export function print(value, separator = ', ') {
	return (Array.isArray(value)) ? value.join(separator) : value;
}

/**
 * Pushs a value or an array of values recursively.
 * @param {Array} array The array to query.
 * @param {*} value The value to be added.
 * @param {boolean} [unique=true] Unique push of strings or numbers to `array`.
 * @returns {*} Returns the size of `array` or undefined.
 */
 export function push(array, value, unique = true) {
	if (!Array.isArray(array) || !value) {
		return;
	}

	if (Array.isArray(value)) {
		value.forEach((el) => push(array, el));
	} else {
		if (!unique || unique && !array.includes(value)) {
			array.push(value);
		}
	}

	return array.length;
}

/**
 * Returns random element from array.
 * @param  {Array} array The array to query.
 * @return {*} Returns a random element of `array`.
 */
 export function random(array) {
	if (Array.isArray(array)) {
		return array[Math.floor(Math.random() * array.length)];
	}
}

/**
 * Randomize array.
 * @param {Array} array The array to be shuffled through.
 * @returns {Array} Returns the shuffled array.
 */
 export function shuffle(array) {
	if (Array.isArray(array)) {
		return array
			.map(a => [Math.random(), a])
			.sort((a, b) => a[0] - b[0])
			.map(a => a[1]);
	}
}

/**
 * Returns value as an array if it's not one.
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the value as an array.
 */
export function toArray(...args) {
	if (!args.length) {
		return [];
	}
	const value = args[0];
	return Array.isArray(value) ? value : [value];
}
