import {compare, isEmpty, next, prev, print, push, random} from './filter';


describe('The filter utils', () => {

	it('should compare to values', () => {
		const array = ['foo', 'bar', 'baz'];

		expect(compare()).toBeUndefined();
		expect(compare(array, 'foo', 'contains')).toBeTruthy();
		expect(compare('foobar', 'foo', 'contains')).toBeTruthy();
		expect(compare(array, 'foo')).toBeTruthy();
	});

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

	it('should returns array as string', () => {
		expect(print('foo')).toBe('foo');
		expect(print(['foo', 'bar', 'baz'])).toBe('foo, bar, baz');
	});

	it('should push values or an array of values recursively', () => {
		const array = [];

		push(array, 'foo');
		expect(array).toHaveLength(1);

		push(array, ['foo', 'bar', 'baz']);
		expect(array).toHaveLength(3);

		expect(push()).toBeUndefined();
	});

	it('should return random element', () => {
		const array = ['foo', 'bar', 'baz'];

		expect(random(array)).toBeDefined();
	});

});
