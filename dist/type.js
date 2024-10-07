"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOf = typeOf;
/**
 * Type-checking with Object.prototype.toString() method
 * @param {any} value - The value to inspect
 * @returns {string} Returns type as lowercase string, e.g. 'string' or 'array'
 */
function typeOf(value) {
    return Object.prototype.toString
        .call(value)
        .split(']')[0]
        .split(' ')[1]
        .toLowerCase();
}
