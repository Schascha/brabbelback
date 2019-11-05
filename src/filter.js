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
				return a.findIndex(el => el.toLowerCase().indexOf(b.toLowerCase()) !== -1) !== -1
			} else {
				return a.toLowerCase().indexOf(b.toLowerCase()) !== -1;
			}
		default:
			return (Array.isArray(a)) ? has(a, b) : b.includes(a);
	}
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
 * Prints a value or an array of values
 * @param  {(String|String[])} value
 * @return {String}
 */
export function print(value, separator = ', ') {
	return (Array.isArray(value)) ? value.join(separator) : value;
}

/**
 * Pushs a value or an array of values recursively
 * @param  {Object[]} obj
 * @param  {(String|String[])} value
 */
export function push(obj, value) {
	if (!obj || !value) {
		return;
	}

	if (Array.isArray(value)) {
		value.forEach((el) => push(obj, el));
	} else if(obj.indexOf(value) === -1) {
		obj.push(value);
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
 * Checks if value is empty
 * @param  {mixed} value
 * @return {Boolean}
 */
export function isEmpty(value) {
	return (value === null || value === '' || (Array.isArray(value) && !value.length));
}
