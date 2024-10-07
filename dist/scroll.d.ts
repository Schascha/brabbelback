/**
 * Check if scroll behavior is supported
 * @returns {boolean} - Scroll behavior support
 */
export declare function isScrollBehaviorSupported(): boolean;
/**
 * Scroll to the top of the element with an optional offset and scroll behavior
 * @param {HTMLElement} el - The element to scroll to
 * @param {string|number|HTMLElement} [offset=0] - The offset to apply, can be a number, a string selector or an HTMLElement, default is 0
 * @param {ScrollBehavior} [behavior='smooth'] -  The scroll behavior, can be 'auto', 'smooth', 'instant', default is 'smooth'
 * @returns {void}
 */
export declare function scrollToTop(el: HTMLElement, offset?: string | number | HTMLElement, behavior?: ScrollBehavior): void;
