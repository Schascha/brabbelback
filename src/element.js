/**
 * Wrap an element in a div
 * @param {Element} el - The DOM element to wrap
 * @param {string} className - The class name to be added to the wrapper, defaults to 'wrap'
 */
export function wrapEl(el, className = 'wrap') {
	const wrapper = document.createElement('div');
	wrapper.className = className;
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
