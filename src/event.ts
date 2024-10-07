/**
 * Debounce function to prevent multiple calls in a short period of time
 * @param {Function} fn - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} The debounced function
 */
export function debounce(fn: Function, delay: number): Function {
	let timer = 0;
	return (...args: any) => {
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
export function throttled(fn: Function, delay: number): Function {
	let timer = 0;
	return (...args: any) => {
		const now = new Date().getTime();
		if (now - timer < delay) return;
		timer = now;
		return fn(...args);
	};
}
