import {compare, has, isEmpty, next, prev, print, push, random, shuffle, typeOf} from './filter';


describe('The filter utils', () => {

	it('should compare to values', () => {
		const array = ['foo', 'bar', 'baz'];

		expect(compare()).toBeUndefined();
		expect(compare(array, 'foo', 'contains')).toBeTruthy();
		expect(compare('foobar', 'foo', 'contains')).toBeTruthy();
		expect(compare(array, 'foo')).toBeTruthy();
	});

	it('should find a value in obj recursively', () => {
		const array = ['foo', 'bar', 'baz'];

		expect(has(array, 'foo')).toBeTruthy();
		expect(has(array, ['foo', 'bar'])).toBeTruthy();
		expect(has(array, '')).toBeFalsy();
	});

	it('should validate empty value', () => {
		expect(isEmpty(null)).toBeTruthy();
		expect(isEmpty('')).toBeTruthy();
		expect(isEmpty([])).toBeTruthy();
		expect(isEmpty('foo')).toBeFalsy();
		expect(isEmpty(['foo'])).toBeFalsy();
	});

	it('should return next element from array', () => {
		const array = ['foo', 'bar', 'baz'];

		expect(next(0, array)).toBe('bar');
		expect(next(2, array)).toBe('foo');
		expect(next()).toBeUndefined();
	});

	it('should return prev element from array', () => {
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

		expect(push(array, 'foo')).toBe(1);
		expect(push(array, ['foo', 'bar', 'baz'])).toBe(3);
		expect(push(array, 1)).toBe(4);

		expect(push()).toBeUndefined();
		expect(push(null, 'foo')).toBeUndefined();
		expect(push('foo', 'bar')).toBeUndefined();
		expect(push(array, '')).toBeUndefined();
		expect(push(array, {})).toBeUndefined();
	});

	it('should return random element', () => {
		const array = ['foo', 'bar', 'baz'];

		expect(random(array)).toBeDefined();
	});

	it('should shuffle array', () => {
		const
			array = ['foo', 'bar', 'baz']
		;

		expect(shuffle()).toBeUndefined();
		expect(shuffle('foo')).toBeUndefined();
		expect(shuffle(array)).toBeDefined();
		expect(shuffle(array)).toEqual(expect.arrayContaining(array));
	});

	it('should get type of value', () => {
		expect(typeOf('')).toBe('string');
		expect(typeOf(null)).toBe('null');
		expect(typeOf(undefined)).toBe('undefined');
		expect(typeOf([])).toBe('array');
		expect(typeOf(1)).toBe('number');
		expect(typeOf(NaN)).toBe('number');
		expect(typeOf({})).toBe('object');
		expect(typeOf(Symbol())).toBe('symbol');
		expect(typeOf(() => {})).toBe('function');
	});

});
