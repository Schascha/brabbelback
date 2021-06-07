import {has} from './array';


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
 * @param  {Object[]} array An array with objects to query.
 * @param  {String} key The key to group the array items.
 * @return {Object} Returns a object with grouped arrays by the given key.
 */
export function groupBy(array, key) {
	return array.reduce((rv, x) => {
		(rv[x[key]] = rv[x[key]] || []).push(x);
		return rv;
	}, {});
}
