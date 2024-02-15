/**
 * Truncate a string to a certain length
 * @param {string} str - The string to truncate
 * @param {number} length - The length to truncate the string, default is 250
 * @param {string} ending - The ending to append to the truncated string, default is '...'
 * @returns
 */
export function truncate(str, length = 250, ending = '...') {
	str = str.trim();
	return str.length > length
		? `${str.slice(0, length - ending.length).trim()}${ending}`
		: str;
}
