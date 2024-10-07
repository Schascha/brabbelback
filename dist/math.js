"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gcd = gcd;
exports.ratio = ratio;
/**
 * Greatest common divisor
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Returns the greatest common divisor
 */
function gcd(a, b) {
    return !b ? a : gcd(b, a % b);
}
/**
 * Ratio of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {string} Returns the ratio as a string, e.g. "16:9"
 */
function ratio(a, b) {
    return `${a / gcd(a, b)}:${b / gcd(a, b)}`;
}
