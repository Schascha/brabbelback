import {compare} from './filter';


describe('The filter utils', () => {

	it('should compare to values', () => {
		const array = ['foo', 'bar', 'baz'];

		expect(compare()).toBeUndefined();
		expect(compare(array, 'foo', 'contains')).toBeTruthy();
		expect(compare('foobar', 'foo', 'contains')).toBeTruthy();
		expect(compare(array, 'foo')).toBeTruthy();
	});

});
