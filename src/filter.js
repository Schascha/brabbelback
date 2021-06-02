/**
 * Compare a with b
 * @param  {String|String[]} a
 * @param  {String|String[]} b
 * @param  {String} [operator='']
 * @return {Boolean}
 */
export function compare(a, b, operator = '') {
	if (!a || !b) {
		return;
	}

	switch (operator) {
		case 'contains':
			if (Array.isArray(a)) {
				return a.findIndex(el => el.toLowerCase().indexOf(b.toLowerCase()) !== -1) !== -1;
			} else {
				return a.toLowerCase().indexOf(b.toLowerCase()) !== -1;
			}
		default:
			return (Array.isArray(a)) ? has(a, b) : b.includes(a);
	}
}

/**
 * Filters an array of objects with multiple criteria
 * @param  {Object} obj
 * @param  {Object[]} filters
 * @return {Object}
 */
export function filter(obj, filters) {
	return (filters && filters.length) ? obj.filter(el => {
		return filters.every(filter => {
			if (Array.isArray(filter.field)) {
				return filter.field.find(item => compare(el[item], filter.value, filter.operator));
			} else {
				return compare(el[filter.field], filter.value, filter.operator);
			}
		});
	}) : obj;
}

/**
 * Group array items by key
 * @param  {Object[]} obj
 * @param  {String} key
 * @return {Object}
 */
export function groupBy(obj, key) {
	return obj.reduce(function(rv, x) {
		(rv[x[key]] = rv[x[key]] || []).push(x);
		return rv;
	}, {});
}

/**
 * Finds value in obj recursively
 * @param  {Object[]} obj
 * @param  {(String|String[])} value
 * @return {Boolean}
 */
export function has(obj, value) {
	if (!obj || !value) {
		return;
	}

	return (Array.isArray(value))
		? value.find((el) => has(obj, el)) : obj.indexOf(value) !== -1;
}

/**
 * Checks if value or array is empty
 * @param  {mixed} value
 * @return {Boolean}
 */
export function isEmpty(value) {
	return (value === null || value === '' || (Array.isArray(value) && !value.length));
}

/**
 * Returns next element
 * @param  {number} index
 * @param  {Object[]} obj
 * @return {mixed}
 */
export function next(index, obj) {
	if (Array.isArray(obj)) {
		return obj[(index + 1) % obj.length];
	}
}

/**
 * Returns previous element
 * @param  {number} index
 * @param  {Object[]} obj
 * @return {mixed}
 */
export function prev(index, obj) {
	if (Array.isArray(obj)) {
		return obj[(index + obj.length - 1) % obj.length];
	}
}

/**
 * Prints a value or an array of values
 * @param  {(String|String[])} value
 * @return {String}
 */
export function print(value, separator = ', ') {
	return (Array.isArray(value)) ? value.join(separator) : value;
}

/**
 * Pushs a value or an array of values recursively
 * @param  {Array} obj
 * @param  {number | string | Array} value
 * @returns {number | undefined}
 */
export function push(arr, value) {
	if (!Array.isArray(arr) || !value || !isType(value, ['array', 'number', 'string'])) {
		return;
	}

	if (Array.isArray(value)) {
		value.forEach((el) => push(arr, el));
	} else if (!arr.includes(value)) {
		arr.push(value);
	}

	return arr.length;
}

/**
 * Returns random element
 * @param  {Object[]} obj
 * @return {mixed}
 */
export function random(obj) {
	if (Array.isArray(obj)) {
		return obj[Math.floor(Math.random() * obj.length)];
	}
}

/**
 * Shuffle array
 * @param {Object[]} obj
 * @returns {Object[]}
 */
export function shuffle(obj) {
	if (Array.isArray(obj)) {
		return obj
			.map(a => [Math.random(), a])
			.sort((a, b) => a[0] - b[0])
			.map(a => a[1]);
	}
}

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
