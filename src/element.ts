/**
 * Create element
 * @param {K} tag - Element tag
 * @param {Object} options - Element options
 * @param {string} [options.className] - Element class name
 * @param {string} [options.insertMethod] - Method to insert the element, default is append
 * @param {Element} [options.parent] - Parent element
 * @param {HTMLElement[]} [options.children] - Children elements to append to the created element
 * @returns {HTMLElementTagNameMap[K]} - Created element
 */
export function createEl<K extends keyof HTMLElementTagNameMap>(
	tag: K,
	options: {
		className?: string;
		insertMethod?: 'prepend' | 'append' | 'before' | 'after';
		parent?: Element;
		children?: HTMLElement[];
	} = {}
): HTMLElementTagNameMap[K] {
	const el = document.createElement(tag);
	const { children, className, insertMethod, parent } = options;
	if (className) el.className = className;
	if (parent) parent[insertMethod ?? 'append'](el);
	if (children) children.forEach((child) => el.appendChild(child));
	return el;
}

/**
 * Set styles to elements
 * @param {HTMLElement | HTMLElement[]} el - Element or array of elements
 * @param {Partial<CSSStyleDeclaration>} styles - Styles to be applied
 */
export function setStyles(
	el: HTMLElement | HTMLElement[],
	styles: Partial<CSSStyleDeclaration>
) {
	if (!el) return;
	if (Array.isArray(el))
		el.forEach((el) => el && Object.assign(el.style, styles));
	else Object.assign(el.style, styles);
}

/**
 * Wrap an element in a div
 * @param {Element} el - The DOM element to wrap
 * @param {string} className - The class name to be added to the wrapper, defaults to 'wrap'
 * @returns {Element|undefined} The wrapper element or undefined if the element or its parent is missing
 */
export function wrapEl(
	el: Element,
	className: string = 'wrap'
): Element | undefined {
	if (!el?.parentNode) return;
	const wrapper = document.createElement('div');
	wrapper.className = className;
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
	return wrapper;
}
