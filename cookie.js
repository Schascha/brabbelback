/**
 * Get cookie by name
 * @param  {string} name
 * @return {string}
 */
export function get(name) {
	const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));

	return (match && match[2]) ? match[2] : false;
}

/**
 * Set cookie
 * @param {string} name
 * @param {string} value
 * @param {number} [days=1]
 */
export function set(name, value, days = 1) {
	if (!name) {
		return;
	}

	const date = new Date();
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	document.cookie = name + '=' + value + '; expires=' + date.toGMTString() + '; path=/';
}
