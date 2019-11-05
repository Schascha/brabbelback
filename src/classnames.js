/**
 * Class name helper
 * @param  {mixed} classes
 * @return {string}
 */

export function classnames(classes) {
	if (Array.isArray(classes)) {
		return classes.map((value) => classnames(value)).join(' ').trim();
	}

	if (classes && typeof classes === 'object' && classes.constructor === Object) {
		return classnames(Object.keys(classes).filter((el) => {
			const value = classes[el];
			return (Array.isArray(value) && !value.length) ? false : (value);
		}));
	}

	return classes.trim();
}
