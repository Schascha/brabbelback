/**
 * Returns if the DOM element is visible on the users viewport
 * @param  {object} el
 * @return {boolean}
 */
export function visible(el) {
	if (!el) {
		return;
	}

	const bounding = el.getBoundingClientRect();

	return (
		bounding.top >= 0 &&
		bounding.left >= 0 &&
		bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}
