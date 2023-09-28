import { isVisible } from './visible';

describe('The visible utils', () => {
	it('should return if an element is visible', () => {
		document.body.innerHTML = `<div id="foo"></div>`;

		const el = document.getElementById('foo');
		expect(isVisible(el)).toBeTruthy();

		window.innerHeight = 0;
		window.innerWidth = 0;
		el.getBoundingClientRect = jest.fn(() => ({
			top: 0,
			right: 2000,
			bottom: 2000,
			left: 0,
		}));
		expect(isVisible(el)).toBeFalsy();

		expect(isVisible()).toBeUndefined();
	});
});
