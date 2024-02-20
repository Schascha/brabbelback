/**
 * Truncate a string to a certain length
 * @param {string} str - The string to truncate
 * @param {number} [length=250] - The length to truncate the string to, default is 250
 * @param {string} [ending='...'] - The ending to append to the string, default is '...'
 * @returns {string} The truncated string
 */
export function truncate(str, length = 250, ending = '...') {
	str = str.trim();
	return str.length > length
		? `${str.slice(0, length - ending.length).trim()}${ending}`
		: str;
}
