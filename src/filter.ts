import { has, toArray } from './array';

/**
 * Compare a with b using the given operator
 * @param  {String|String[]} a - The value or array of values to compare
 * @param  {String|String[]} b - The value or array of values to compare with
 * @param  {String} operator - The operator to use, default is ''
 * @return {Boolean} Returns true if the comparison is true, otherwise false
 */
export function compare(
	a?: string | string[],
	b?: string | string[],
	operator: string = ''
): boolean {
	if (!a || !b) return false;
	switch (operator) {
		case 'contains':
			return toArray(a).some((a) =>
				toArray(b).some((b) => a.toLowerCase().indexOf(b.toLowerCase()) > -1)
			);
		default:
			return Array.isArray(a) ? has(a, b) : b.includes(a);
	}
}

/**
 * Filters an array of objects with multiple criteria
 * @param {Object[]} obj - The array of objects to filter
 * @param {{field: any | any[], value: any, operator: string}[]} filters - The filters to apply
 * @return {Object[]} The filtered array
 */
export function filter<T extends Record<string, any>>(
	obj: T[],
	filters?: { field: string | string[]; value: any; operator?: string }[]
): T[] {
	return filters?.length
		? obj.filter((el) => {
				return filters.every((filter) => {
					if (Array.isArray(filter.field)) {
						return filter.field.find((item) =>
							compare(el[item], filter.value, filter.operator)
						);
					} else {
						return compare(el[filter.field], filter.value, filter.operator);
					}
				});
			})
		: obj;
}

/**
 * Group array items by key
 * @param  {Object[]} array - The array with objects to group
 * @param  {String} key - The key to group by
 * @return {Object} The grouped array
 */
export function groupBy<T extends Record<string, any>>(
	array: T[],
	key: string
): Record<string, T[]> {
	return array.reduce((rv: Record<string, T[]>, x: T) => {
		(rv[x[key]] = rv[x[key]] || []).push(x);
		return rv;
	}, {});
}
