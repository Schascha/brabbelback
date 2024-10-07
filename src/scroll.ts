/**
 * Check if scroll behavior is supported
 * @returns {boolean} - Scroll behavior support
 */
export function isScrollBehaviorSupported(): boolean {
	return 'scrollBehavior' in document.documentElement.style;
}

/**
 * Scroll to the top of the element with an optional offset and scroll behavior
 * @param {HTMLElement} el - The element to scroll to
 * @param {string|number|HTMLElement} [offset=0] - The offset to apply, can be a number, a string selector or an HTMLElement, default is 0
 * @param {ScrollBehavior} [behavior='smooth'] -  The scroll behavior, can be 'auto', 'smooth', 'instant', default is 'smooth'
 * @returns {void}
 */
export function scrollToTop(
	el: HTMLElement,
	offset: string | number | HTMLElement = 0,
	behavior: ScrollBehavior = 'smooth'
): void {
	if (!el) return;

	// Get the offset value
	if (typeof offset === 'string')
		offset = document.querySelector(offset) as HTMLElement;
	if (offset instanceof HTMLElement) offset = offset.offsetHeight;
	const _offset = offset || 0;

	const top =
		Math.max(el.offsetTop, el.getBoundingClientRect().top + window.scrollY) -
		_offset;

	if (top) {
		isScrollBehaviorSupported()
			? window.scrollTo({ top, behavior })
			: window.scrollTo(0, top);
	}
}
