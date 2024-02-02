/**
 * Scroll to the top of the element
 * @param {HTMLElement} el - The element to scroll to
 * @param {string|number|HTMLElement} offset - The offset to apply, can be a number, a string selector or an HTMLElement, default is 0
 * @param {ScrollBehavior} behavior - The scroll behavior, can be 'auto', 'smooth', 'instant', default is 'smooth'
 */
export function scrollToTop(el, offset = 0, behavior = 'smooth') {
	if (!el) {
		return;
	}

	let offsetEl;

	if (offset instanceof HTMLElement) {
		offsetEl = offset;
	}

	if (typeof offset === 'string') {
		offsetEl = document.querySelector(offset);
	}

	if (offsetEl instanceof HTMLElement) {
		offset = offset.offsetHeight;
	}

	offset = offset || 0;

	const top = Math.max(el.offsetTop, el.getBoundingClientRect().top + window.scrollY) - offset;
	if (el && top) {
		if ('scrollBehavior' in document.documentElement.style) {
			window.scrollTo({ top, behavior });
		} else {
			window.scrollTo(0, top);
		}
	}
}
