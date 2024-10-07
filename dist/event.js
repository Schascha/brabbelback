"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = debounce;
exports.throttled = throttled;
/**
 * Debounce function to prevent multiple calls in a short period of time
 * @param {Function} fn - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} The debounced function
 */
function debounce(fn, delay) {
    let timer = 0;
    return (...args) => {
        window.clearTimeout(timer);
        timer = window.setTimeout(() => fn(...args), delay);
    };
}
/**
 * Throttle function to reduce the trigger rate
 * @param {Function} fn - The function to throttle
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} The throttled function
 */
function throttled(fn, delay) {
    let timer = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - timer < delay)
            return;
        timer = now;
        return fn(...args);
    };
}
