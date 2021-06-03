export function typeOf(value) {
	return Object.prototype.toString.call(value).split(']')[0].split(' ')[1].toLowerCase();
}

/**
 * Typecheck
 * @param {mixed} a
 * @param {string | Array} b
 * @returns
 */
export function isType(a, b) {
	const
		value = typeOf(a),
		array = (Array.isArray(b) ? b : [b]).map(el => el.toLowerCase())
	;

	return array.includes(value);
}
