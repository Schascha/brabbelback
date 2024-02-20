/**
 * Type-checking with Object.prototype.toString() method
 * @param {*} value - The value to inspect
 * @returns {string} Returns type as lowercase string
 */
export function typeOf(value) {
	return Object.prototype.toString
		.call(value)
		.split(']')[0]
		.split(' ')[1]
		.toLowerCase();
}
