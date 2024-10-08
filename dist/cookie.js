"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.removeCookie = removeCookie;
exports.clearCookies = clearCookies;
const date_1 = require("./date");
/**
 * Get cookie
 * @param {string} name - The name of the cookie
 * @return {string|boolean} The value of the cookie or false if not found
 */
function getCookie(name) {
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
function setCookie(name, value, days = 1) {
    if (name) {
        document.cookie = `${name}=${value}; expires=${(0, date_1.addDays)(new Date(), days).toUTCString()}; path=/;`;
    }
}
/**
 * Remove cookie
 * @param {string} name - The name of the cookie
 * @return {void}
 */
function removeCookie(name) {
    setCookie(name, '', 0);
}
/**
 * Clear all cookies
 * @param {string[]} [whitelist=[]] - The list of cookies to keep
 * @return {void}
 */
function clearCookies(whitelist = []) {
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
