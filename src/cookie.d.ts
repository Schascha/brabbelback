/**
 * Get cookie by name.
 * @param {string} name The name of the cookie.
 * @return {boolean|string} Returns value of cookie, else false.
 */
 export function getCookie(name: string): boolean | string;
 /**
  * Set cookie.
  * @param {string} name  The name of the cookie.
  * @param {string} value  The value of the cookie.
  * @param {number} [days=1]  The expiration date.
  * @return {*}
  */
 export function setCookie(name: string, value: string, days?: number): any;
 /**
  * Remove cookie.
  * @param {string} name The name of the cookie.
  * @return {*}
  */
 export function removeCookie(name: string): any;
 /**
  * Clear all cookies.
  * @return {*}
  */
 export function clearCookies(): any;
