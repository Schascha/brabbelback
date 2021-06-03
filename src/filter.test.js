import {compare, isEmpty, typeOf} from './filter';


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
