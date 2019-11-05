import {isEmpty, next, prev, push, random} from './filter';


describe('The filter utils', () => {

	it('should validate empty value', () => {
		expect(isEmpty(null)).toBeTruthy();
		expect(isEmpty('')).toBeTruthy();
		expect(isEmpty([])).toBeTruthy();
		expect(isEmpty('foo')).toBeFalsy();
		expect(isEmpty(['foo'])).toBeFalsy();
	});

	it('should return next element', () => {
		const array = ['foo', 'bar', 'baz'];

		expect(next(0, array)).toBe('bar');
		expect(next(2, array)).toBe('foo');
		expect(next()).toBeUndefined();
	});

	it('should return prev element', () => {
		const array = ['foo', 'bar', 'baz'];

		expect(prev(0, array)).toBe('baz');
		expect(prev(2, array)).toBe('bar');
		expect(prev()).toBeUndefined();
	});

	it('should push values or an array of values recursively', () => {
		var array = [];

		push(array, 'foo');
		expect(array.length).toBe(1);

		push(array, ['foo', 'bar', 'baz']);
		expect(array.length).toBe(3);
	});

	it('should return random element', () => {
		const array = ['foo', 'bar', 'baz'];

		expect(random(array)).toBeDefined();
		expect(prev()).toBeUndefined();
	});

});
