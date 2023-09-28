/**
 * Get cookie by name.
 * @param {string} name The name of the cookie.
 * @return {boolean|string} Returns value of cookie, else false.
 */
export function getCookie(name) {
	const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
	return match && match[2] ? match[2] : false;
}

/**
 * Set cookie.
 * @param {string} name  The name of the cookie.
 * @param {string} value  The value of the cookie.
 * @param {number} [days=1]  The expiration date.
 * @return {*}
 */
export function setCookie(name, value, days = 1) {
	if (!name) {
		return;
	}

	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie =
		name + '=' + value + '; expires=' + date.toUTCString() + '; path=/';
}

/**
 * Remove cookie.
 * @param {string} name The name of the cookie.
 * @return {*}
 */
export function removeCookie(name) {
	setCookie(name, '', 0);
}

/**
 * Clear all cookies.
 * @return {*}
 */
export function clearCookies() {
	document.cookie.split(';').forEach((c) => {
		const name = c.replace(/[=].*/, '').trim();
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname.replace(
			/^([^.]+\.)/g,
			'.',
		)};`;
	});
}
