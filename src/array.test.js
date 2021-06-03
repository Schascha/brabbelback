import {has, isEmpty, last, next, prev, print, push, random, shuffle, toArray} from './array';


describe('The array utils', () => {

	it('should find a value in an array recursively', () => {
		const array = ['foo', 'bar', 'baz'];
		expect(has(array, 'foo')).toBeTruthy();
		expect(has(array, ['foo', 'bar'])).toBeTruthy();
		expect(has('foo', ['foo', 'bar'])).toBeTruthy();
		expect(has(array, 'foo')).toBeTruthy();
		expect(has(array, '')).toBeFalsy();
		expect(has(array, null)).toBeFalsy();
		expect(has(array, 'qux')).toBeFalsy();
	});

	it('should validate empty value or array', () => {
		expect(isEmpty(null)).toBeTruthy();
		expect(isEmpty('')).toBeTruthy();
		expect(isEmpty([])).toBeTruthy();
		expect(isEmpty([[]])).toBeTruthy();
		expect(isEmpty('foo')).toBeFalsy();
		expect(isEmpty(['foo'])).toBeFalsy();
		expect(isEmpty([[null, 'foo']])).toBeFalsy();
	});

	it('should return last element', () => {
		expect(last(['foo'])).toBe('foo');
		expect(last(['foo', 'bar', 'baz'])).toBe('baz');
		expect(last()).toBeUndefined();
	});

	it('should return next element', () => {
		const array = ['foo', 'bar', 'baz'];
		expect(next(0, array)).toBe('bar');
		expect(next(2, array)).toBe('foo');
		expect(next(2, array, false)).toBeUndefined();
		expect(next(0, ['foo'])).toBe('foo');
		expect(next()).toBeUndefined();
	});

	it('should return previous element', () => {
		const array = ['foo', 'bar', 'baz'];
		expect(prev(0, array)).toBe('baz');
		expect(prev(2, array)).toBe('bar');
		expect(prev(2, array, false)).toBeUndefined();
		expect(prev(0, ['foo'])).toBe('foo');
		expect(prev()).toBeUndefined();
	});

	it('should push values or an array of values recursively', () => {
		const array = [];
		expect(push(array, 'foo')).toBe(1);
		expect(push(array, ['foo', 'bar', 'baz'])).toBe(3);
		expect(push(array, 1)).toBe(4);
		expect(push(array, 'foo', false)).toBe(5);
		expect(array).toEqual(expect.arrayContaining(['foo', 'bar', 'baz', 1, 'foo', ]));
		expect(push()).toBeUndefined();
		expect(push('foo', 'bar')).toBeUndefined();
	});

	it('should returns array as string', () => {
		expect(print('foo')).toBe('foo');
		expect(print(['foo', 'bar', 'baz'])).toBe('foo, bar, baz');
		expect(print(['foo', 'bar', 'baz'], '|')).toBe('foo|bar|baz');
		expect(print()).toBeUndefined();
	});

	it('should return random element', () => {
		const array = ['foo', 'bar', 'baz'];
		expect(array).toContain(random(array));
		expect(random()).toBeUndefined();
	});

	it('should shuffle array', () => {
		const array = ['foo', 'bar', 'baz'];
		expect(shuffle(array)).toEqual(expect.arrayContaining(array));
		expect(shuffle()).toBeUndefined();
		expect(shuffle('foo')).toBeUndefined();
	});

	it('should return value as an array', () => {
		expect(toArray(1)).toEqual([1]);
		expect(toArray('foo')).toEqual(['foo']);
		expect(toArray(['foo'])).toEqual(['foo']);
		expect(toArray()).toEqual([]);
	});
});
