import { addDays } from './date';

/**
 * Get cookie
 * @param {string} name - The name of the cookie
 * @return {string|boolean} The value of the cookie or false if not found
 */
export function getCookie(name: string): string | boolean {
	const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
	return match ? match[2] : false;
}

/**
 * Set cookie
 * @param {string} name - The name of the cookie
 * @param {string} value - The value of the cookie
 * @param {number} [days=1] - The number of days to keep the cookie
 * @return {void}
 */
export function setCookie(name: string, value: string, days: number = 1): void {
	if (name) {
		document.cookie = `${name}=${value}; expires=${addDays(new Date(), days).toUTCString()}; path=/;`;
	}
}

/**
 * Remove cookie
 * @param {string} name - The name of the cookie
 * @return {void}
 */
export function removeCookie(name: string): void {
	setCookie(name, '', 0);
}

/**
 * Clear all cookies
 * @param {string[]} [whitelist=[]] - The list of cookies to keep
 * @return {void}
 */
export function clearCookies(whitelist: string[] = []): void {
	document.cookie.split(';').forEach((c) => {
		const name = c.replace(/[=].*/, '').trim();

		if (whitelist.includes(name)) {
			return;
		}

		const domain = window.location.hostname.replace(/^([^.]+\.)/g, '.');
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain};`;
	});
}
