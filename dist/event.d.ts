/**
 * Debounce function to prevent multiple calls in a short period of time
 * @param {Function} fn - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} The debounced function
 */
export declare function debounce(fn: Function, delay: number): Function;
/**
 * Throttle function to reduce the trigger rate
 * @param {Function} fn - The function to throttle
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} The throttled function
 */
export declare function throttled(fn: Function, delay: number): Function;
