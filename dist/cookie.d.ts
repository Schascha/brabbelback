/**
 * Get cookie
 * @param {string} name - The name of the cookie
 * @return {string|boolean} The value of the cookie or false if not found
 */
export declare function getCookie(name: string): string | boolean;
/**
 * Set cookie
 * @param {string} name - The name of the cookie
 * @param {string} value - The value of the cookie
 * @param {number} [days=1] - The number of days to keep the cookie
 * @return {void}
 */
export declare function setCookie(name: string, value: string, days?: number): void;
/**
 * Remove cookie
 * @param {string} name - The name of the cookie
 * @return {void}
 */
export declare function removeCookie(name: string): void;
/**
 * Clear all cookies
 * @param {string[]} [whitelist=[]] - The list of cookies to keep
 * @return {void}
 */
export declare function clearCookies(whitelist?: string[]): void;
