import {compare, isEmpty} from './filter';


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

});
