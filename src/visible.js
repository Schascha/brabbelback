/**
 * Returns if the DOM element is visible on the users viewport.
 * @param  {Element} el The DOM element to be inspected.
 * @return {*} Return `true` if element is visible, else `false` or ``undefined`.
 */
export function isVisible(el) {
	if (!el) {
		return;
	}

	const { top, right, bottom, left } = el.getBoundingClientRect(),
		width = window.innerWidth || document.documentElement.clientWidth,
		height = window.innerHeight || document.documentElement.clientHeight;
	return top >= 0 && right <= width && bottom <= height && left >= 0;
}
